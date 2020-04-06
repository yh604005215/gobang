//引入 express
const express = require('express');
//引入 express-async-error
require('dotenv').config();
require('express-async-errors');
//引入抽离出去的路由文件
const userRouter = require('./routers/userRouter');
//实例化一个express的实例
const app = express();

//req.body 中间件处理
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//静态资源托管处理
app.use(express.static('./public'));

//调用路由文件，并设置好前缀
app.use(userRouter);

//统一错误处理
app.use((err, req, res, next) => {
    console.log(err);
    res.status(401).send(err.message);
})


//监听端口，启动服务
app.listen(4000, ()=>{
    console.log('服务器启动成功');
});
