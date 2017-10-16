import Utils from "../Utils";

class WeirdShape {

    constructor(context, canvas, start, points, options = {}) {
        let defaults = {
            strokeStyle: "#2622aa",
            fillStyle: "red",
            strokeWidth: 100,
            lineWidth: 20
        };
        this.context = context;
        this.canvas = canvas;
        this.start = start;
        this.first = points.first;
        this.second = points.second;
        this.third = points.third;
        this.options = Object.assign({}, defaults, options);
    }

    regenerate() {
        this.start = {x: Utils.random(0, 800), y: Utils.random(0, 600)};
        this.first = {from: Utils.random(0, 800), to: Utils.random(0, 800)};
        this.second = {from: Utils.random(0, 800), to: Utils.random(0, 800)};
        this.third = {from: Utils.random(0, 800), to: Utils.random(0, 800)};
        this.options.strokeStyle = Utils.randomColor();
        this.options.lineWidth = Utils.random(0, 50);
    }

    draw() {
        this.context.beginPath();
        this.context.strokeStyle = this.options.strokeStyle;
        this.context.lineWidth = this.options.lineWidth;
        this.context.moveTo(this.start.x, this.start.y);
        this.context.lineTo(this.first.from, this.second.to);
        this.context.lineTo(this.second.from, this.third.to);
        this.context.lineTo(this.third.from, this.first.to);
        this.context.stroke();
        this.context.closePath();
    }

}

export default WeirdShape;
