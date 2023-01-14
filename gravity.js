const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext('2d');

const gravity = 1;
const friction = 0.9;
const colorList = [
    "#FFC312",
    "#12CBC4",
    "#ED4C67",
    "#0652DD",
    "#EA2027",
    "#38ada9",
    "#ffb142"
]

// Object Maker / Constructor
class Ball {
    constructor(x, y, radius, dx, dy, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = dx;
        this.dy = dy;
        this.color = color
    }


    move() {
        if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx * 0.5
        }else{
            this.dx = this.dx;
        }
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
            this.dy = - this.dy * friction;
        }else{
            this.dy = this.dy + gravity;
        }

        this.x = this.x + this.dx;
        this.y = this.y + this.dy;
    }

    
    draw() {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.strokeStyle = "black"
        c.stroke()
        c.fill()
        c.fillStyle = this.color

        this.move()
    }
}

// let ball = new Ball(window.innerWidth / 2, window.innerHeight / 2, 80, 0, 1);

let ballArray = [];

const init = () => {
    for (let i = 0; i < 500; i++) {
        let x = Math.random() * window.innerWidth;
        // let y = Math.random() * window.innerHeight;
        let y = 100;
        let radius = Math.random() * 100;
        let dx = (Math.random() - 0.5) * 10;
        let dy = (Math.random() - 0.5) * 10;
        let color = colorList[Math.floor(Math.random()*colorList.length)]
    
        ballArray.push(new Ball(x, y, radius, dx, dy, color))
    }
}

addEventListener('click', ()=>{
    init()
})



const animate = () => {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, window.innerWidth, window.innerHeight);

    // ball.draw();

    for(let j = 0; j <ballArray.length; j++){
        ballArray[j].draw()
    }
}

animate();
init()
