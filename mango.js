class mangos{
    constructor(x,y,r){
        var options={
            isStatic:true,
            restitution:0,
            friction:1
           
        }
        this.x=x;
      this.y=y;
        this.body= Bodies.circle(x,y,r,options)
        this.r=r;
        this.image=loadImage("mango.png")       
        
        World.add(world,this.body);
    }

 display(){
var pos=this.body.position;
var angle=this.body.angle;

push();
translate(pos.x,pos.y);
rotate();
imageMode(CENTER)
image(this.image,0,0,70,70)

pop();
}}
