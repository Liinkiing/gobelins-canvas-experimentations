import Rectangle from "./forms/Rectangle";
import Utils from "./Utils";
import Circle from "./forms/Circle";

const RECTANGLES_NUMBER = 100;
const CIRCLES_NUMBER = 100;
const DISTANCE_BETWEEN_CIRCLES = 150;
const MAX_VELOCITY = 5;

class App {

    constructor() {
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.rectangles = [];
        this.circles = [];
    }


    init() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.mousePosition = {x: this.canvas.width, y: this.canvas.height};
        for (let i = 0; i < RECTANGLES_NUMBER; i++) {
            let size = Utils.random(10, 80);
            this.rectangles.push(new Rectangle(this.ctx, this.canvas,
                {width: size, height: size},
                {x: Utils.random(0, this.canvas.width), y: Utils.random(0, this.canvas.height)},
                {
                    velocity: {x: Utils.random(1, MAX_VELOCITY), y: Utils.random(1, MAX_VELOCITY)},
                    fillStyle: Utils.randomColor()
                }
                )
            );
        }
        for (let i = 0; i < CIRCLES_NUMBER; i++) {
            this.circles.push(new Circle(this.ctx, this.canvas,
                5,
                {x: Utils.random(0, this.canvas.width), y: Utils.random(0, this.canvas.height)},
                {
                    velocity: {x: Utils.random(1, MAX_VELOCITY), y: Utils.random(1, MAX_VELOCITY)},
                    fillStyle: Utils.randomColor()
                }
                )
            );
        }
        this.registerEventsListeners();
        this.render();
    }

    update() {
        // this.rectangles.forEach(rectangle => rectangle.update());
        this.circles.forEach(circle => circle.update());
    }

    draw() {
        // this.rectangles
        //     .filter(rectangle => rectangle.x <= this.mousePosition.x)
        //     .forEach(rectangle => {
        //         rectangle.regenerateColors();
        //         rectangle.draw();
        //     });
        this.circles.forEach(circle => circle.draw());
        this.circles.forEach(circle => {
            this.ctx.beginPath();
            this.ctx.moveTo(circle.x, circle.y);
            for (let c of this.circles) {
                let a = circle.x - c.x;
                let b = circle.y - c.y;
                let distance = (Math.sqrt(a * a + b * b));
                if (distance <= DISTANCE_BETWEEN_CIRCLES) {
                    let d = (distance / DISTANCE_BETWEEN_CIRCLES).toFixed(2);
                    this.ctx.strokeStyle = `rgba(0,0,0,${d}`;
                    this.ctx.lineWidth = d * 2;
                    this.ctx.lineTo(c.x, c.y);
                }
            }
            this.ctx.stroke();
        });
    }

    render() {
        requestAnimationFrame(() => {
            this.render();
        });
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.update();
        this.draw();
    }

    registerEventsListeners() {
        window.addEventListener('mousemove', (e) => {
            this.mousePosition = Utils.getMousePos(this.canvas, e);
        });
        window.addEventListener('resize', () => {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
        });
    }
}

export default new App();
