
class bullet extends sprite{

constructor(){
   super(1000, 1000, "cyan") 
this.width = 5;
  this.height = 5;
  this.SPEED = 15
}
  
  fire(bx,by,ex,ey) {

  // for(var i = 0; i< bullets.length; i++){ 
    bullets.filter(b => b.active).forEach(b=>{
    if(bx < ex){
    b.move(1,0)
    }
     if(bx > ex){
    b.move(-1,0)
    }
     if(by < ey){
    b.move(0,1)
    }
     if(by > ey){
    b.move(0,1)
    }
    
    if( bx > 630 || bx < -30){
    b.onScreen = false;
  }
  if(by > 530 || by < -30){
    b.onScreen = false;
}
    if( bx > 630|| bx <  -55){
    b.die()
  }
  if(by >  630 || by <  -55){
    b.die()
}
  })
}
 // }
}

