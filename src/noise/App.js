let SimplexNoise = require('simplex-noise');
import CircleLine from "./forms/CircleLine";

class App {

    constructor() {
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.simplex = new SimplexNoise();
    }


    init() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.circle = new CircleLine(this.ctx, this.canvas, 100, 1000, {fill: false});
        this.registerEventsListeners();
        this.render();
    }

    update() {
        this.circle.update();
    }

    draw() {
        this.circle.draw();
    }

    render() {
        requestAnimationFrame(() => this.render());
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.update();
        this.draw();
    }

    registerEventsListeners() {
        window.addEventListener('resize', () => {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
        });
    }
}

export default new App();
