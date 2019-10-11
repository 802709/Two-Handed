let cartridge
class bullet extends sprite{

constructor(){
   super(1000, 1000, "cyan") 
this.width = 5;
  this.height = 5;
  this.SPEED = 15
  this.dmg = 50
}
  
//   fire(ex,ey) {

//   for(var i = 0; i< cartridge.length; i++){ 
//    // bullets.filter(b => b.active).forEach(b=>{
//     let b = new bullet()
//     cartridge ++
//     b.draw()
//     b.update()
//     if(b.x < ex){
//     b.move(1,0)
//     }
//      if(b.x > ex){
//     b.move(-1,0)
//     }
//      if(b.y < ey){
//     b.move(0,1)
//     }
//      if(b.y > ey){
//     b.move(0,1)
//     }
    
//     if( b.x > 630 || b.x < -30){
//     b.onScreen = false;
//   }
//   if(b.y > 530 || b.y < -30){
//     b.onScreen = false;
// }
//     if( b.x > 630|| b.x <  -55){
//     b.die()
//       cartridge -= 1
//   }
//   if(b.y >  630 || b.y <  -55){
//     b.die()
//     cartridge -= 1
// }
//   //})
// }
//  // }
//  }
}

