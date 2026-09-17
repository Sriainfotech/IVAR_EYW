import Anthropic from "@anthropic-ai/sdk";

let client = null;

function getClient() {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return null;
  if (!client) client = new Anthropic({ apiKey });
  return client;
}

export const CLAUDE_MODEL = "claude-sonnet-4-5";

export async function askClaude(system, userMessage) {
  const anthropic = getClient();
  if (!anthropic) return null;
  try {
    const response = await anthropic.messages.create({
      model: CLAUDE_MODEL,
      max_tokens: 700,
      system,
      messages: [{ role: "user", content: userMessage }],
    });
    const block = response.content[0];
    return block && block.type === "text" ? block.text : null;
  } catch (err) {
    console.error("[claude] request failed:", err);
    return null;
  }
}
