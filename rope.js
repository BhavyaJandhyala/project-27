class rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options={
            bodyA: body1,
            bodyB: body2,
            pointB:{ x:this.offsetX, y:this.offsetY},
            length: 10,
            stiffness: 0.05
        }
        this.rope = constraint.create(options);
        World.add(world,this.rope);
    }
    display(){
        var pos1 = this.body.bodyA.position;
        var pos2 = this.body.bodyB.position;
        line(pos1.x,pos1.y,pos2.x,pos2.y);
    }
}