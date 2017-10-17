const AMPLITUDE = 7;
let SimplexNoise = require('simplex-noise');

class Point {
    constructor(context, canvas, position, options) {
        let defaults = {
            strokeStyle: "#FFF",
            fillStyle: "white",
            strokeWidth: 20,
            lineWidth: 20,
            fill: true,
            stroke: true
        };
        this.context = context;
        this.canvas = canvas;
        this.x = position.x;
        this.y = position.y;
        this.simplex = new SimplexNoise();
        this.options = Object.assign({}, defaults, options);

    }

    update() {
    }

    draw() {
        this.context.beginPath();
        this.context.fillStyle = this.options.fillStyle;
        this.context.strokeStyle = this.options.strokeStyle;
        this.context.arc(this.x, this.y, 2, 0, Math.PI * 2, true);
        if(this.options.stroke) this.context.stroke();
        if(this.options.fill) this.context.fill();
        this.context.closePath();
    }
}

export default Point;
