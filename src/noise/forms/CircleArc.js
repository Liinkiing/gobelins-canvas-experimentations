import Point from "./Point";
import Globals from "../Globals";
let SimplexNoise = require('simplex-noise');
const AMPLITUDE = 7;

class CircleArc {

    constructor(context, canvas, radius = 200, precision = 100, options = {}) {
        this.context = context;
        this.canvas = canvas;
        this.precision = precision;
        this.radius = radius;
        this.simplex = new SimplexNoise();
        this.angle = 0;
        let defaults = {
            strokeStyle: "#FFF",
            fillStyle: "white",
            strokeWidth: 20,
            lineWidth: 20,
            fill: false,
            stroke: true,
            offset: {
                x: this.canvas.width / 2,
                y: this.canvas.height / 2
            }
        };
        this.options = Object.assign({}, defaults, options);
    }

    update() {
        Globals.now = Date.now();
        Globals.deltaTime = Globals.now - Globals.lastTime;
        Globals.lastTime = Globals.now;
        this.points = [];
        for(let i = 0; i < this.precision; i++) {
            this.points.push(new Point(this.context, this.canvas, {
                x: this.radius * Math.cos(this.angle) + this.options.offset.x + this.simplex.noise2D(Globals.lastTime * Math.cos(this.angle), 2) * AMPLITUDE,
                y: this.radius * Math.sin(this.angle) + this.options.offset.y + this.simplex.noise2D(Globals.lastTime * Math.sin(this.angle), 8) * AMPLITUDE
            }, this.options));
            this.angle += Math.PI * 2 / this.precision;
        }
        this.points.forEach(point => { point.update(); });
    }

    draw() {
        this.points.forEach(point => { point.draw(); });
    }

}

export default CircleArc;
