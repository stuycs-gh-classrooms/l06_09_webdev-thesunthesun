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
  centerx = width/2;
  centery = height/2;
  background(255);
  //fill(0,green,0,100);
  fill(0,100,0,100);
  circle(x,y,diameter);
  line(centerx, centery, x, y);
  theta += 1;
  if (theta % 60 == 0) {
    green += 10;
  }
  if (green > 255) {
    green = 0;
  }
  x = newX(ropelength, centerx, theta) ;
  y = newY(ropelength, centery, theta) ;

}

function newX(ropelength, centerx, theta) {
  var new_x = centerx + ropelength * (cos(radians(theta)));
  return  new_x;
}

function newY(ropelength, centery, theta) {
  var new_y = centery + ropelength * (sin(radians(theta)));
  return  new_y;
}
