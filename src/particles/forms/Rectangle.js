import Utils from "../../Utils";

class Rectangle {

    constructor(context, canvas, dimensions, position, options = {}) {
        let defaults = {
            strokeStyle: "#00aa00",
            fillStyle: "red",
            strokeWidth: 20,
            lineWidth: 20,
            velocity: {
                x: 20,
                y: 20
            }
        };
        this.context = context;
        this.canvas = canvas;
        this.dx = dimensions.width; this.dy = dimensions.height;
        this.x = position.x; this.y = position.y;
        this.options = Object.assign({}, defaults, options);
    }

    update() {
        this.x += this.options.velocity.x;
        this.y += this.options.velocity.y;
        if (this.x > this.canvas.width || this.x < 0) {
            this.options.velocity.x *= -1;
        }
        if (this.y > this.canvas.height || this.y < 0) {
            this.options.velocity.y *= -1;
        }
    }

    regenerateColors() {
        this.options.fillStyle = Utils.randomColor();
    }

    draw() {
        this.context.fillStyle = this.options.fillStyle;
        this.context.strokeWidth = this.options.strokeWidth;
        this.context.strokeStyle = this.options.strokeStyle;
        this.context.stroke();
        this.context.fillRect(this.x, this.y, this.dx, this.dy);
    }

}

export default Rectangle;
