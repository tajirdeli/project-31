const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var ground;
var engine;
var world;
var division=[]
var dh=300


function setup(){
createCanvas(480,800);
engine=Engine.create()
  world=engine.world

  ground=new Ground(150,700,800,10);
  for(var k=0;k=width;k=k+80){
    division.push(new Division(k,height-dh/2,10,dh))
  }




}




function draw(){
background(0)
Engine.update(engine)
ground.display();
for(var k=0;k<division.length;k++){
  division[k].display();
}
}