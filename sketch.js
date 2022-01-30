var a,b;



function setup() {
  createCanvas(400,400);
  a = createSprite(200,200,50,50);
  b = createSprite(200,100,50,50);
  a.shapeColor = "green";
  b.shapeColor = "green";




}

function draw() {
  
  background(0);  
 b.x = mouseX;
 b.y = mouseY;

 console.log(a.x -b.x);

if(a.x - b.x <52 ){
  a.shapeColor = "red";
  b.shapeColor = "red";
}
else{
a.shapeColor = "green"  ;
b.shapeColor = "green";
}

if(b.x - a.x <52){
  a.shapeColor = "red";
  b.shapeColor = "red";
}
else{
a.shapeColor = "green"  ;
b.shapeColor = "green";
}


if(a.y - b.y <52 ){
  a.shapeColor = "red";
  b.shapeColor = "red";
}
else{
a.shapeColor = "green"  ;
b.shapeColor = "green";
}


  drawSprites();
}