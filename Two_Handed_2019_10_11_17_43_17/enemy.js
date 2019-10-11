class enemy extends sprite {
   constructor() {
    super((width -10), (height * Math.random()), color)
     this.hp = 50
     this.SPEED = 3
     this.color = "red"
    //this.vx = -this.SPEED
  }
  
hfollow(px){
 
    
    if (px > this.x ){
     this.vx = 1 * this.SPEED;
    }
  if (px < this.x){
     this.vx = -1 * this.SPEED;
    }
  else if(px == this.x){
    this.vx = 0
  }

  }
  
vfollow(py){
    
    if (py > this.y ){
     this.vy = 1 * this.SPEED;
    }
    if (py < this.y){
    this.vy = -1 * this.SPEED;
    }
    
   else if (py == this.y){
      this.vy = 0
    }

}
}