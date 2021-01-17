class Fly{
    constructor(bodyA, pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness: 0.7,
            length: 300     
        }
        this.pointB = pointB;
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    attach(body){
		this.rope.bodyA = body;
	}
	
    display(){
        if(this.rope.bodyA ){
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        push();
        strokeWeight(0);
        fill("black")
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop();
        }
    }
    fly(){
        this.rope.bodyA = null;
    }

};