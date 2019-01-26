var generator = new Random(1); 
        var paintNum = 1; 
        var paint = []; 
        var colorGen = function() {
            var color1 = floor(random(222));
            var color2 = floor(random(289));
            var color3 = floor(random(192));
            if (color2 > color3) {
                if (color1 > color2) {
                    color1 = 255;
                }
                else {
                    color2 = 255;
                }
                color3 = 0;
            }
            else if (color3 > color1) {
                if (color2 > color3) {
                    color2 = 255;
                }
                else {
                    color3 = 255;
                }
                color1 = 0;
            }
            else {
                if (color1 > color3) {
                    color1 = 255;
                }
                else {
                    color3 = 255;
                }
                color2 = 0;
            }
            
            return color(color1, color2, color3);
        };
    
    
        var Splatter = function() {
            this.x = random(width); 
            this.y = random(height); 
            this.size = random(165, 66); 
            this.color = color(floor(random(256)), floor(random(256)), floor(random(256)));
        };
        
        // Draw method
        Splatter.prototype.draw = function() {
            
            var num; 
            var circleX; 
            var circleY; 
            var circleSizeMean; 
            var circleSizeStdev; 
            var circleSize; 
            
            noStroke();
            fill(colorGen());
            
         
            for (var j = 0; j < 1 * this.size * this.size; j++) {
                
              
                num = generator.nextGaussian();
                circleX = num * this.size + this.x;
                
                
                num = generator.nextGaussian();
                circleY = num * this.size + this.y;
                
                if (abs(circleX - this.x) < this.size && abs(circleY - this.y) < this.size) {
                    circleSizeMean = 10;
                    circleSizeStdev = 10;
                }
                else if (abs(circleX - this.x) < 2*this.size && abs(circleY - this.y) < 2*this.size) {
                    circleSizeMean = 10;
                    circleSizeStdev = 10;
                }
                else {
                    circleSizeMean = 16;
                    circleSizeStdev = 19;
                }
                
             
                circleSize = 10;
                
                
                ellipse(circleX, circleY, circleSize, circleSize);
            }
        };


    for (var i = 0; i < paintNum; i++) {
        paint[i] = new Splatter();
        paint[i].draw();
    }
