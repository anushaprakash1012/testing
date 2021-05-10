function setup() {
  createCanvas(800,800);
  movingRect = createSprite(400, 200, 50, 50);
  movingRect.shapeColor = "green";
  fixedRect = createSprite(400, 400, 100, 100);
  fixedRect.shapeColor = "green";
}

function draw() {
  background(255,255,255);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  console.log(movingRect.x - fixedRect.x);

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  drawSprites();
}