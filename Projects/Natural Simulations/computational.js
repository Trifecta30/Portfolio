//predator hunts down mouse creature
//based off of mouse stalker challenge
var Mover = function() {
    this.position = new PVector(width/2, height/2);
    this.velocity = new PVector(0, 0);
    this.acceleration = new PVector(0, 0);
};

Mover.prototype.update = function() {
    var maxDir = new PVector(width,            height);
    var maxMag = maxDir.mag();
    var mouse = new PVector(mouseX, mouseY);
    var dir = PVector.sub(mouse, this.position);
    var closeness = (maxMag-dir.mag())/maxMag;
    
    dir.normalize();
    dir.mult(closeness);
   // dir.mult(closeness);
    this.acceleration = dir;
    this.velocity.add(this.acceleration);
    this.velocity.limit(5);
    this.position.add(this.velocity);
};
    




Mover.prototype.display = function() {
    stroke(0);
    strokeWeight(2);
    fill(127);
     image(getImage("avatars/aqualine-ultimate"), this.position.x, this.position.y, 50, 50);
};

Mover.prototype.checkEdges = function() {

  if (this.position.x > width) {
    this.position.x = 0;
  } else if (this.position.x < 0) {
    this.position.x = width;
  }

  if (this.position.y > height) {
    this.position.y = 0;
  } else if (this.position.y < 0) {
    this.position.y = height;
  }
};

var mover = new Mover();


var draw = function() {
    background(255, 255, 255);
    image(getImage("avatars/duskpin-tree"), mouseX, mouseY, 50, 50);
    mover.update();
    mover.checkEdges();
    mover.display(); 
    
};


