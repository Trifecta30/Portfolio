//used many wave challenge
angleMode = "radians";
//define creatures
var piceratops = getImage("avatars/marcimus-red");
var leafers = getImage("avatars/marcimus-purple");
var aqualine = getImage("avatars/marcimus-orange");
var duskpin = getImage("avatars/marcimus");
var pause = false;

var Wave = function(amplitude, period, color, avatar) {
    this.startAngle = 0;
    this.amplitude = amplitude;
    this.period = period;
    this.color = color;
    this.angleVel = (TWO_PI / this.period) * 5;
    this.avatar = avatar;//so that we can incorporate avatar
};

Wave.prototype.update = function() {
    this.startAngle += TWO_PI / this.period;
};

Wave.prototype.draw = function() {
    var angle = this.startAngle;
    fill(this.color);
    //wave functino
    for(var x = 0; x <= width; x += 13){
        var y = this.amplitude * sin(angle);
        image(this.avatar, x, y+height/2, 62,62);
        angle += this.angleVel;//adds the velocity so they make a wave
    }
    
};

var wave = new Wave(204, 786, color(168, 61, 61, 100),aqualine);
var wave2 = new Wave(350, 273, color(0, 0, 255, 100), piceratops);
var wave3 = new Wave(-78,246, color(0, 0, 255, 100), duskpin);
var wave4 = new Wave(78, 144, color(255, 0, 0), leafers);

translate(0, height/5);

draw = function() {
    background(47, 129, 173);
   wave.draw();
   wave2.draw();
    wave3.draw();
    wave4.draw();
   if(pause===false){
        wave.update();
        wave2.update();
        wave3.update();
        wave4.update();
   }
   mouseClicked = function(){
        if(pause===false){
            pause = true;
        }
        else{
            pause = false;
        }
   };
};


