import http from "node:http";
import fs from "node:fs";

const server = http.createServer((req, res) => {

  if (req.url === "/styles.css") {
    fs.readFile("./styles.css", (err, data) => {
      if (err) {
        console.error(err);
        res.end();
      } else {
        res.setHeader("Content-Type", "text/css");
        res.end(data);
      }
    });

  } else {

    let path = "./";

    switch (req.url) {
      case "/":
        path += "index.html";
        break;
      case "/about":
        path += "about.html";
        break;
      case "/contact-me":
        path += "contact-me.html";
        break;
      default:
        path += "404.html";
        break;
    }

    fs.readFile(path, (err, data) => {
      if (err) {
        console.error(err);
        res.end();
      } else {
        res.setHeader("Content-Type", "text/html");
        res.end(data);
      }
    });
  }
});

server.listen(8080);
