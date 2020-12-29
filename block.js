class Block{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.4,
            friction :0.0,
            
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
       var pos = this.body.position;
        var angle = this.angle;
        push();
        if (this.body.speed < 3) {
          translate(pos.x, pos.y);
          
          rectMode(CENTER);
          rect(0,0,this.width, this.height);
            pop();
        } else {
            push();
            World.remove(world, this.body);
            this.visibility = this.visibility - 5;
            tint(255, this.visibility);
            pop();
        }
        
    }
    score(){
        if (this.visiblity<0 && this.visiblity>-105){
            score = score + 1;
        }
      }
}