const express = require("express"); // 引入express模块
const app = express();
const fs = require("fs");

// 可以获取请求体中使用了url编码的数据
app.use(express.urlencoded());

// 任何一个web服务器默认的入口文件叫index.html
app.use("/", express.static("./public")); // 把public文件夹下的文件当做静态资源进行访问

// 参数一表示请求的地址
// 参数二表示请求的处理函数
// .get表示发起get请求
// .post  delete put patch
// app.get("/", (req, res) => {
//   res.send("战斗吧，暴龙兽！"); // 输出一个字符串
// });

app.get("/api/v1/pets", (req, res) => {
  // 从文件中读取数据进行展示
  const pets = JSON.parse(fs.readFileSync("./db/pets.json").toString());
  res.json(pets); // 输出一个json文件
});

// 添加
app.post("/api/v1/pets", (req, res) => {
  // 把当前客户端传递的数据存储在文件里
  const pets = JSON.parse(fs.readFileSync("./db/pets.json").toString());
  // ...js的扩展运算符，可以实现对象的浅拷贝
  // Object.assign({}, obj1, {"name": "张无忌"}) 把后面两个对象合并之后放在第一个对象里
  // var obj3 = JSON.parse(JSON.stringify(obj)) obj3对obj的深拷贝 深拷贝在计算机中开辟了一块内存地址用于存放复制的对象，而浅拷贝仅仅是指向被拷贝的内存地址，如果原地址中对象被改变了，那么浅拷贝出来的对象也会相应改变。
  pets.push({ id: Date.now(), ...req.body });
  fs.writeFileSync("./db/pets.json", JSON.stringify(pets));
  res.json({
    code: 1,
    msg: "保存数据成功",
  });
  // 重定向
  // res.redirect("/index.html");
});

// :id表示占位符，通过路由params进行传参
//  如果有多个参数，可以写多个占位符
//  路由的例子 /api/v1/pets/:id/:name/:dd
//  对应的url信息 /api/v1/pets/1/2/345
// 删除
app.delete("/api/v1/pets/:id", (req, res) => {
  const { id } = req.params; // 解构赋值, req.params是express中的一种传参形式
  const pets = JSON.parse(fs.readFileSync("./db/pets.json").toString());
  const index = pets.findIndex((item) => item.id == id); // 查找符合条件的数组下标(索引)
  pets.splice(index, 1); // 根据索引删除一个元素
  fs.writeFileSync("./db/pets.json", JSON.stringify(pets));
  res.json({
    code: 1,
    msg: "删除成功",
  });
});

// 修改
app.put("/api/v1/pets/:id", (req, res) => {
  const { id } = req.params;
  const pets = JSON.parse(fs.readFileSync("./db/pets.json").toString());
  const index = pets.findIndex((item) => item.id == id);
  pets[index] = { ...{ id }, ...req.body };
  fs.writeFileSync("./db/pets.json", JSON.stringify(pets));
  res.json({
    code: 1,
    msg: "修改成功",
  });
});
app.listen(3333, () => {
  console.log("服务器运行在3333端口");
});
