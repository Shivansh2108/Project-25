class ground{
  constructor(x,y){
        
   var options={
                
      isStatic:true
        
     }
    this.body=Bodies.rectangle(x,y,1600,20,options);
    this.width=1600;
    this.height=20;
     World.add(world,this.body);
     }
        
    display(){
     var pos =this.body.position;
     fill("grey");
     //rectMode(CENTER);
     rect(pos.x,pos.y,this.width,this.height);
    
    }
}