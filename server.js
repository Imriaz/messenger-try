const express = require("express");
const next = require("next");
const cors = require("cors");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Add the CORS middleware to allow requests from all origins.
  server.use(cors());

  // Add any other API routes or middleware as needed.
  // For example, if you have other API endpoints in your app:

  // server.get('/api/someendpoint', (req, res) => {
  //   // Your API logic here.
  // });

  // Default catch-all handler for Next.js
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  const port = process.env.PORT || 3000;
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
