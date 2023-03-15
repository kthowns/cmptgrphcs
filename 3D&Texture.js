let img;

function preload(){
  img = loadImage("https://cdn-icons-png.flaticon.com/512/1501/1501860.png"); //It can be URL
}

function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(220);
  rotateX(frameCount*0.01);
  rotateY(frameCount*0.05);
  
  texture(img);
  box(200);
}
