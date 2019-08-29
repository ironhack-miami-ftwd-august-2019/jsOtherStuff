var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = 'white';
ctx.font = '18px serif';
canvas.width = window.innerWidth
canvas.height = window.innerHeight

var ghost = {
    x: 25,
    y: 25,
    w: 50,
    h: 50,
    moveUp: function () {
        this.y -= 55
    },
    moveDown: function () {
        this.y += 55
    },
    moveLeft: function () {
        this.x -= 55
    },
    moveRight: function () {
        this.x += 55
    },
}


document.onkeydown = function (e) {
    switch (e.keyCode) {
        case 38:
            ghost.moveUp();
            console.log('up', ghost);
            break;
        case 40:
            ghost.moveDown();
            console.log('down', ghost);
            break;
        case 37:
            ghost.moveLeft();
            console.log('left', ghost);
            break;
        case 39:
            ghost.moveRight();
            console.log('right', ghost);
            break;
    }
}




var img = new Image();
img.onload = function () {
    ctx.drawImage(img, ghost.x, ghost.y, 50, 50);
}
img.src = "https://media.giphy.com/media/Qr8JE9Hvi7ave/200.gif";

var y1 = 0;
var y2 = 0;
var y3 = 0;


class Rectangle {
    constructor(x,y,w,h){
        this.x =x;
        this.y =y;
        this.w =w;
        this.h =h;
    }
    down(){
        this.y+=5
        ctx.fillStyle = "#"+((1<<24)*Math.random()|0).toString(16);
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }
    draw(){
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }
}

let arr = [] 

for(let i=0; i<100; i++){
    arr.push(new Rectangle(Math.random()*canvas.width,Math.random()*-10000,50,50))
}


function updateCanvas() {
    ctx.clearRect(0, 0, 1500, 1700);
    ctx.fillText("Ghost_x: " + ghost.x, 580, 40);
    ctx.fillText("Ghost_y: " + ghost.y, 580, 60);
    ctx.drawImage(img, ghost.x, ghost.y, 50, 50);

    arr.forEach(block=>{
        block.down()
    })
    checkCollision()
    window.requestAnimationFrame(updateCanvas)
}
let w = window.requestAnimationFrame(updateCanvas)



function checkCollision() {

    var rect1 = ghost;
    //console.log(rect1)

    arr.forEach(block => {

        var rect2 = block;

        if (rect1.x < rect2.x + rect2.w &&
            rect1.x + rect1.w > rect2.x &&
            rect1.y < rect2.y + rect2.h &&
            rect1.y + rect1.h > rect2.y) {
            // collision detected!
            console.log('GAME OVER')
            window.cancelAnimationFrame()
        }
    })


}