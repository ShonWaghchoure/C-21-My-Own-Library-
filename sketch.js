var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  
  fixedRect = createSprite(200,300,50,80);
  movingRect = createSprite(400,300,60,50);

  fixedRect.shapeColor = "orange";
  movingRect.shapeColor = "orange";
}

function draw() {
  background(255,255,255);

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

   if (bounceOff(movingRect,fixedRect)) {
    fixedRect.shapeColor = "blue";
    movingRect.shapeColor = "blue";
   }
   else {
    fixedRect.shapeColor = "orange";
    movingRect.shapeColor = "orange";
   }
   
  drawSprites();
}

