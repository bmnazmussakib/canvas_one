const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext('2d');


// Rectangle
// c.fillStyle = "red"
// c.fillRect(100, 100, 200, 200)

// c.fillStyle = "green"
// c.fillRect(400, 200, 150, 300)


// Line
// c.beginPath()
// c.moveTo(20, 20)
// c.lineTo(300, 100)
// c.strokeStyle = "blue"
// c.lineTo(600, 100)
// c.stroke()


// Circle
// c.beginPath()
// c.arc(100, 200, 50, Math.PI * 2, 0, false)
// c.strokeStyle = "yellow"
// c.stroke()

// let color = ['red', 'green', 'blue', 'yellow', 'purple']

// for (let i = 0; i < 100; i++) {
//     let x = Math.random() * window.innerWidth;
//     let y = Math.random() * window.innerHeight;

//     c.beginPath();
//     c.arc(x, y, 50, Math.PI * 2, false);
//     c.stroke();

//     for(let j = 0; j < color.length; j++){
//         c.strokeStyle = color[Math.floor(Math.random() * 4)];
//     }
// }


// Object Maker / Constructor
class Circle {
    constructor(x, y, radius, dx, dy) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = dx;
        this.dy = dy;
    }


    move() {
        if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
            this.dx = - this.dx
        }
        if (this.y + this.radius > window.innerHeight || this.y - this.radius < 0) {
            this.dy = - this.dy
        }

        this.x = this.x + this.dx;
        this.y = this.y + this.dy;
    }

    
    draw() {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.strokeStyle = "blue"
        c.stroke()

        this.move()
    }
}

// let circle = new Circle(100, 100, 50, 5, 5);

let circleArray = [];


for (let i = 0; i < 100; i++) {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    let radius = Math.random() * 100;
    let dx = (Math.random() - 0.5) * 10;
    let dy = (Math.random() - 0.5) * 10;

    circleArray.push(new Circle(x, y, radius, dx, dy))
}

// console.log(circleArray);
for (let j = 0; j < circleArray.length; j++) {
    console.log(circleArray[j].move)
}


const animate = () => {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, window.innerWidth, window.innerHeight)

    // circle.move();

    // circleArray.map(circle => circle.draw())

    for(let j = 0; j < circleArray.length; j++){
        circleArray[j].draw()
    }


}

animate()








