background(49, 212, 255);

var drawfish = function() {
var x = random(0, 255);
var y = random(0, 255);
var z = random(0, 255);
var centerX = random(0, 300);
var centerY = random(0, 300);
var bodyLength = random(30, 110);
var bodyHeight = bodyLength/1.5;
var bodyColor = color(x, y, z);

//fish
noStroke();
fill(bodyColor);
// body
ellipse(centerX, centerY, bodyLength, bodyHeight);
ellipse(mouseX, mouseY, bodyLength, bodyHeight);
// tail
var tailWidth = bodyLength/4;
var tailHeight = bodyHeight/2;
triangle(centerX-bodyLength/2, centerY,
         centerX-bodyLength/2-tailWidth, centerY-tailHeight,
         centerX-bodyLength/2-tailWidth, centerY+tailHeight);
// eye
fill(33, 33, 33);
ellipse(centerX+bodyLength/4, centerY, bodyHeight/5, bodyHeight/5);
};

drawfish();
drawfish();
drawfish();
drawfish();
drawfish();
drawfish();
drawfish();
drawfish();
drawfish();
drawfish();
drawfish();
drawfish();
