const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bgImg,hero,ground,b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b18,b19;
var b20,b21,b22,b23,b24,b25,b26,b27,b28,b29,b30,b31,b32,fly,monster;
function preload() {
//preload the images here
bgImg=loadImage("images/GamingBackground.png")
}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
	world = engine.world;
  // create sprites here
  hero=new Hero(200,500,300,160);
  ground=new Ground(600,600,1200,20);
  monster=new Monster(1300,200,200,200);
  b1=new Box(900,0);
  b2=new Box(900,0);
  b3=new Box(900,0);
  b4=new Box(900,0);
  b5=new Box(900,0);
  b6=new Box(900,0);
  b7=new Box(900,0);
  b8=new Box(900,0);
  b9=new Box(970,0);
  b10=new Box(970,0);
  b11=new Box(970,0);
  b12=new Box(970,0);
  b13=new Box(970,0);
  b14=new Box(970,0);
  b15=new Box(970,0);
  b16=new Box(970,0);
  b17=new Box(1041,0);
  b18=new Box(1041,0);
  b19=new Box(1041,0);
  b20=new Box(1041,0);
  b21=new Box(1041,0);
  b22=new Box(1041,0);
  b23=new Box(1041,0);
  b24=new Box(1041,0);
  b25=new Box(1112,0);
  b26=new Box(1112,0);
  b27=new Box(1112,0);
  b28=new Box(1112,0);
  b29=new Box(1112,0);
  b30=new Box(1112,0);
  b31=new Box(1112,0);
  b32=new Box(1112,0);
  fly=new Fly(hero.body,{x:500,y:0});
  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(bgImg);
  ground.display();
  hero.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  b16.display();
  b17.display();
  b18.display();
  b19.display();
  b20.display();
  b21.display();
  b22.display();
  b23.display();
  b24.display();
  b25.display();
  b26.display();
  b27.display();
  b28.display();
  b29.display();
  b30.display();
  b31.display();
  b32.display();
  fly.display();
  monster.display();
}

