import Utils from "../Utils";
import Triangle from "./forms/Triangle";
import Globals from './Globals';


class App {

    constructor() {
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
    }


    init() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.triangle = new Triangle(this.ctx, this.canvas, {x: this.canvas.width / 2, y: this.canvas.height / 2}, {fill: false});
        Globals.now = Date.now();
        Globals.lastTime = Globals.now;
        Globals.deltaTime = 16;
        this.registerEventsListeners();
        this.render();
    }

    update() {
        this.triangle.update();
    }

    draw() {
        this.triangle.draw();
    }

    render() {
        requestAnimationFrame(() => this.render());
        // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.update();
        this.draw();
    }

    registerEventsListeners() {
        window.addEventListener('click', (e) => {
            this.mousePosition = Utils.getMousePos(this.canvas, e);
            this.triangle.saveTrianglePositions(this.triangle.x, this.triangle.y);
            this.triangle.tweenTo(this.mousePosition);
        });
        window.addEventListener('resize', () => {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
        });
    }
}

export default new App();
