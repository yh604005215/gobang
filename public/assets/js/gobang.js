
let canvas = document.querySelector('#gobang');
let gobang = canvas.getContext('2d');
let obj = {}; //全部落期点
let step = 0; //总步数

init();//执行



//画线没什么好注释的这个直接看画布官方文档就可以了
function settingOut(){
    for(var i = 1; i < 16; i++) {
        gobang.beginPath();
        gobang.moveTo(35 * i, 35);
        gobang.lineTo(35 * i, 525);
        gobang.stroke();
        gobang.beginPath();
        gobang.moveTo(35, 35 * i);
        gobang.lineTo(525, 35 * i);
        gobang.stroke();
    }
}   

//入口
function init(){
    settingOut();
    incident();
}





//判断下棋位置
function isLocation(coord, x, y){
    if(x == 0 || x == 560 || y == 0 || y == 560) return true; // 判断是否越界
   for(let key in obj){
       if(obj[coord]) return true; //存在
       
   }
   return false;//不存在
}



function incident(){
    canvas.onclick = function(e){
        let x = Math.round(e.offsetX / 35) * 35;//四舍五入取值定位到中心位置
        let y = Math.round(e.offsetY / 35) * 35;
        if(isLocation([x + '_' + y], x, y)) return;//落棋位置存在棋子不允许下
        step++;
        gobang.beginPath();
        gobang.arc(x, y, 16, 0, 2 * Math.PI, false);
        obj[x + '_' + y] = gobang.fillStyle = step % 2 === 0 ?'white' : 'black'; //判断白棋下还是黑棋并保存到key上
        gobang.fill();  
    }
}


