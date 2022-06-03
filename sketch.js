var x;
var y;
var centerx;
var centery;
var theta = 0;
var ropelength = 100;
var green = 0;
var diameter = 50;

function setup() {
  // put setup code here
  createCanvas(400,500);
  background(255);  
}

function draw() {
  // put drawing code here
  // Set the background color 
    background(220); 
      
    // Use noFill() function
    noFill();
      
    // Draw a circle 
    circle(140, 100, 150);
      
    // Use fill() function to fill color
    fill('green');
      
    // Draw a crrcle 
    circle(240, 100, 150); 
}

function newX(ropelength, centerx, theta) {
  var new_x = centerx + ropelength * (cos(radians(theta)));
  return  new_x;
}

function newY(ropelength, centery, theta) {
  var new_y = centery + ropelength * (sin(radians(theta)));
  return  new_y;
}
