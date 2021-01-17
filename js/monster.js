class Monster {
    constructor(x,y, w,h){    
    var options ={
        isStatic: false,
        restitution: 0.1,
        frictionAir:0.7,
        density: 1.2
     }
     this.x =x;
     this.y=y;
     this.w=w;
     this.h=h
     this.image=loadImage("images/Monster-01.png");
     this.body = Bodies.rectangle(this.x,this.y,this.w,this.h, options);
     World.add(world, this.body);
  }

  display(){
    var pos = this.body.position;
    var ang=this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(ang);
    imageMode(CENTER);
    image(this.image,0,0, this.w,this.h);
    pop();
  }
};