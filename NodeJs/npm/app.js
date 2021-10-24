const http = require("http");

// Create a local server to receive data from
const server = http.createServer((req, res) => {
  if (req.url === "/test") {
    req.on("data", (chunk) => {
      console.log(`Data chunk available: ${chunk}`);
    }); //postu almak için
    // res.writeHead(200, { "Content-Type": "application/json" });
    // res.end(
    //   JSON.stringify({
    //     data: "Hello Test World!",
    //   })
    // );
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Baslik</h1>");
  } else {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        data: "Hello World!",
      })
    );
  }
});

server.listen(8000, () => {
  console.log("server bound");
});
