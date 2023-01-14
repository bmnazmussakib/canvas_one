const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const c = canvas.getContext('2d');

const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
}


// =================== Event Listeners MouseMove ===================
addEventListener("mousemove", (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY
})

// ================= Event Listeners Window Resize =================
addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    init();
})

// =================== Object Maker / Constructor ===================
class Circle {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;

    }

    //======================= Drawing Circle =======================
    draw() {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.strokeStyle = this.color;
        c.stroke()
        c.fill()
        c.fillStyle = this.color;
        c.closePath()
    }


    //======================= Update Circle Position =======================
    update() {

        this.draw()
    }
}

// let circle = new Circle(100, 100, 50, 5, 5);

// let circleArray = [];


let mouseCircle;


// Implementation
const init = () => {

    mouseCircle = new Circle(undefined, undefined, 50, '#ff5252');

}
init()

console.log(mouseCircle);



const animate = () => {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, window.innerWidth, window.innerHeight)

    // c.fillText('HTML CANVAS BOILERPLATE', mouse.x, mouse.y)

    mouseCircle.x = mouse.x;
    mouseCircle.y = mouse.y;
    mouseCircle.update();

}

animate()
