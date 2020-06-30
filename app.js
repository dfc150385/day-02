// console.log("1111");
const http = require("http");
const fs = require("fs");

// 创建一个web服务器，监听3333端口
//  req request   请求,客户端向服务器发起
//  res response  相应,服务器返回客户端
http
  .createServer((req, res) => {
    console.log(req.method);
    console.log(req.url);
    console.log(req.headers);
    // if (req.url == "/index.html") {
    //   res.setHeader("Content-Type", "text/html;charset=utf-8"); // 设置请求头
    //   // res.end("你请求的是index.html");
    //   const str = fs.readFileSync("./public/index.html").toString();
    //   res.end(str);
    // } else {
    //   res.end("hello word"); // 输出内容
    // }
    res.setHeader("Content-Type", "text/html;charset=utf-8");
    // 创建了一个静态服务器,可以用来解析html等静态文件
    if (req.url == "/" || req.url == "/favicon.ico") {
      res.end("hello world");
    } else {
      try {
        const str = fs.readFileSync("./public" + req.url).toString();
        res.end(str);
      } catch (err) {
        res.statusCode = 404; // 设置404状态码
        res.end("404");
      }
    }
  })
  .listen(3333);
