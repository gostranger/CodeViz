 
function setup() {
  createCanvas(windowWidth, windowHeight);
  hb = new HeadBar();
}

var x = 0;
var y = 0;

var nodeList = [];

var selected_obj=null;
function draw() {
  background(255);
  hb.display();
  for(const node in nodeList){
    if(nodeList[node].name == "rectangle"){
        fill(color('#FFCD00'))
        stroke(color('#0016FF'))
        rect(nodeList[node].x,nodeList[node].y,nodeList[node].w,nodeList[node].h);
    }
  }
}

function mouseDragged() {
  if(selected_node!=null){
     nodeList[selected_node].x = mouseX-nodeList[selected_node].x_diff;
     nodeList[selected_node].y = mouseY-nodeList[selected_node].y_diff;
  }

}

function mousePressed() {
  for(const shape in nodeList){
    let shp_x = nodeList[node].x;
    let shp_y = nodeList[node].y;
    let shp_w = shp_x + nodeList[node].w;
    let shp_h = shp_y + nodeList[node].h;
    console.log(mouseX,mouseY)
    if(mouseX>shp_x&&mouseX<shp_w&&mouseY>shp_y&&mouseY<shp_h){
       selected_node = shape;
      nodeList[node].x_diff = mouseX - shp_x;
      nodeList[node].y_diff = mouseY - shp_y;
      console.log(nodeList[selected_node]);
      return;
    }
  }
}

function mouseReleased(){
  selected_node=null;
}


class HeadBar{
  constructor(){
    this.base = {w:windowWidth,h:(windowHeight * (5/100)),r:0,g:0,b:0}
    this.operationSelect = createSelect();
    this.selectOptions = {options:["BFS","DFS","Dikstra"],disabled:["Dikstra"]};
  }

  display(){
    fill(this.base.r,this.base.g,this.base.b)
    rect(0,0,this.base.w,this.base.h)
    this.selectOptions.options.forEach(value=>{this.operationSelect.option(value)})
    this.selectOptions.disabled.forEach(value=>{this.operationSelect.disable(value)})
    fill(255,255,255)
    textSize(15)
    text('Operations',10,30);
    this.operationSelect.position(100,10)

  }
}

class Node{
  constructor(){

  }
}




