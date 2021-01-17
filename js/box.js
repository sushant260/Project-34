class Box{
    constructor(x,y){
        var options={
            restitution:0.8,
            friction:0.5,
            density:1.0
        }
        this.body=Bodies.rectangle(x,y,70,70,options);
        World.add(world,this.body);
        this.width=70;
        this.height=70;
    }
    display(){
             this.pos=this.body.position;
            push();
            translate(this.pos.x,this.pos.y)
            rectMode(CENTER);
            fill("blue")
            rect(0,0,this.width,this.height);
            pop();
    }
}