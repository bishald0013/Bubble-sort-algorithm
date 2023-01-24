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
        ctx.beginPath();
        ctx.rect(left,top,this.width,this.height);
        ctx.fill();
    }
}