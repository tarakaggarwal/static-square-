const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var box;
var box1;
var ball;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
var box_options = {
    restitution: 0.5
}
var box1_options = {
    restitution:  2
}
var ball_options = {
    restitution : 1.2
}
    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
box = Bodies.rectangle(100,100,40,40,box_options) ;
box1 = Bodies.rectangle(200,200,25,25,box1_options) ;
ball = Bodies.circle(300,300,20,ball_options);
World.add(world,box);
    console.log(ground);
    World.add(world,box1);
    World.add(world,ball);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    rect(box.position.x,box.position.y,40,40);
    rect(box1.position.x,box1.position.y,25,25);
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20)
}