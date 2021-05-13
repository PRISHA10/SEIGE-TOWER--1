
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1
var backgroundImg,platform;
var ball,ballp
var  slingshot;
var gameState = "onSling";
var bg = "sprites/bg1.png";
var score = 0;

function preload() {
    ballp = loadImage("hexagon.png")
}

function setup(){
createCanvas(1000,600)    
   engine = Engine.create();
    world = engine.world;

    
    ball = Bodies.circle(50, 200, 10);
    World.add(world, ball);

    slingshot = new Sling(this.ball, {x: 100, y: 200});


    
    ground = new Ground(390,300,250,10);

    box1 = new Box(300,275,30,40);
    box2 = new Box(330,275,30,40);
    box3 = new Box(360,275,30,40);
    box4 = new Box(390,275,30,40);
    box5 = new Box(420,275,30,40);
    box6 = new Box(450,275,30,40);
    box7 = new Box(480,275,30,40);
    //level 2
    box8 = new Box(330,235,30,40);
    box9 = new Box(360,235,30,40);
    box10 = new Box(390,235,30,40);
    box11 = new Box(420,235,30,40);
    box12 = new Box(450,235,30,40);
//level3
box13 = new Box(360,195,30,40);
box14 = new Box(390,195,30,40);
box15 = new Box(420,195,30,40);
//top
box16 = new Box(390,155,30,40);
//new 
ground2 = new Ground(700,400,250,10);
box17 = new Box(600,30,30,40);
box18 = new Box(630,30,30,40);
box19 = new Box(660,30,30,40);
box20 = new Box(690,30,30,40);
box21 = new Box(720,30,30,40);
box22 = new Box(750,30,30,40);
//level2
box23 = new Box(630,10,30,40);
box24 = new Box(660,10,30,40);
box25 = new Box(690,10,30,40);
box26 = new Box(720,10,30,40);
//level3
box27 = new Box(750,0,30,40);
box28 = new Box(780,0,30,40);
box29 = new Box(660,0,30,40)
box30 = new Box(690,0,30,40)
box31 = new Box(720,0,30,40)
box32 = new Box(690,155,30,40) 




}

function draw(){
  background("blue");
       
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    ground2.display()
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();    
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    box29.display();
    box30.display(); 
    box31.display();
    box32.display();
  
    slingshot.display();
    
    imageMode(CENTER);
    image(ballp, ball.position.x, ball.position.y, 40, 40)
    //log6.display();
    //slingshot.display();    
}

function mouseDragged(){
        Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
    }



function mouseReleased(){
slingshot.fly()


}

function keyPressed(){
    if(keyCode === 32){
        //Matter.Body.setPosition(bird.body,{x:200,y:50})
        //slingShot.attach(bird.body);

    }

}



