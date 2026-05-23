import { readFileSync, existsSync } from "fs";
import { extname } from "path";

export function extractFunctions(filepath) {
  if (!existsSync(filepath)) {
    throw new Error(`File not found: ${filepath}`);
  }

  const ext = extname(filepath).toLowerCase();
  const source = readFileSync(filepath, "utf-8");
  const lines = source.split("\n");

  switch (ext) {
    case ".js":
    case ".mjs":
      return parseJavaScript(lines);
    case ".py":
      return parsePython(lines);
    case ".java":
      return parseJava(lines);
    case ".cpp":
    case ".cc":
    case ".cxx":
      return parseCpp(lines);
    default:
      throw new Error(`Unsupported file type: ${ext}. Supported: .js .py .java .cpp`);
  }
}

// ── JavaScript ────────────────────────────────────────────────────────────────
function parseJavaScript(lines) {
  const functions = [];

  lines.forEach((line, index) => {
    const declMatch = line.match(
      /^(?:export\s+)?(?:async\s+)?function\s+(\w+)\s*\(([^)]*)\)/
    );
    const arrowMatch = line.match(
      /^(?:export\s+)?(?:const|let)\s+(\w+)\s*=\s*(?:async\s+)?\(?([^)=]*)\)?\s*=>/
    );

    if (declMatch) {
      const [, name, rawParams] = declMatch;
      functions.push({
        name,
        params: parseParams(rawParams),
        body: extractBracketBody(lines, index),
        lineno: index + 1,
        language: "javascript",
      });
    } else if (arrowMatch) {
      const [, name, rawParams] = arrowMatch;
      functions.push({
        name,
        params: parseParams(rawParams),
        body: extractBracketBody(lines, index),
        lineno: index + 1,
        language: "javascript",
      });
    }
  });

  return functions;
}

// ── Python ────────────────────────────────────────────────────────────────────
function parsePython(lines) {
  const functions = [];

  lines.forEach((line, index) => {
    // Matches: def add(a, b): or async def fetch(url):
    const match = line.match(/^(?:async\s+)?def\s+(\w+)\s*\(([^)]*)\)\s*:/);

    if (match) {
      const [, name, rawParams] = match;
      functions.push({
        name,
        params: parseParams(rawParams),
        body: extractIndentBody(lines, index),
        lineno: index + 1,
        language: "python",
      });
    }
  });

  return functions;
}

// ── Java ──────────────────────────────────────────────────────────────────────
function parseJava(lines) {
  const functions = [];

  lines.forEach((line, index) => {
    // Matches: public int add(int a, int b) or private static void main(String[] args)
    const match = line.match(
      /(?:public|private|protected)?\s*(?:static\s+)?(?:\w+[\[\]]*)\s+(\w+)\s*\(([^)]*)\)\s*(?:throws\s+\w+\s*)?\{/
    );

    if (match) {
      const [, name, rawParams] = match;
      // Skip class declarations and common non-function keywords
      if (["if", "for", "while", "switch", "catch", "class"].includes(name)) return;

      functions.push({
        name,
        params: parseParams(rawParams),
        body: extractBracketBody(lines, index),
        lineno: index + 1,
        language: "java",
      });
    }
  });

  return functions;
}

// ── C++ ───────────────────────────────────────────────────────────────────────
function parseCpp(lines) {
  const functions = [];

  lines.forEach((line, index) => {
    // Matches: int add(int a, int b) or string getName(int id)
    const match = line.match(
      /^(?:[\w:]+\s+)+(\w+)\s*\(([^)]*)\)\s*(?:const\s*)?\{?$/
    );

    if (match) {
      const [, name, rawParams] = match;
      // Skip control flow keywords
      if (["if", "for", "while", "switch", "catch", "return"].includes(name)) return;
      // Skip lines that are just declarations (no body)
      if (!lines.slice(index, index + 5).join("").includes("{")) return;

      functions.push({
        name,
        params: parseParams(rawParams),
        body: extractBracketBody(lines, index),
        lineno: index + 1,
        language: "cpp",
      });
    }
  });

  return functions;
}

// ── Shared Helpers ────────────────────────────────────────────────────────────

function parseParams(rawParams) {
  if (!rawParams || !rawParams.trim()) return [];
  return rawParams
    .split(",")
    .map((p) => p.replace(/[=:].+/, "").trim())  // remove defaults/types
    .map((p) => p.split(/\s+/).pop())             // keep last word (the name)
    .filter(Boolean);
}

// For JS, Java, C++ — track { } depth
function extractBracketBody(lines, startIndex) {
  const bodyLines = [lines[startIndex]];
  let depth = 0;
  let started = false;

  for (let i = startIndex; i < lines.length; i++) {
    for (const ch of lines[i]) {
      if (ch === "{") { depth++; started = true; }
      if (ch === "}") depth--;
    }
    if (i > startIndex) bodyLines.push(lines[i]);
    if (started && depth === 0) break;
  }

  return bodyLines.join("\n");
}

// For Python — track indentation
function extractIndentBody(lines, startIndex) {
  const bodyLines = [lines[startIndex]];
  const baseIndent = lines[startIndex].search(/\S/); // indent of def line

  for (let i = startIndex + 1; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Empty lines are part of the body
    if (trimmed === "") {
      bodyLines.push(line);
      continue;
    }

    const currentIndent = line.search(/\S/);

    // Stop when we're back to same or less indentation
    if (currentIndent <= baseIndent) break;

    bodyLines.push(line);
  }

  return bodyLines.join("\n");
}

export function formatForPrompt(func) {
  return [
    `Language : ${func.language}`,
    `Function : ${func.name}`,
    `Params   : ${func.params.length ? func.params.join(", ") : "none"}`,
    `\nCode:\n${func.body}`,
  ]
    .filter(Boolean)
    .join("\n");
}