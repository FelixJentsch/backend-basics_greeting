import { createServer, request } from "node:http";

const server = createServer((request, response) => {
  response.end("Hello, Felix");
});
export { server };
