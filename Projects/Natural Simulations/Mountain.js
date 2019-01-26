background(0, 255, 255);
var drawRange = function() {
    var incAmount = 0.01;
    stroke(0, 0, 0);
    for (var t = 0; t < incAmount*width; t += incAmount) {
        var n = noise(t);
        var y = map(n, 0, 3, 0, height/2);
        rect(t*100, height-y, 1, y);
    }
};
var drawRange2 = function() {
    stroke(46, 45, 46);
    var incAmount = 0.01;
    for (var t = 0; t < incAmount*width; t += incAmount) {
        var n = noise(t);
        var y = map(n, 0, 1, 58, height/2);
        rect(t*173, height-y, 1, y);
    }
};
var drawClouds = function(x, y){
    noStroke();
    fill(255, 255, 255);
    ellipse(x, y, 82, 60);
    ellipse(x + 30, y + 19, 43, 45);
    ellipse(x + -35, y + 18, 41, 42);
};
stroke(0, 0, 0);
drawClouds(random(50, 350), random(200, 50));
drawClouds(random(50, 350), random(200, 50));
drawClouds(random(50, 350), random(200, 50));
drawRange2();
drawRange();
