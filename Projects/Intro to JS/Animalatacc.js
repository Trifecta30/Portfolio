var bodyX = 202;
var bodyY = 210;
var bodyW = 128;
var bodyH = bodyW/0.5;
var eyeSize = 20;
var eyePosition1 = 180; 
var eyePosition2 = 110;
var eyePosition3 = 215;
var pupilPosition1 = 180;
var pupilPosition2 = 110;
var pupilPosition3 = 215;
var pupilSize = 20;
var legs1 = 150;
var legs2 = 300;
var legs3 = 260;
var arms1 = 180;
var arms2 = 210;
var arms3 = 210;
var mouthPosition1 = 200;
var mouthPosition2 = 140;
var mouthSize = 20;
var bodySize = bodyX+bodyY+bodyW+bodyH;

draw = function() {
    background(207, 254, 255);
    fill(240, 209, 36);
    ellipse(bodyX, bodyY, bodyW, 106);
    ellipse(bodyX, bodyY-70, bodyH, 47);
    
    
    ellipse(arms1, arms2, 25, 120);
    ellipse(arms3, arms2, 25, 120);
    
    ellipse(legs1, legs2, 25, 120);
    ellipse(legs3, legs2, 30, 124);
    
    fill(255, 255, 255);
     ellipse(pupilPosition1, pupilPosition2, pupilSize, pupilSize);
    ellipse(pupilPosition3, pupilPosition2, pupilSize, pupilSize);
     fill(0, 0, 0);
    ellipse(mouthPosition1, mouthPosition2, mouthSize, mouthSize);
    ellipse(eyePosition1, eyePosition2, eyeSize, eyeSize);
    ellipse(eyePosition3, eyePosition2, eyeSize, eyeSize);
    
    bodyW++; 
    
};
