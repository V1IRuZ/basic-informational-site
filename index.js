import http from "node:http";
import fs from "node:fs";

const index = "./index.html";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile(index, "utf-8", (err, data) => {
      if (err) {
        console.error(err);
        res.end();
      } else {
        res.end(data);
      }
    });
  } else if (req.url === "/about") {
    res.end("about");
  }
});

server.listen(8080, "localhost", () => {
  console.log("server listening");
});
