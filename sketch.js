var  monkeyimage, bananaimage, stoneimage;
var monkey, stone, banana, back, invisibleground, score ;
var bananasgroup,obstaclesgroup;
function preload (){
   monkeyimage = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");

  bananaimage = loadImage("banana.png")
  
  stoneimage = loadImage("stone.png")
  
 back = loadImage("jungle.png")

}
 

function setup() {
  createCanvas(400, 400);
  
  monkey = createSprite(50, 340, 20, 50)
  monkey.addAnimation("m",monkeyimage)
monkey.scale = 0.1
 
  score = 0
  
  invisibleground=createSprite(200,385,400,10)
  invisibleground.visible = false
  
  bananasgroup = new Group();
  obstaclesgroup = new Group();
}

function draw() {
  background(back)
  
  text("score:"+score, 150, 50);
  
  obstacle();
  banana();
  
 monkey.collide(invisibleground)
  
  if (keyDown("space")&& monkey.y>=250){
    monkey.velocityY = -13;
  }
  
   if (monkey.isTouching(bananasgroup)){
    bananasgroup.destroyEach();
    monkey.scale=0.3
     score = score+1
  }
  
  if(monkey.isTouching(obstaclesgroup)){
     monkey.scale=0.2
    score=score-1
}
  
   monkey.velocityY=monkey.velocityY+0.8
  
  drawSprites();
}


function banana() {
  if( frameCount%100===0){
    var banana = createSprite(400,200,20,30);
    banana.addAnimation( "Banana", bananaimage);
  banana.scale = 0.05;
  banana.velocityX = -10;
 bananasgroup.add(banana);
  
  }
  }

function obstacle() {
    if( frameCount%200===0){
    var obstacle = createSprite(400,350,90,30);
   obstacle.addAnimation( "Stone", stoneimage);
 obstacle.scale = 0.2;
 obstacle.velocityX = -10;
 obstaclesgroup.add(obstacle);
  
  }
}