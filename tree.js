class tree{
    constructor(x,y){
        var options={
            isStatic:true
        }
 this.body=Bodies.rectangle(x,y,450,600,options)
this.width=450;
this.height=600;

this.image=loadImage("tree.png");
}

display(){
var pos=this.body.position;
  push();
  translate(pos.x,pos.y);
  rotate(this.body.angle);
imageMode(CENTER);
image(this.image,0,0,450,600);
  pop();

}
}

