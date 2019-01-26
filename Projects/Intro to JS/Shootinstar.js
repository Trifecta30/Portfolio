var xPos = 10;
var yPos = 10;
var xPos2 = 155;
var yPos2 = 25;

draw = function() {
    

    background(5, 22, 71);
   
    

  
    fill(228, 245, 161);
    ellipse(xPos, yPos, 10, 10);
    xPos += 3.5;
    yPos += 5;
    
   
    fill(244, 250, 165);
    ellipse(xPos2, yPos2, 10, 10);
    xPos2 -= 2;
    yPos2 += 2.5;
};






