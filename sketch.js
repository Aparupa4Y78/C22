const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ball_options ={
    
        isStatic: true
    }

   ball= Bodies.circle(200,200,20,ball_options);
    World.add(world,ball);

   


    console.log(ball);
}

function draw(){
    backball(0);
    Engine.update(engine);
    rectMode(CENTER);
    ellipse(ball.position.x,ball.position.y,20,20);
    rect(ball.position.x,ball.position.y,50,50);
}
