import "dotenv/config";
import { extractFunctions } from "./agent/parser.js";
import { generateTests } from "./agent/generator.js";
import { generateReport } from "./agent/report.js";
import { writeFileSync, readdirSync } from "fs";
import { join } from "path";

const __dirname = import.meta.dirname;
const inputDir = join(__dirname, "input");
const outputDir = join(__dirname, "output");

const supported = [".js", ".py", ".java", ".cpp"];

async function main() {
  const files = readdirSync(inputDir).filter((file) =>
    supported.some((ext) => file.endsWith(ext))
  );

  if (files.length === 0) {
    console.log("❌ No supported files found in input/ folder");
    return;
  }

  console.log(`\n📂 Found ${files.length} file(s) in input/:\n`);
  files.forEach((f) => console.log(`   • ${f}`));
  console.log();

  // Track results for the report
  const results = [];

  for (const file of files) {
    const filepath = join(inputDir, file);
    console.log(`\n${"═".repeat(50)}`);
    console.log(`📄 Processing: ${file}`);
    console.log(`${"═".repeat(50)}`);

    // Try parsing the file
    let functions;
    try {
      functions = extractFunctions(filepath);
    } catch (err) {
      console.log(`❌ Could not parse ${file}: ${err.message}`);
      results.push({
        filename: file,
        language: "unknown",
        functions: [],
        error: err.message,
      });
      continue;
    }

    if (functions.length === 0) {
      console.log(`⚠️  No functions found in ${file}`);
      results.push({
        filename: file,
        language: "unknown",
        functions: [],
        error: null,
      });
      continue;
    }

    console.log(`✅ Found ${functions.length} function(s)\n`);

    // Generate tests for each function
    for (const fn of functions) {
      const tests = await generateTests(fn);
      const outputPath = join(outputDir, `${fn.name}.test.js`);
      writeFileSync(outputPath, tests);
      console.log(`✅ Tests saved → output/${fn.name}.test.js`);
    }

    results.push({
      filename: file,
      language: functions[0].language,
      functions,
      error: null,
    });
  }

  // Generate the report
  console.log(`\n${"═".repeat(50)}`);
  console.log("📝 Generating report...");
  const report = generateReport(results);
  const reportPath = join(outputDir, "report.md");
  writeFileSync(reportPath, report);
  console.log("✅ Report saved → output/report.md");

  console.log(`\n${"═".repeat(50)}`);
  console.log("🎉 All done!");
}

main();