class player extends sprite {
 constructor(){
  super(10,height/2, "blue"); 
   this.score = 0;
   this.xp = 0;
   this.hp = 150;
   this.onScreen = true;
 }
  
  
   keyPressed(){
   if ((keyIsPressed == true) && (key == 'w')){ 
     this.move(0, -1);
    }
    else if ((keyIsPressed == true) && (key == 's')){ 
     this.move(0, 1);
    }
    else if ((keyIsPressed == true) && (key == 'a')){ 
     this.move(-1, 0);
    }
    else if ((keyIsPressed == true) && (key == 'd')){ 
     this.move(1, 0);
    }
     
      else if (keyCode === UP_ARROW){
     this.move(0, -1);
    }
    else if (keyCode === DOWN_ARROW){
     this.move(0, 1);
    }
    else if (keyCode === LEFT_ARROW){
     this.move(-1, 0);
    }
    else if (keyCode === RIGHT_ARROW){
     this.move(1, 0);
    }
  }
}