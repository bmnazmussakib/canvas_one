const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext('2d');


let mousePosition = {
    x: undefined,
    y: undefined
}

// Mousemove Event
window.addEventListener('mousemove', (event) => {
    // console.log(event);
    mousePosition.x = event.x;
    mousePosition.y = event.y;
})

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    init();
})


let maxRadius = 50;
let minRadius = Math.random() * 20;

let colorList = [
    '#1abc9c',
    '#3498db',
    '#8e44ad',
    '#f1c40f',
    '#d35400',
    '#A3CB38',
    '#D980FA'
]


// Circle Maker Object Constructor
class Circle {
    constructor(x, y, radius, dx, dy, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = dx;
        this.dy = dy;
        this.color = colorList[Math.floor(Math.random() * colorList.length)];
    }

    move() {
        if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx
        }
        if (this.y + this.radius > window.innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy
        }

        this.x = this.x + this.dx;
        this.y = this.y + this.dy;


        // Interaction
        if (mousePosition.x - this.x < 10 && mousePosition.x - this.x < -10
            && mousePosition.y - this.y < 10 && mousePosition.y - this.y < -10
        ) {
            if (this.radius < maxRadius) {
                this.radius = this.radius + 1;
            }
        } else if (this.radius > minRadius) {
            this.radius = this.radius - 1;
        }
    }

    draw() {

        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = 'white';
        c.fill();
        c.fillStyle = this.color;

        this.move()
    }
}



const circleArray = []

const init = () => {
    for (let i = 0; i <= 100; i++) {
        let x = Math.random() * innerWidth;
        let y = Math.random() * innerHeight;
        let radius = Math.random() * 100;
        let dx = (Math.random() * 0.5) - 5;
        let dy = (Math.random() * 0.5) - 5;

        circleArray.push(new Circle(x, y, radius, dx, dy))
    }
}


const anime = () => {
    requestAnimationFrame(anime)
    c.clearRect(0, 0, window.innerWidth, innerHeight)
    for (let j = 0; j < circleArray.length; j++) {
        // console.log(circleArray[j].draw);
        circleArray[j].draw()
    }

}
anime()
init()

