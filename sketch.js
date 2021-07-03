
var bg, bgImage;

var iss, issImage;

var spacecraft, spacecraftImage;
var scleft, scright, scdown;

var hasDocked = false;

function preload () {

  bgImage = loadImage ("spacebg.jpg");

  issImage = loadImage ("iss.png");

  spacecraftImage = loadAnimation ("spacecraft1.png");

  scdown  = loadAnimation ("spacecraft2.png");
  scleft  = loadAnimation ("spacecraft3.png");
  scright = loadAnimation ("spacecraft4.png");

}

function setup () {

  createCanvas(1200,600);

  bg = createSprite (10,10,800,400);
  bg.addImage (bgImage);
  bg.scale=2.98;


  iss = createSprite (750,250,0,0);
  iss.addImage (issImage);
  iss.scale=0.9;

  spacecraft = createSprite (280,470,30,30);
  spacecraft.addAnimation ("image",spacecraftImage);
  spacecraft.addAnimation ("downsmoke",scdown);
  spacecraft.addAnimation ("rightsmoke",scright);
  spacecraft.addAnimation ("leftsmoke",scleft);

  spacecraft.scale=0.3;

}

function draw () {

  background("yellow");
  drawSprites ();

  if (!hasDocked) {

    //spacecraft.x=Math.random (0,1200);

    if (keyWentDown(UP_ARROW)) { 
      spacecraft.velocityY=-5;
    }
    if (keyWentUp(UP_ARROW)) {
      spacecraft.velocityY=0;
    }



    if (keyWentDown(DOWN_ARROW)) {
      spacecraft.velocityY=5;
      spacecraft.changeAnimation ("downsmoke",scdown);
    }
    if (keyWentUp(DOWN_ARROW)) {
      spacecraft.velocityY=0;
    }



    if (keyWentDown(RIGHT_ARROW)) {
      spacecraft.velocityX=5;
      spacecraft.changeAnimation ("rightsmoke",scright);
    }
    if (keyWentUp(RIGHT_ARROW)) {
      spacecraft.velocityX=0;
    }



    if (keyWentDown(LEFT_ARROW)) {
      spacecraft.velocityX=-5;
      spacecraft.changeAnimation ("leftsmoke",scleft);
    }
    if (keyWentUp(LEFT_ARROW)) {
      spacecraft.velocityX=0;
    }
    

  }

  if (spacecraft.x===695 && spacecraft.y===375 ) {
    hasDocked=true
  }

  if (hasDocked===true) {
    textSize (20);
    fill ("white");
    text ("Docking Successful",600,540);
    spacecraft.velocityX=0
    spacecraft.velocityY=0

  }

  console.log("spacecraftX"+spacecraft.x);
  console.log("spacecraftY"+spacecraft.y);



}
