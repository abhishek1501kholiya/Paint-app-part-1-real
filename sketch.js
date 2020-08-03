var Canvas ;
var drawing = [];
var currentPath;
var currenPath ;
function setup (){
Canvas = createCanvas(400,400);
Canvas.mousePressed(startPath);
//Canvas.mouseReleased(endPath)

}
function startPath(){
currentPath = [];
drawing.push(currentPath);

}

function draw(){
  background(0);
  if(mouseIsPressed){
    var point = {
      x : mouseX, 
      y : mouseY
    }
    currentPath.push(point);
  }
  stroke(255);
  strokeWeight(4);
   noFill();
   for(var i = 0; i<drawing.length ; i++){
     var path = drawing[i];
     beginShape();
  for(var j = 0; j<path.length ; j++){
    vertex(path[j].x, path[j].y);
  }
  endShape();
}

}
