//let p = player
let bullets = []
class gun extends sprite{
constructor(){
  super(10, height/2, "red") 
  this.dmg = 50
  this.limit = 200
  this.width = 10;
  this.height = 10;
  this.onScreen = true;
}
  
  revolve(px,py){
    // let g = gun
    // let p = player
let mx = mouseX
let my = mouseY
let cx1 = mx + 5
let cx2 = mx - 5
let cy1 = my + 5
let cy2 = my - 5

    if(this.x < mx){
      this.x = (px + 25 + 2)
     // this.move(1,0)
    }
    if( this.x > mx){
      this.x = (px -25)
      //this.move(-1,0)
    }
    if(this.x <= cx1 && this.x >= cx2 ) {
      this.x = (px + 3)
    }
    if (this.y < my){
      this.y = (py + 25)
     // this.move(0,1)
    }
    if(this.y > my){
      this.y = py -25
      //this.move(0,-1)
    }
    if(this.y <= cy1 && this.y >= cy2) {
      this.y = (py - 3)
    }
     

  }
  
//   shoot(gx,gy,ex,ey){
//     if (mouseIsPressed == true){
//       let b = new bullet()
//       b.x = gx
//       b.y = gy
//       b.onScreen = true;
//       b.active = true;
//       b.draw()
//       b.update()

//       b.fire(ex,ey)
//       sprites.push(b)
//       bullets.push(b)
//       cartridge += 1

//     }
//   }
  

}