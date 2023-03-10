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
    canvas.width =0;
    canvas.height = 0;

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
        // c.strokeStyle = this.color;
        // c.stroke()
        c.fill()
        c.fillStyle = this.color;
        c.closePath()
    }

    //======================= Update Circle Position =======================
    update() {
        this.draw()
    }
}


// =================== Get Distance Function ========================
const getDistance = (x1, y1, x2, y2) => {
    let xDistance = x2-x1;
    let yDistance = y2-y1;

    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2))
}

let mouseCircle;
let circle1;


// Implementation
const init = () => {
    mouseCircle = new Circle(undefined, undefined, 30, '#ff5252');
    circle1 = new Circle(innerWidth / 2, innerHeight / 2, 100, "#40407a")
}

init()

const animate = () => {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, window.innerWidth, window.innerHeight)

    // c.fillText('HTML CANVAS BOILERPLATE', mouse.x, mouse.y)
    circle1.update();
    mouseCircle.x = mouse.x;
    mouseCircle.y = mouse.y;
    mouseCircle.update();

    
    if(getDistance( circle1.x, circle1.y, mouseCircle.x, mouseCircle.y ) < circle1.radius + mouseCircle.radius){
        mouseCircle.color = "black"
    } else {
        mouseCircle.color = "#40407a"
    }

}

animate()
