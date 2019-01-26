var xPositions = [];
var yPositions = [];
var b = 0;
 {

    xPositions.push(random(width));
    yPositions.push(random(height));
  
}

draw = function() {
    background(214, 183, 137);
    var randomX = random(0, 400);
    var randomY = random(0, 400);

    fill(91, 126, 186);
    ellipse(randomX, randomY, 10, 10);
    for (var a = 0; a< xPositions.length; a++) {
        noStroke();
        fill(88, 88, 227);
        
        ellipse(xPositions[a]+-randomX, randomY[a]+-yPositions,10,10);
        ellipse(xPositions[a]+-150, yPositions[a]+-80, 10, 10);
        ellipse(xPositions[a]+36, yPositions[a]+-35, 10, 10);
        ellipse(xPositions[a]+-96, yPositions[a]+32, 10, 10);
        ellipse(xPositions[a]+-38, yPositions[a]+115, 10, 10);
        ellipse(xPositions[a]+32, yPositions[a]+29, 10, 10);
        ellipse(xPositions[a]+124, yPositions[a]+82, 10, 10);
        ellipse(xPositions[a]+-45, yPositions[a]+-123, 10, 10);
        yPositions[a] += 4;
        fill(134, 227, 88);
        rect(0, 360, 400, 40);
        
        if (yPositions[a] > height) {
            yPositions[a] = 40;
        }
    }

    
};
