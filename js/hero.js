class Hero {
    constructor(x,y, w,h){    
    var options ={
        isStatic: false,
        restitution: 0.9,
        frictionAir:0.005,
        density: 1.2
     }
     this.x =x;
     this.y=y;
     this.w=w;
     this.h=h
     this.image=loadImage("images/Superhero-01.png");
     this.body = Bodies.rectangle(this.x,this.y,this.w,this.h, options);
     World.add(world, this.body);
  }

  display(){
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    imageMode(CENTER);
    image(this.image,0,0, this.w,this.h);
    pop();
  }
};
function mouseDragged(){
	Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}