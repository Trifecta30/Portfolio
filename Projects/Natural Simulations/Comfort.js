//a fly, buzzing around the canvas, with a predator chasing it
//used background from mountain range project
//used code from mutual atraction and gravity challenges

var Fly = function(position) {
    //position, velocity, and mass
    this.position = position;
    this.velocity = new PVector(random(-1, 1), random(-1, 1));
    this.acceleration = new PVector(random(-1, 1), random(-1, 1));
    this.mass = 2;
    
    this.display = function() {
        strokeWeight(5);
        point(this.position.x, this.position.y);
         image(getImage("avatars/marcimus-orange"), this.position.x, this.position.y, 50, 50);
        pushMatrix();
        translate(this.position.x, this.position.y);
        rotate(45);
        popMatrix();
        pushMatrix();
        translate(this.position.x, this.position.y);
        rotate(-45);  
        popMatrix();
    };
    
    //random movement of newly created prey
    this.update = function() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        if (this.position.x < 0) {
            this.position.x = width - 10;
        }
        else if (this.position.x > width) {
            this.position.x = 10;
            }
        else if (this.position.y < 0) {
            this.position.y = height - 10;
        }
        else if (this.position.y >= height) {
            this.position.y = 10;
        }
        this.acceleration.mult(0);
        this.velocity.limit(5);
    };
    
    //attraction of predators
    this.calcRepel = function(focus) {
        var force = PVector.sub(focus.position, this.position);
        var distance = force.mag;
        distance = constrain(distance, 5.0, 15.0);
        force.normalize();
        force.mult(-1 * this.mass * focus.mass/distance * distance);
        return force;
    };
    
    //force on prey
    this.applyForce = function(force) {
        var f = PVector.div(force, this.mass);
        this.acceleration.add(f);
    };
};

//predator
var predator = function(position, focus) {
    //base object with position, velocity, and mass, also added some randoms for color values
    this.position = position;
    this.velocity = new PVector(0, 0);
    this.acceleration = new PVector(0, 0);
    this.mass = 1;
    var r = random(255);
    var g = random(255);
    var b = random(255);
    
    this.display = function() {
        noStroke();
        fill(r, g, b);
         image(getImage("avatars/aqualine-ultimate"), this.position.x, this.position.y, 50, 50);
        rectMode(CENTER);
        for (var i = 0; i < 4; i++) {
            pushMatrix();
            translate(this.position.x, this.position.y);
            rotate(30 * i + 45);
            popMatrix();
        }
    };
    
    //calculate the predator's movement without force
    this.update = function() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        if (this.position.x <= 0) {
            this.position.x = width;
        }
        else if (this.position.x >= width) {
            this.position.x = 0;
            }
        else if (this.position.y <= 0) {
            this.position.y = height;
        }
        else if (this.position.y >= height) {
            this.position.y = 0;
        }
        this.velocity.limit(random(1));
        this.acceleration.mult(0);
    };
    
    //calculates attraction to prey based on distance
    this.calcAttract = function(focus) {
        var force = PVector.sub(focus.position, this.position);
        var distance = force.mag;
        distance = constrain(distance, 5.0, 25.0);
        force.normalize();
        
        return force;
    };
    
    //apply force on predator
    this.applyForce = function(force) {
        var f = PVector.div(force, this.mass);
        this.acceleration.add(f);
    };
};

//background
var drawRange = function() {
    var incAmount = 0.01;
    stroke(16, 128, 16);
    for (var t = 0; t < incAmount*width; t += incAmount) {
        var n = noise(t);
        var y = map(n, 0, 8, 0, height/2);
        rect(t*105, height-y, 31, y);
        }
};

//the arrays for the mouse click, and the starter set
var predator = new predator(new PVector(width, height));
var fly = new Fly(new PVector(width/2, height/2));
var prey = [fly];
var predators = [predator];


draw = function() {
    background(67, 137, 207);
    drawRange();
    for (var i = 0; i < prey.length; i++) {
        for (var j = 0; j < predators.length; j++) {
            //Incresed attraction based on hunger variable
            var fear = fly.calcRepel(predators[j]);
            var hunger = predators[j].calcAttract(prey[i]);
            predators[j].applyForce(hunger);
            predators[j].display();
            predators[j].update();
            prey[i].display();
            prey[i].applyForce(fear);
            prey[i].update();
        }
    }
};

//spawn new prey to give the predator an eisier time
mouseClicked = function() {
    prey.push(new Fly(new PVector(mouseX, mouseY)));
};


