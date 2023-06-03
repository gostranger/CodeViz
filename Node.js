//creating Generic Node
class Node{

    constructor(xpos,ypos){
      this.x = xpos;
      this.y = ypos;
      this.diameter = 30
    }

  }


  class CircleNode extends Node{
     constructor(xpos,ypos,diameter){
        super(xpos,ypos)
        this.len = diameter
     }

     mouseDraggedEvent(mouseX,mouseY){
      this.x = mouseX;
      this.y = mouseY;
     }

     mousePressedEvent(mouseX,mouseY){
      let distance = dist(this.x,this.y,mouseX,mouseY)
      if(distance<(this.len/2)){
         return true;
      }
     }

     display(){
        fill(119, 153, 204)
        circle(this.x,this.y,this.len)
     }
  }

  class ModernNode extends Node{
   constructor(xpos,ypos,width,height){
      super(xpos,ypos)
      this.w = width;
      this.h = height;
      this.xDiff=null;
      this.yDiff=null;
   }

   mouseDraggedEvent(mouseX,mouseY){
      this.x = mouseX-this.xDiff;
      this.y = mouseY-this.yDiff;
   }

   mousePressedEvent(mouseX,mouseY){
      let shp_w = this.x + this.w;
      let shp_h = this.y + this.h;
      if(mouseX>this.x&&mouseX<shp_w&&mouseY>this.y&&mouseY<shp_h){
         this.xDiff = mouseX - this.x;
         this.yDiff = mouseY - this.y;
         return true;
      }
   }

   display(){
      fill(0,0,0)
      rect(this.x,this.y,this.w,this.h)
   }
  }