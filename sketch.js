var box;
function setup() {
  
  createCanvas(400,400);

box = createSprite(100,100,100,69);



}

function draw() 
{
  background("green");


  
  if(keyIsDown(RIGHT_ARROW)){

box.position.x = box.position.x + 9;

  }

  if(keyIsDown(LEFT_ARROW)){


    box.position.x = box.position.x + -9;
      }
       
      if(keyIsDown(UP_ARROW)){

        box.position.y = box.position.y + -9;
        
          }
   
          if(keyIsDown(DOWN_ARROW)){

            
            box.position.y = box.position.y + 9;
              }
               


               
              box.BounceOff(TopEdge);
              box.BounceOff(BottemEdge);
              box.BounceOff(LeftEdge);
              box.BounceOff(RightEdge);
              
              

drawSprites();


}







