class enemy extends sprite {
   constructor() {
    super((width -10), (height * Math.random()), color)
     this.hp = 100
     this.SPEED = 3
     this.color = "red"
    //this.vx = -this.SPEED
  }
  
hfollow(px){
 
    
    if (px > this.x ){
     this.move(1, 0);
    }
  if (px < this.x){
     this.move(-1, 0);
    }
  else if(px == this.x){
    this.stop()
  }

  }
  
vfollow(py){
    
    if (py > this.y ){
     this.move(0, 1);
    }
    if (py < this.y){
     this.move(0, -1);
    }
    
   else if (py == this.y){
      this.stop()
    }

}
}