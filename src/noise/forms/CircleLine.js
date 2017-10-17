import Line from "./Line";

class CircleLine {

    constructor(context, canvas, radius = 100, precision = 100, options = {}) {
        this.context = context;
        this.canvas = canvas;
        this.precision = precision;
        this.radius = radius;
        this.angle = 0;
        this.points = [];
        let defaults = {
            strokeStyle: "#FFF",
            fillStyle: "white",
            strokeWidth: 20,
            lineWidth: 20,
            fill: true,
            stroke: true,
            offset: {
                x: this.canvas.width / 2 - radius / 2,
                y: this.canvas.height / 2 - radius / 2
            }
        };
        this.options = Object.assign({}, defaults, options);
        for(let i = 0; i <= this.precision; i++) {
            this.points.push({
                x: Math.cos(i) * this.angle * this.radius + this.options.offset.x,
                y: Math.sin(i) * this.angle * this.radius + this.options.offset.y
            });
            this.angle += Math.PI * 2 / this.precision;
        }
        this.line = new Line(this.context, this.canvas, this.points, this.options);
    }

    update() {
        this.line.update();
        // if(!mousePosition) return;
    }

    draw() {
        this.line.draw();
    }

}

export default CircleLine;
