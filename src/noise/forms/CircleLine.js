let SimplexNoise = require('simplex-noise');

import Line from "./Line";

class CircleLine {

    constructor(context, canvas, radius = 100, precision = 100, options = {}) {
        this.simplex = new SimplexNoise();
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
            fill: false,
            stroke: true,
            offset: {
                x: this.canvas.width / 2 - radius / 2,
                y: this.canvas.height / 2 - radius / 2
            }
        };
        this.options = Object.assign({}, defaults, options);
        this.line = new Line(this.context, this.canvas, this.points, this.options);
        this.changePrecision(precision);
    }

    changePrecision(precision) {
        this.angle = 0;
        this.precision = precision;
        this.points = [];
        for(let i = 0; i <= this.precision; i++) {
            this.points.push({
                x: Math.cos(i) * this.angle * this.radius + this.options.offset.x + this.simplex.noise2D(Math.random(), Math.random()) * 7,
                y: Math.sin(i) * this.angle * this.radius + this.options.offset.y + this.simplex.noise2D(Math.random(), Math.random()) * 7
            });
            this.angle += Math.PI * 2 / this.precision;
        }
        this.line.setPoints(this.points);
    }

    update() {
        this.changePrecision(this.precision);
        this.line.update();
    }

    draw() {
        this.line.draw();
    }

}

export default CircleLine;
