import CircleArc from "./forms/CircleArc";
import Globals from "./Globals";

let SimplexNoise = require('simplex-noise');

class App {

    constructor() {
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.simplex = new SimplexNoise();
    }


    init() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.circle = new CircleArc(this.ctx, this.canvas, 500, 200, {stroke: true, fill: true});
        Globals.now = Date.now();
        Globals.lastTime = Globals.now;
        Globals.deltaTime = 16;
        this.registerElements();
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

    registerElements() {
        this.precisionSlider = document.getElementById("precisionSlider");
    }

    registerEventsListeners() {
        window.addEventListener('resize', () => {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
        });
        this.precisionSlider.addEventListener('input', (e) => {
            this.circle.changePrecision(e.target.value);
        });
    }
}

export default new App();
