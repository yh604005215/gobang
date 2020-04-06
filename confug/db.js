//连接数据库 MongDB

//引入 mongoose
const mongoose = require('mongoose');

//定义连接地址
const url = 'mongodb://localhost:27017/gobang';


//连接
mongoose
    .connect(url, { useNewUrlParser : true, useUnifiedTopology: true})
    .then(() => {
        console.log('数据库连接成功');
        
    })
    .catch(error => {
        console.log('数据库连接失败');
        console.log(error);
    });


//暴露
module.exports = mongoose;