
var x = random(0, 255);
var y = random(0, 255);
var z = random(0, 255);

fill(255, 0, 0);
textSize(30);
text("Pea creator", 10, 30);
textSize(10);
text("SO healthy!", 10, 87);
textSize(25);
text("Enjoy free peas for life!", 20, 150);
var draw= function() {

fill(x,y,z);
ellipse(mouseX, mouseY, 50, 50);
fill(x,y,z);
ellipse(y, 22, 50, 50);
fill(x,y,z);
ellipse(x, 87, 50, 50);
};
