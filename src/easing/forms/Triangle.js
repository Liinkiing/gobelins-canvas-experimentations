import Easing from "../Easing";
import Globals from "../Globals";

const EASING_DURATION = 1200;

class Triangle {

    constructor(context, canvas, center, options) {
        let defaults = {
            strokeStyle: "#FFF",
            fillStyle: "white",
            strokeWidth: 20,
            lineWidth: 20,
            velocity: {
                x: 20,
                y: 20
            },
            fill: true,
            stroke: true
        };
        this.context = context;
        this.canvas = canvas;
        this.currentTime = 0;
        this.options = Object.assign({}, defaults, options);
        this.x = center.x; this.y = center.y;
    }

    update() {
        // if(!mousePosition) return;
    }

    saveTrianglePositions(x, y) {
        this.savedX = x;
        this.savedY = y;
    }

    tweenTo(position) {
        let rafId = requestAnimationFrame(() => this.tweenTo(position) );
        Globals.now = Date.now();
        Globals.deltaTime = Globals.now - Globals.lastTime;
        Globals.lastTime = Globals.now;
        this.currentTime += Globals.deltaTime;
        if(this.currentTime < EASING_DURATION) {
            this.x = Easing.easeInOutQuad(this.currentTime, this.savedX, position.x - this.savedX, EASING_DURATION);
            this.y = Easing.easeInOutQuad(this.currentTime, this.savedY, position.y - this.savedY, EASING_DURATION);
        } else {
            this.currentTime = 0;
            cancelAnimationFrame(rafId);
        }
    }

    draw() {
        this.context.beginPath();
        this.context.strokeStyle = this.options.strokeStyle;
        this.context.fillStyle = this.options.fillStyle;
        this.context.moveTo( this.x - 50, this.y + 50 );
        this.context.lineTo( this.x, this.y - 50 );
        this.context.lineTo( this.x + 50, this.y + 50 );
        this.context.lineTo( this.x - 50, this.y + 50 );
        if(this.options.stroke) this.context.stroke();
        if(this.options.fill) this.context.fill();
        this.context.closePath();
    }

}

export default Triangle;
