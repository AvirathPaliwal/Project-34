class Rope{
    constructor(mybody,mypoint){
        var pos={
          bodyA:mybody,
          pointB:mypoint,
          stiffness:1,
          angularStiffness:1,
          length:220  
        };
        this.r = Matter.Constraint.create(pos);
        this.point =mypoint;
        World.add(world,this.r);    
    }
    display(){
      if(this.r.bodyA){
          var pos2 = this.r.bodyA.position;
          var pos3 = this.point;
          push();
                strokeWeight(4);
                stroke("blue")
                line(pos2.x,pos2.y,pos3.x,pos3.y);
          pop();
      }
    }
}