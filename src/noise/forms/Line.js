import Utils from "../../Utils";

class Line {

    constructor(context, canvas, points, options) {
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
        this.options = Object.assign({}, defaults, options);
        this.points = points;
    }

    update() {
        // if(!mousePosition) return;
    }

    setPoints(points) {
        this.points = points;
    }

    addPoint(point) {
        this.points.push(point);
    }

    draw() {
        this.context.beginPath();
        this.context.fillStyle = this.options.fillStyle;
        this.points.forEach((point, i) => {
            if(typeof this.points[i+1] === 'undefined') return;
            this.context.strokeStyle = Utils.randomColor();
            this.context.moveTo(point.x, point.y);
            this.context.lineTo(this.points[i+1].x, this.points[i+1].y);
        });
        if(this.options.stroke) this.context.stroke();
        if(this.options.fill) this.context.fill();
        this.context.closePath();
    }

}

export default Line;
