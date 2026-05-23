import "dotenv/config";
import express from "express";
import multer from "multer";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const archiver = require("archiver");
import { extractFunctions } from "./agent/parser.js";
import { generateTests } from "./agent/generator.js";
import { generateReport } from "./agent/report.js";
import { writeFileSync, readdirSync, readFileSync } from "fs";
import { join } from "path";

const __dirname = import.meta.dirname;
const app = express();
const upload = multer({ dest: "uploads/" });

app.use(express.static(join(__dirname, "public")));

// ── Upload & generate tests ───────────────────────────────────────────────────
app.post("/generate", upload.single("file"), async (req, res) => {
  try {
    const filepath = req.file.path;
    const originalName = req.file.originalname;

    // Rename to keep extension
    const ext = originalName.split(".").pop();
const newPath = `${filepath}.${ext}`;
const { renameSync } = await import("fs");
renameSync(filepath, newPath);

// supported extensions
const supported = ["js", "mjs", "py", "java", "cpp", "cc", "cxx", "ts"];
if (!supported.includes(ext)) {
  return res.json({ error: `Unsupported file type: .${ext}. Supported: .js .py .java .cpp` });
}

const functions = extractFunctions(newPath);
    if (functions.length === 0) {
      return res.json({ error: "No functions found in this file" });
    }

    // Generate tests for each function
    const generated = [];
    for (const fn of functions) {
      const tests = await generateTests(fn);
      const outputPath = join(__dirname, "output", `${fn.name}.test.js`);
      writeFileSync(outputPath, tests);
      generated.push({ name: fn.name, tests });
    }

    // Generate report
    const report = generateReport([{
  filename: originalName,
  language: functions[0].language,
  functions,
  error: null,
}]);
writeFileSync(join(__dirname, "output", "report.md"), report);

res.json({ success: true, functions: generated, total: generated.length, report });

  } catch (err) {
    res.json({ error: err.message });
  }
});

// ── Download all tests as zip ─────────────────────────────────────────────────
app.get("/download", (req, res) => {
  res.setHeader("Content-Type", "application/zip");
  res.setHeader("Content-Disposition", "attachment; filename=tests.zip");

  const archive = archiver("zip");
  archive.pipe(res);
  archive.directory(join(__dirname, "output"), false);
  archive.finalize();
});

// ── Start server ──────────────────────────────────────────────────────────────
app.listen(3000, () => {
  console.log("\n✅ Server running at http://localhost:3000");
  console.log("   Open this URL in your browser!\n");
});
