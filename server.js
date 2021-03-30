const handler = require("serve-handler");
const http = require("http");

const server = http.createServer((request, response) => {
  // You pass two more arguments for config and middleware
  // More details here: https://github.com/vercel/serve-handler#options
  return handler(request, response, {
    public: "src"
  });
});

server.listen(3000, () => {
  console.log("Running at http://localhost:3000");
});
