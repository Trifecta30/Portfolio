var drawShape = function(x, y, radius) {
    
    if (radius < 2550) {
           println(radius);
           fill(390/radius, random(22,145), 255/radius); 
    }


    rect(x, y, radius, radius);
    
    var newRadius = radius/2;
    
    if (newRadius >= 18){
        
        drawShape(x, y, newRadius);
    }
};

drawShape(width/2, height/2, 380);
