const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var rect1;
var rect2;
var rect3;
var trianagle1;
var triangle2;
var triangle3;
var Box;

function setup() {
  createCanvas(800,400);
 engine = Engine.create();
 world = Engine.world;

  rect1= new Box(700,300,30,10);
  rect2= new Box(650,300,30,10);
  rect3= new Box(600,300,30,10);
  rect4= new Box(750,300,30,10);
  rect5= new Box(800,300,30,10);

  triangle1= new trianagle(700,250,30,10);
  triangle2= new trianagle(650,250,30,10);
  triangle3= new trianagle(600,250,30,10);
  triangle4= new trianagle(750,250,30,10);
  triangle5= new trianagle(800,250,30,10);

}

function draw() {
  background("black");  

  rect1.display;
  rect2.display;
  rect3.display;
  rect4.display;
  rect5.display;

  trianagle1.display;
  trianagle2.display;
  trianagle3.display;
  trianagle3.display;
  trianagle4.display;
  trianagle5.display;
  
}