import Groq from "groq-sdk";

const client = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function generateTests(func) {
  console.log(`\n🤖 Generating tests for: ${func.name}...`);

  const response = await client.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
      {
        role: "system",
        content: `You are a senior QA engineer.
Generate thorough test cases for the given ${func.language} function.
Cover: happy path, edge cases, null/empty inputs, errors, boundary values.
For JavaScript use Jest. For Python use pytest. For Java use JUnit. For C++ use Google Test.
Return ONLY valid code. No explanation. No markdown backticks.
Start directly with the import or include statement.`,
      },
      {
        role: "user",
        content: `Generate Jest tests for this function:

Function: ${func.name}
Params: ${func.params.join(", ")}

Code:
${func.body}`,
      },
    ],
  });

  return response.choices[0].message.content;
}

