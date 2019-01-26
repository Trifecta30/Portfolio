fill(0, 0, 0);
ellipse(200, 200, 375, 375);
textSize(25);
var answer = floor(random(1, 5)); 
if (answer === 1) {
    fill(0, 89, 242);
    triangle(200, 104, 280, 280, 120, 280);
    fill(255, 255, 255);     text("Yes \n", 176, 231);
}else if (answer === 2) {
    fill(28, 199, 190);
    triangle(200, 104, 280, 280, 120, 280);
    fill(255, 255, 255);  text("Nope\n", 172, 225);
  }else if (answer === 3) {
    
    fill(28, 214, 139);
    triangle(200, 104, 280, 280, 120, 280);
    fill(255, 255, 255); text(" \nDefinetly?", 147, 224);
}else if (answer === 4) {
    
    fill(0, 227, 170);
    triangle(200, 104, 280, 280, 120, 280);
    fill(255, 255, 255); text("No", 181, 234);
    
}
