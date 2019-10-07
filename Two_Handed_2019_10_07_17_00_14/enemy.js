class enemy extends sprite {
   constructor() {
    super((width -10), (height * Math.random()), "red")
     this.SPEED = 2
     let e = enemy
     this.hp = 100
     this.SPEED = 4
    //this.vx = -this.SPEED
  }
  
hfollow(px,ex,e){
 
    if (px < ex ){
     e.move(-1, 0);
    }
    if (px > ex ){
     e.move(1, 0);
    }
  
  
  // if(e.onScreen == false){
  //   e.SPEED = 10
  // }
  //  if(e.onScreen == true){
  //   e.SPEED = 3
  // }
  }
  
  vfollow(py,ey,e){
    
    if (py > ey ){
     e.move(0, 1);
    }
    if (py < ey){
     e.move(0, -1);
    }
//      if(e.onScreen == false){
//     e.SPEED = 10
//   }
//    if(e.onScreen == true){
//     e.SPEED = 3
// }
}
}