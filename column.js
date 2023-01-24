class Column {
    constructor(x,y,width,height){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
    }

    draw(ctx){
        const left=this.x-this.width/2;
        const top=this.y-this.height;
        const right = this.x+this.width/2
        
        ctx.beginPath();
        ctx.fillStyle="rgb(150,150,150)"
        ctx.moveTo(left,top)
        ctx.lineTo(left,this.y)
        ctx.ellipse(this.x,this.y)
    }
}