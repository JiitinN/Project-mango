  class Stone{
    constructor(x, y, width, height, diameter) {
        var options = {
           isStatic:false,
           restitution:0,
           friction:1,
           density:1.2
        }
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.diameter=diameter;
        this.body = Bodies.circle(x, y, width, height, diameter, options);
        this.image = loadImage("images/stone.png");
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height, this.diameter);
        pop();
      }
}
