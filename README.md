🤖 AI Test Case Generator
Automatically generate comprehensive test cases for your code using AI — supports JavaScript, Python, Java, and C++.

📌 Problem Statement
Software development teams spend a huge amount of time writing test cases manually. A developer working on a medium-sized project may have hundreds of functions to test, and writing thorough tests for each one — covering happy paths, edge cases, null inputs, and error handling — is repetitive, time-consuming, and often skipped due to deadlines.
This leads to:
🐛 Bugs reaching production
📉 Poor code quality
😤 Frustrated users and developers

The core problem: Writing comprehensive test cases manually is slow, boring, and error-prone — and developers avoid it.

✅ Solution
AI Test Case Generator is a web-based tool that automatically reads your code, understands each function, and generates thorough test cases using a Large Language Model (LLaMA 3.3 via Groq API).
Simply upload a file or paste your code — and get production-ready test cases in seconds.

✨ Features
FeatureDescription📂 File UploadUpload any .js, .py, .java, or .cpp file
📋 Paste CodePaste code directly without needing a file
🤖 AI GenerationUses Groq LLaMA 3.3 to generate smart test cases
🌍 Multi-languageSupports JavaScript, Python, Java, and C++
⚠️ Error HighlightingRed cards for functions with error/throw cases
📝 ReportAuto-generates a markdown summary report
📦 DownloadDownload all test files as a .zip
⚡ FastGenerates tests for all functions in seconds

🛠️ Tech Stack
Here's your tech stack ready to paste anywhere — presentation, report, or submission:

🛠️ Tech Stack
Runtime & Backend

Node.js v24 — JavaScript runtime
Express.js — Web server framework
Multer — File upload handling
Archiver — Zip file generation

AI & Intelligence

Groq API — Free AI API platform
LLaMA 3.3 70B — Large language model for test generation

Frontend

HTML5 — Structure
CSS3 — Styling and dark theme UI
Vanilla JavaScript — File upload, fetch API, dynamic rendering

Parsing

Custom Regex Parser — Extracts functions from JS, Python, Java, C++

Developer Tools

dotenv — Secure API key management
npm — Package manager
VS Code — Code editor
Git — Version control

Languages Supported for Test Generation

JavaScript → Jest
Python → pytest
Java → JUnit
C++ → Google Test

test-generator/
├── agent/
│   ├── parser.js         ← Extracts functions from code files
│   ├── generator.js      ← Sends functions to Groq AI
│   └── reporter.js       ← Generates markdown summary report
├── input/
│   ├── sampleFunctions.js
│   ├── sample.py
│   └── sample.java
├── output/               ← Generated test files appear here
│   ├── add.test.js
│   ├── divide.test.js
│   └── report.md
├── public/
│   └── index.html        ← Web UI
├── uploads/              ← Temporary uploaded files
├── .env                  ← API keys (never commit this)
├── .gitignore
├── main.js               ← CLI entry point
├── server.js             ← Express web server
└── package.json
## 🔮 Future Improvements

### Short Term
- [ ] Add TypeScript support
- [ ] Show test coverage percentage score
- [ ] Let users edit generated tests in the browser before downloading
- [ ] Add syntax highlighting for generated test code

### Medium Term
- [ ] GitHub integration — connect repo and generate tests for any file
- [ ] VS Code extension — right click any function to generate tests
- [ ] Support REST API testing using Postman collections
- [ ] Add support for Go and Rust

### Long Term
- [ ] Auto-run generated tests and show pass/fail results in browser
- [ ] Learn from your codebase over time to improve test quality
- [ ] Team dashboard for multiple developers
- [ ] CI/CD integration with GitHub Actions and Jenkins
- [ ] Docker support for easy deployment

## 👥 Team Members

| Name | 
|---|---|
| Prathamesh Teke | 
| Tanish Shah |
