function setup() {
  createCanvas(400, 400);
}

var on = true
var ballX = 30;
var ballSpeed = 3;

var ballX2 = 370;
var ballSpeed2 = 5;



function draw() {
 fill (220);
  
  if (on) {
    background(255,255,255)
  }

  fill(255, 0, 0);
  ellipse(30,ballX,30);
  
  fill(0, 0, 255);
  ellipse(200,ballX2, 30);

  ballX = ballX + ballSpeed;
  ballX2 = ballX2 + ballSpeed2;

  if (ballX>= 400) {
    ballSpeed = -3;
    scale(3)
  }

  if (ballX2 >= 400) {
    
    ballSpeed2 = -5;
    
  }

  if (ballX <= 0) {
    ballSpeed = 3;
    
  }
  
  if (ballX <= 0) { 
    
    on = !on
    
  }

  if (ballX2 <= 0) {
    ballSpeed2 = 5;
  }
  
  if (ballX2 <= 100) {
    on =!on
  }

}
