class paper{

    constructor(x,y){

        var options={
           
           isStatic:false,
           restitution:0.3,
           friction:0.7,
           density:1.2

        }

        this.body=Bodies.circle(x,y,20,options);
        this.width=20;

        World.add(world,this.body);
    }

    display(){
        var pos =this.body.position;
        strokeWeight(0);
        fill("white");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.width);
        
    }
}