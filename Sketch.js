var x = 0;
var y = 0;

var nodeList = [];
var currOperationType = ""
var currNodeType = ""
var nodeTypeSelect;
var operationSelect;
var hb;
function setup() {
  createCanvas(windowWidth, windowHeight);
  hb = new HeadBar();
  nodeTypeSelect = createSelect();
  operationSelect = createSelect();
  selectOptions = {options:["BFS","DFS","Dikstra"],disabled:["Dikstra"]};
  selectNodeType = {options:["Circle","Modern"],disabled:[]}
  selectOptions.options.forEach(value=>{operationSelect.option(value)})
  selectOptions.disabled.forEach(value=>{operationSelect.disable(value)})
  selectNodeType.options.forEach(value=>{nodeTypeSelect.option(value)})
  selectNodeType.disabled.forEach(value=>{nodeTypeSelect.disable(value)})
  operationSelect.position(100,10);
  nodeTypeSelect.position(200,10)
  operationSelect.changed(operationSelectSelection)
  currOperationType = "BFS"
  nodeTypeSelect.changed(nodeTypeSelection)
  currNodeType = "Circle"
}

var selected_node=null;
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
    nodeList[selected_node].mouseDraggedEvent(mouseX,mouseY)
  }
}

//Mouse Pressed Event
function mousePressed() {
  for(const node in nodeList){
     if(nodeList[node].mousePressedEvent(mouseX,mouseY)){
       selected_node = node;
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
    this.button = createButton('Create Node');
    this.button.mousePressed(addNode);
  }

  display(){
    fill(this.base.r,this.base.g,this.base.b)
    rect(0,0,this.base.w,this.base.h)
    fill(255,255,255)
    textSize(15)
    text('Operations',10,30);
    this.button.position(300,10);
  }
}

operationSelectSelection = () => {
  currOperationType = this.operationSelect.value();
}

nodeTypeSelection = () => {
  currNodeType = this.nodeTypeSelect.value();
}

addNode = ()=>{
  if(currNodeType === "Modern"){
    nodeList.push(new ModernNode(windowWidth/2,windowHeight/2,20,20));
  }else if(currNodeType === "Circle"){
    nodeList.push(new CircleNode(windowWidth/2,windowHeight/2,30));
  }
  console.log(nodeList);
}
