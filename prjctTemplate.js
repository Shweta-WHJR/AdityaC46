
var score=0;

function preload(){
  
run1=loadAnimation("run1.gif");
run2=loadAnimation("run2.gif");
run3=loadAnimation("run3.gif");
run4=loadAnimation("run4.gif");
gengarImg=loadImage("Gengar.webp");
haunterImg=loadImage("Haunter.webp");
onixImg=loadImage("Onix.webp")

}

function setup() {
  createCanvas();
  o=createSprite(10,720,800,800)
  o.addAnimation("oggy",run1)
  o.addAnimation("friend1",run2)
  o.addAnimation("friend2",run3)
  o.addAnimation("friend3",run4)
  
  ground=createImage(400,750,800,20);
  ground.visible=false
  backgrnd=createSprite(400,400,800,800);
  
  gengargrp=createGroup();
  hauntergrp=createGroup();
  onixgrp=createGroup();
  
  enemyGroup=createGroup();
  

  rectMode(CENTER);


}

function draw() {
  background(0);
  o.collide(ground);
 if(gameState==="play"){
 
  background.velocityY = -2;
  
  if (backgrnd.x < 0) {
    backgrnd.x = backgrnd.width/2;
  }
  
  if (keyDown("space")) {
    o.velocityY=-4;
  }
  
  score=score+getFramerate()/60;
 
 if(score>0 && score%1000===0){
   var rand=Math.round(random(1,4));
   switch(rand){
     case 1: o.changeAnimation("friend1",run2);
     break;
     case 2:o.changeAnimation("friend2",run3);
     break;
     case 3:o.changeAnimation("friend3",run4);
     break;
     default:break;
   }
 }
  
  
  
  var select_enemy = Math.round(random(0,2));
  
  if (World.frameCount % 50 == 0) {
    if (select_enemy == 0) {
      createGengar();
    } else if (select_enemy == 1) {
      createHaunter();
    } else if (select_enemy == 2) {
      createOnix();
    } 
    
  }

  if(o.isTouching(enemyGroup)){
    
    gameState="end"
  }
 }else if(gameState==="end"){
  
   enemyGroup.setLifetimeEach(0);
   enemyGroup.setVelocityYEach(0);
   
   textSize(30);
   fill("red")
   text("MISSION FAILED",displayWidth/2-100,120)
 }

  

  
  drawSprites();
  textSize(20);
  fill("green")
  text("SCORE: "+ score, 10, 30);
}


function createGengar() {
  var enemy1 = createSprite(800,Math.random(10,550));
  
  gengargrp.add(enemy1);
  enemyGroup.add(enemy1)
}

function createHaunter() {
  var enemy2 = createSprite(800,Math.random(10,550));
  
  hauntergrp.add(enemy2);
  enemyGroup.add(enemy2)
}

function createOnix() {
  var enemy3 = createSprite(800,Math.random(10,550));
  
  onixgrp.add(enemy3);
  enemyGroup.add(enemy3);
}




  
  
