var bob,bobrunning,castleimg,castle,bobidle,bobjump,platformimg,platform
,invplatform,invplatformgrp,Score = 0,spikes,spikesimg,backgroundimg,platform1,platform2,platform3,gamestate = "play";
var life3, life3i;
var life1, life1i;
var life2, life2i;

function preload(){
castleimg = loadImage("running/Castle.png");
bobidle = loadAnimation("running/idle.png");
bobrunning = loadAnimation("running/run1.png","running/run2.png","running/run3.png"
,"running/run4.png","running/run5.png","running/run6.png","running/run7.png")
bobjump = loadAnimation("running/jump1.png","running/jump2.png","running/jump3.png","running/jump4.png","running/jump5.png","running/jump6.png")
platformimg = loadImage("running/platform.png");
spikesimg = loadImage("running/Spikes.png");
backgroundimg = loadImage("running/background.png");
platform1 = loadImage("running/platform1.png");
platform2 = loadImage("running/platform2.png");
platform3 = loadImage("running/platform3.png");

life1i = loadImage("running/red heart.png")
  life2i = loadImage("running/red heart.png")
  life3i = loadImage("running/red heart.png")



}

function setup() {
  createCanvas(1000,500);
  bob = createSprite(400,210, 50, 50);
  bob.addAnimation("bobidle",bobidle);
  bob.addAnimation("bobrunning",bobrunning);
  bob.addAnimation("bobjumping",bobjump);
  bob.debug = true
  bob.setCollider("rectangle",0,0,50,50);
  invplatformgrp=createGroup();
  platformgrp = createGroup();

  

  
  
}

function draw() {
  
   
      if(gamestate === "play"){
        background(backgroundimg);
        background.x = background.width /2;
        background.velocityX = 1;  
 
        if(keyDown("right")) {
      
          bob.changeAnimation("bobrunning",bobrunning);
           
        }
        if(keyDown("down")) {
      
          bob.changeAnimation("bobidle",bobidle);
           
        }
        if(keyDown("up")) {
      
          bob.changeAnimation("bobjumping",bobjump);
           
        }
         if(keyDown("space")){
      
          bob.velocityY = -3;
          bob.changeAnimation("bobjumping",bobjump);
      
         }

         else{

           bob.changeAnimation("bobidle",bobidle);


         }
         bob.velocityY = bob.velocityY + 0.5;
         if(bob.isTouching(invplatformgrp)){
      
          bob.collide(invplatformgrp);
         bob.velocityY = 0
         Score = Score+1;
         }

         



         spawnplatform() 
       
         if(bob.y>400){

           gamestate = "end"

         }

      }

      if(gamestate === "end"){
    
     invplatformgrp.setVelocityXEach(0);
     platformgrp.setVelocityXEach(0);
    
      }


   //console.log(bob.velocityY);
   textSize(35)
       text("Score: "+Score,800,50);

       life1 = createSprite(75,50, 20, 20)
  life1.addImage(life1i)
  life1.scale = 0.3;
  
  life2 = createSprite(life1.x + 65,50, 20, 20)
  life2.addImage(life2i)
  life2.scale = 0.3;
  
  life3 = createSprite(life2.x + 65,50, 20, 20)
  life3.addImage(life3i)
  life3.scale = 0.3;


  
  drawSprites();
}


function spawnplatform(){

if(frameCount %55===0){

var r  = Math.round(random (999,1000));
var a = Math.round(random(175,275));
platform = createSprite(1000,a)
platformgrp.add(platform);
platform.velocityX = -5;
var x = Math.round(random(1,3));
if(x === 1){

platform.addImage(platform1)
invplatform = createSprite(1000,a-35,105,3)
}
if(x === 2){

  platform.addImage(platform2)
  invplatform = createSprite(1000,a-35,105,3)
  }
  if(x === 3){

    platform.addImage(platform3)
    invplatform = createSprite(1000,a-35,190,3)
    }
    
platform.scale = 1;

//console.log(r);
console.log(invplatform.width);



if(r === invplatform.x){

  

spikes = createSprite(r,invplatform.y - 20)
spikes.debug = true;
spikes.velocityX = -5;
spikes.addImage(spikesimg);
spikes.scale = 0.2;
spikes.lifetime = 18.18;


}
invplatform.velocityX = -5;
//invplatform.shapeColor = ("blue");
invplatform.visible = true;
invplatform.debug = true;
invplatformgrp.add(invplatform)
platform.lifetime = 18.18;
invplatform.lifetime = 18.18;


}



}
