const express = require("express"); //commonjs
const path = require("path"); //commonjs
// import { Express } from "express"; es modules
const app = express(); // app of express
const port = 8080; // port to run the app

//config template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine1", "ejs");

//khai báo route (đường link)
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/test", (req, res) => {
  // res.send("<h1>Test: when the client wants an HTML response  </h1>");
  res.render("simple2.ejs");
});

// cho server chạy  = hàm listen
app.listen(port, () => {
  console.log(`"callback function : " Example app listening on port ${port}`);
});

/*app.get('/abc', (req, res) => { res.send('ABC')
})

app.METHOD(PATH, HANDLER)

app ở đây là ứng dụng express

method: là HTTP request method, viết thường (sẽ đề cập tới sau) method GET sẽ nói với Express cần trả ra nội dung cho client
Path: đường link (route) trên server
Handler: function để xử lý khi route được match

res.send là cách gửi nội dung về client 'ABC' là định dạng text (String)

*/
