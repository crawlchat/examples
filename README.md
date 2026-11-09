# CrawlChat Examples

Official integration examples for [CrawlChat](https://crawlchat.com), an AI support agent that answers questions from your product documentation and links to its sources.

## Answer API with Node.js

This example sends a question to a CrawlChat agent and prints its answer and source links. It uses Node.js 22 or later and has no package dependencies.

1. Create an API key in your [CrawlChat profile](https://app.crawlchat.com/profile#developer) and copy your agent ID from [Settings](https://app.crawlchat.com/settings).
2. Copy [`answer-api/.env.example`](answer-api/.env.example) to `answer-api/.env` and fill in the two values. Keep the API key on the server and out of source control.
3. Run this from the repository root.

   ```sh
   node --env-file=answer-api/.env answer-api/ask.mjs "How do I configure single sign-on?"
   ```

See the [Answer API reference](https://docs.crawlchat.com/api/answer) for the request and response fields.
