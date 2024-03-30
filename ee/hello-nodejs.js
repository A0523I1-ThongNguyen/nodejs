const http = require("node:http"); //  platform nodejs : mặc định node cung cấp nhiều thư viện đã viết sẵn trong platform này.

const hostname = "127.0.0.1"; // localhost
const port = 3000; // Cổng : nơi chạy dự án của chúng ta

// để tạo 1 server website : http hỗ trợ method createServer
const server = http.createServer((req, res) => {
  // nhờ hàm createServer chúng ta có thể render ra nội dung của website
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Helloooooooooooo \n");
});

// hàm listen cho server chạy : truyền 2 tham số để server biết chay trên cổng(port) và domain(hostname)
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// ps: 2 dự án không thể chạy trên 1 cổng  > Error : conflict
// k thể có 1 nguồn tài nguyên mà nhiều ứng dụng chạy trên đó được.
