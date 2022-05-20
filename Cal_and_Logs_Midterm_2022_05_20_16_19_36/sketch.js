let img;// declare gobal variable to image object

let imgArray = []; 

let animActive = true;

let counter = 0; 


function preload(){ 
  imgArray[0] = loadImage("flame.png");
  imgArray[1] = loadImage("flame2.png");
  imgArray[2] = loadImage("flame3.png");
  imgArray[3] = loadImage("flame4.png"); 
  imgArray[4] = loadImage("flame5.png"); 
}

function setup() {
  createCanvas(400, 400)
  img = loadImage ("flame.png");
  img = loadImage ("flame2.png"); 
  img = loadImage ("flame3.png"); 
  img = loadImage ("flame4.png"); 
  img = loadImage ("flame5.png"); 
}

function draw() {
  background(45);
  // image(img, -205, -160, 800, 800);
  if (frameCount % 20 == 0 && animActive){
    counter++;
  }
  console.log(mouseX + ", " + mouseY);

  //Walls 
  fill(150); 
  noStroke(); 
  push();
  scale(7.0); 
  rect(-13, -10, 20, 55);
  
  //Walls 
  fill(150); 
  rect(50, -10, 20, 55);
  pop(); 
  
  //Table 
  fill(100); 
  push(); 
  scale(5); 
  rect(0, 50, 80, 45);
  pop(); 

 image(imgArray[counter%5], -150, -150, 700, 700);
}
function mousePressed(){
  animActive = !animActive;
}

//ADD Sound
