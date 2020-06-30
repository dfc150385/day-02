const url = require("url");
let strUrl = "http://localhost:3000/api/v1/users?id=9&b=9";

// url.parse 格式化url数据
//  第二个参数为bool值，为true的时候表示把query格式化为一个对象{id: 8, b: 9}
//    为false时query为id=8&b=9
const urlData = url.parse(strUrl, true);
console.log(urlData);
