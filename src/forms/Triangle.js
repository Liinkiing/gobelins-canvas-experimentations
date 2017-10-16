class Triangle {

    constructor(context, canvas, dimensions, position, options = {}) {
        let defaults = {
            strokeStyle: "#00aa00",
            fillStyle: "red",
            strokeWidth: 20
        };
        this.context = context;
        this.canvas = canvas;
        this.dx = dimensions.width; this.dy = dimensions.height;
        this.x = position.x; this.y = position.y;
        this.options = Object.assign({}, defaults, options);
    }

    draw() {
        this.context.fillStyle = this.options.fillStyle;
        this.context.strokeWidth = this.options.strokeWidth;
        this.context.strokeStyle = this.options.strokeStyle;
        this.context.moveTo( this.canvas.width / 2 - 50, this.canvas.height / 2 + 50 );
        this.context.lineTo( this.canvas.width / 2, this.canvas.height / 2 - 50 );
        this.context.lineTo( this.canvas.width / 2 + 50, this.canvas.height / 2 + 50 );
        this.context.lineTo( this.canvas.width / 2 - 50, this.canvas.height / 2 + 50 );
        this.context.stroke();
        this.context.closePath();
    }

}

export default Triangle;
