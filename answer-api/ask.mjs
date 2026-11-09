const apiKey = process.env.CRAWLCHAT_API_KEY;
const agentId = process.env.CRAWLCHAT_AGENT_ID;
const query = process.argv.slice(2).join(" ").trim();

if (!apiKey || !agentId || !query) {
  console.error("Set CRAWLCHAT_API_KEY and CRAWLCHAT_AGENT_ID and pass a question.");
  process.exit(1);
}

try {
  const response = await fetch(
    `https://api.crawlchat.com/answer/${encodeURIComponent(agentId)}`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": apiKey,
      },
      body: JSON.stringify({ query }),
      signal: AbortSignal.timeout(60_000),
    }
  );

  if (!response.ok) {
    throw new Error(`Answer API returned HTTP ${response.status}.`);
  }

  const { content, message } = await response.json();

  console.log(content);

  if (message?.links?.length) {
    console.log("\nSources");

    for (const { title, url } of message.links) {
      console.log(title ? `- ${title} (${url})` : `- ${url}`);
    }
  }
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
