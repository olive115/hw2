function setup() {
  createCanvas(400, 400);
  strokeCap(SQUARE);
}

function draw() {
  background(240);
  noStroke();

  // Red square
  fill(255, 0, 0);
  rect(0, 0,100,100);

  // Blue square
  fill(0, 0, 255);
  rect(380, 100, 80, 80);

  // Yellow square
  fill(255, 255, 0);
  rect(100, 390, 150, 40);
  
  //Black Square
  fill(0)
  rect(250,390,124,40);

  stroke(0);
  strokeWeight(13);
  line(380, 180, 400, 180); // left line  
  line(0, 100, 400, 100); // top line
  line(380,400,380,100); //down from blue
  line(100,385,380,385); //on top of yellow
  line(100,0,100,400); //down from red 
  
}
