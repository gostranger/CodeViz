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
    nodeList[node].display()
  }
}

//Mouse Drag Event
function mouseDragged() {
  if(selected_node!=null){
     nodeList[selected_node].x = mouseX-nodeList[selected_node].x_diff;
     nodeList[selected_node].y = mouseY-nodeList[selected_node].y_diff;
  }

}

//Mouse Pressed Event
function mousePressed() {
  for(const node in nodeList){
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

//Mouse Released Event
function mouseReleased(){
  selected_node=null;
}

//this the menu bar of the appliction
class HeadBar{
  constructor(){
    this.base = {w:windowWidth,h:(windowHeight * (5/100)),r:0,g:0,b:0}
    this.operationSelect = createSelect();
    this.selectOptions = {options:["BFS","DFS","Dikstra"],disabled:["Dikstra"]};
    this.button = createButton('Create Node');
    this.button.mousePressed(addNode)
  }

  display(){
    fill(this.base.r,this.base.g,this.base.b)
    rect(0,0,this.base.w,this.base.h)
    this.selectOptions.options.forEach(value=>{this.operationSelect.option(value)})
    this.selectOptions.disabled.forEach(value=>{this.operationSelect.disable(value)})
    fill(255,255,255)
    textSize(15)
    text('Operations',10,30);
    this.operationSelect.position(100,10);
    this.button.position(200,10);

  }
}

//creating Generic Node
class Node{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.diameter = 30
  }

  display(){
    fill(0,0,0)
    circle(this.x,this.y,this.diameter)
  }
}

function addNode(){
  nodeList.push(new Node(windowWidth/2,windowHeight/2));
  console.log(nodeList);
}
