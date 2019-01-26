/*
 
 Press left arrow to turn left
        right arrow to turn right
        z or Z to accelerate
        

 Used turning car challenge for most of code
*/

angleMode = "radians";

var Star = function(x, y, b) {
    this.position = new PVector(x, y);
    this.brightness = b;
};

Star.prototype.display = function() {
    // println("star at: " + this.position.x + ", " + this.position.y + ", brightness " + this.brightness);
    fill(255, 247, 0);
    noStroke();
    ellipse(this.position.x, this.position.y, this.brightness, this.brightness);
};

var Ship = function() {
    this.position = new PVector(width/2, 3 * height/4);
    this.velocity = new PVector(0, -1);
    this.acceleration = new PVector(0, 0);
    this.topspeed = 4;
    this.xoff = 1000;
    this.yoff = 0;
    this.r = 16;
    this.size = 50;
    this.leftEngine = 30;
    this.rightEngine = 30;
    this.c = 0.01; // coefficient of drag in space mainly since its hard to keep control otherwise
};

Ship.prototype.calculateDrag = function() {
  // Magnitude is coefficient * speed squared
  var speed = this.velocity.mag();
  var dragMagnitude = this.c * speed * speed;

  // Direction is inverse of velocity
  var dragForce = this.velocity.get();
  dragForce.mult(-1);
  
  // Scale according to magnitude
  // dragForce.setMag(dragMagnitude);
  dragForce.normalize();
  dragForce.mult(dragMagnitude);
  return dragForce;
};

Ship.prototype.applyForce = function(force) {
    this.acceleration.add(force);
};

Ship.prototype.turnLeft = function() {
    var rotationForce = this.velocity.get();
    rotationForce.rotate(-PI/4);
    this.applyForce(rotationForce);
    this.rightEngine += 15;
};

Ship.prototype.turnRight = function() {
    var rotationForce = this.velocity.get();
    rotationForce.rotate(PI/4);
    this.applyForce(rotationForce);
    this.leftEngine += 15;
};

Ship.prototype.accelerate = function() {
    var force = this.velocity.get();
    force.normalize();
    force.mult(2);

    this.applyForce(force);
    this.leftEngine += 13;
    this.rightEngine += 13;
};

Ship.prototype.display = function () {
    // Step 3:
    var angle = this.velocity.heading();

    pushMatrix();
    translate(this.position.x, this.position.y);
    // Step 3:
    rotate(angle + PI / 2);
    var thrusterSize = this.size / 4;


    // Left engine
    strokeWeight(2);
    stroke(0, 0, 0);
    fill(204, 202, 204);
    triangle(-this.size/3.5, this.size * 0.8,
        -this.size/3.5 - thrusterSize, this.size * 1.2,
        -this.size/3.5 + thrusterSize, this.size * 1.2);

    // Right engine
    strokeWeight(2);
    stroke(0, 0, 0);
    fill(204, 202, 204);
    triangle(this.size/3.5, this.size * 0.8,
        this.size/3.5 - thrusterSize, this.size * 1.2,
        this.size/3.5 + thrusterSize, this.size * 1.2);

    // Rocket body
    strokeWeight(2);
    triangle(0, 0, 
        -this.size/2, this.size,
        this.size/2, this.size);
    
    // Headlight
    stroke(51, 255, 0);
    point(0, 0);
    
    popMatrix(); 
};

Ship.prototype.update = function () {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topspeed);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
};


Ship.prototype.checkEdges = function () {
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

var stars = [];

for (var i = 0; i < 20; i++) {
    stars[i] = new Star(
            random(0, width), 
            random(0, height), 
            random(2, 10));
}

var ship = new Ship();

keyPressed = function() {
    if (keyCode === LEFT) { // Left arrow
        ship.turnLeft();
    } else if (keyCode === RIGHT) { // Right arrow
        ship.turnRight();
    } else if (keyCode === 90) { // z key
        ship.accelerate();
    }
};

draw = function() {
    background(0, 0, 0);
    
    for (i = 0; i < stars.length; i++) {
        stars[i].display();
    }
    
    var drag = ship.calculateDrag();
    ship.applyForce(drag);
    
    ship.update();
    ship.checkEdges();
    ship.display();
};
