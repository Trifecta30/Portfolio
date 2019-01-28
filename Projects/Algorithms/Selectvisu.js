var swapCount=1; //to vertically offset arrays

//func for drawing arrays and lines
var displaySwaps = function (array, xPos1, xPos2) {
    line(xPos1, 12 + 50*swapCount,xPos2, 50*(swapCount+1));
};
var displayArray = function(array, xDist, yDist) {
    textFont(createFont("monospace"), 12);
    fill(0,0,0);
    text(array, xDist, yDist);
};

//Selection sort
var swap = function(array, secondIndex, firstIndex) {
    if(swapCount < array.length) {
        displaySwaps(array, 15+firstIndex*21, 15+secondIndex*21);
    }  //draw lines
    displayArray(array, 10, 10 + 50*swapCount); //draw array
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
    swapCount++;
};
var indexOfMinimum = function(array, startIndex) {

    var minValue = array[startIndex];
    var minIndex = startIndex;
    for(var i = minIndex + 1; i < array.length; i++) {
        if(array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    } 
    return minIndex;
}; 
var selectionSort = function(array) {
    var minimum;
    for(var count = 0; count < array.length; count++) {
        minimum = indexOfMinimum(array, count);
        swap(array, count, minimum );
    }
    swapCount=1;
};


//actual data
var array1 = [20, 100, -20, -5];
selectionSort(array1);

var array2 = [40, -20, 15, -35];
translate(100, 0);
selectionSort(array2);

var array3 = [100, -10, -8, -50];
translate(100, 0);
selectionSort(array3);

var array4 = [-5, -2, -50, -10];
translate(100, 0);
selectionSort(array4);
