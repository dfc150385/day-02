// console.log("1111");
const http = require("http");
// const fs = require("fs");

// 创建一个web服务器，监听3333端口
//  req request   请求,客户端向服务器发起
//  res response  相应,服务器返回客户端
http
  .createServer((req, res) => {
    console.log(req.method);
    console.log(req.url);
    res.end("hello word");
  })
  .listen(3333);
