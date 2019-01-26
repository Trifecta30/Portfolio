//book array
var books = [{
    title: "The Good trip",
    author: "Jimmy McKimmy",
    color: color(43, 122, 12),
    stars: 2
}, {
    title: "Apples",
    author: "Carl",
    color: color(255, 255, 255),
    stars: 1
}, {
    title: "KNOWvel",
    author: "frank",
    color: color(100, 122, 219),
    stars: 8
}, {
    title: "Velociraptor",
    author: "Kibby Jones",
    color: color(31, 90, 153),
    stars: 4
}];

// draw shelf
background(230, 187, 122);
fill(173, 117, 33);
rect(0, 120, width, 10);

// book loop
for (var i = 0; i < books.length; i++) {
    var book = books[i]; //setting book variable
    var xPos = i * 100;
    var yPos = 20;
    fill(book.color);
    rect(xPos + 10, yPos, 90, 100);
    fill(0, 0, 0);
    textSize(11); //general book drawings
    text(book.title, xPos + 15, yPos + 5, 70, 100);
    textSize(9);
    text(book.author, xPos + 20, yPos * 2, 70, 100);

    //Seal of approval
    if (book.stars < 5) {
        var checked = getImage("cute/Star");
        image(checked, xPos + 10, yPos * 4, 30, 40);
        text("GOOD", xPos + 45, yPos * 4 + 4, 50, 40);
        
        if (book.stars < 3) {
        var checked = getImage("cute/Star");
        image(checked, xPos + 10, yPos * 4, 30, 40);
        image(checked, xPos + 36, yPos * 4, 30, 40);
        text("VERY", xPos + 44, yPos * 5 + -26, 50, 40);
        
     
        
       }
    }
}


    if (xPos > 350) {
        xPos = i * 100;
        yPos += 120;
    }
