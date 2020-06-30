# fs

fileSystem文件系统，主要用来操作本地文件

## 第三方模块

- axios，用来发起网络请求
- cheerio,用来解析html字符串

## http

http模块可以用来创建一个web服务器

```js
const http = require('http') // 引入http
http.createServer(...) // 创建一个服务器
```



## url

用来解析url字符串

```js
const url = require("url");
let strUrl = "http://localhost:3000/api/v1/users?id=8&b=9";

// url.parse 格式化url数据
//  第二个参数为bool值，为true的时候表示把query格式化为一个对象{id: 8, b: 9}
//    为false时query为id=8&b=9
const urlData = url.parse(strUrl, true);
console.log(urlData);
// protocol 协议 http,https
// host 	主机名，包含主机和端口号
// hostname 主机，只有主机名字
// port		端口号
// query	url中的条件，不包含?
// search	url中的条件，包含?
// pathname	路径
// path		完整的路由包含查询条件
// href		带有协议域名端口号的完整地址
```



## express

nodejs中的一个web开发框架，可以使用nodejs搭建一个web系统

```bash
npm i express # 安装模块
```

#### 使用

```js
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('hello express！！') // 输出
})

app.listen(3333, () =>{
    console.log('服务器运行在3333端口')
})
```

#### nodemon

是一个js插件，可以让我们在修改代码之后自动进行服务器的重启操作

```bash
npm i nodemon -g # 全局安装nodemon
nodemon xx # 启动你的js文件
```



# mongodb

数据库

