const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var platform,tree,treeIMG;

function preload() {
    backgroundImg = loadImage("bg.png");
    treeIMG = loadImage("tree.png");
}

function setup(){
    var canvas = createCanvas(1250,575);
    engine = Engine.create();
    world = engine.world;

    boy=new Boy(75,475,400);
    stone=new Stone(300,325);
    sling=new Slingshot(stone.body,{x:300,y:425});
    
    mango1=new Mango(875,165,40,30);
    platform1=Bodies.rectangle(875,195,30,5,{isStatic:true});
    World.add(world,platform1);
    mango2=new Mango(915,100,40,30);
    platform2=Bodies.rectangle(915,120,30,5,{isStatic:true});
    World.add(world,platform2);
    mango3=new Mango(1000,50,40,30);
    platform3=Bodies.rectangle(1000,75,30,5,{isStatic:true});
    World.add(world,platform3);
    mango4=new Mango(830,235,40,30);
    platform4=Bodies.rectangle(830,260,30,5,{isStatic:true});
    World.add(world,platform4);
    mango5=new Mango(1090,230,40,30);
    platform5=Bodies.rectangle(1090,255,30,5,{isStatic:true});
    World.add(world,platform5);
    mango6=new Mango(900,220,40,30);
    platform6=Bodies.rectangle(900,245,30,5,{isStatic:true});
    World.add(world,platform6);
    mango7=new Mango(965,100,40,30);
    platform7=Bodies.rectangle(965,125,30,5,{isStatic:true});
    World.add(world,platform7);
    mango8=new Mango(1125,160,40,30);
    platform8=Bodies.rectangle(1125,175,30,5,{isStatic:true});
    World.add(world,platform8);
    mango9=new Mango(1160,230,40,30);
    platform9=Bodies.rectangle(1160,255,30,5,{isStatic:true});
    World.add(world,platform9);
    mango10=new Mango(1200,175,40,30);
    platform10=Bodies.rectangle(1200,200,30,5,{isStatic:true});
    World.add(world,platform10);
    mango11=new Mango(1000,215,40,30);
    platform11=Bodies.rectangle(1000,230,30,5,{isStatic:true});
    World.add(world,platform11);
    mango12=new Mango(1175,125,40,30);
    platform12=Bodies.rectangle(1175,150,30,5,{isStatic:true});
    World.add(world,platform12);


    tree=createSprite(1000,275,1,1);
    tree.addImage(treeIMG);
    tree.scale=0.5;

    Matter.Body.setStatic(boy.body,isStatic=true);

}

function draw(){
    background(backgroundImg);
    Engine.update(engine);

    boy.display();   
    sling.display();
        
    drawSprites();
    mango1.display();
    mango2.display();
    mango3.display();
    mango4.display();
    mango5.display();
    mango6.display();
    mango7.display();
    mango8.display();
    mango9.display();
    mango10.display();
    mango11.display();
    mango12.display();
    stone.display();
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY}); 
}

function mouseReleased(){
    sling.fly();
}

function keyPressed(){
    if(keyCode===32){
        sling.attach(stone.body);
    }
}