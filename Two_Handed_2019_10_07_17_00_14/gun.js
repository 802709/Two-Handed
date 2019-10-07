//let p = player
let bullets = []
class gun extends sprite{
constructor(){
  super(10, height/2, "red") 
  this.dmg = 0
  this.mp = 0
  this.width = 10;
  this.height = 10;
  this.onScreen = true;
}
  
  revolve(px,py,gx,gy){
    // let g = gun
    // let p = player
let mx = mouseX
let my = mouseY
    if(gx > mx){
      gx = (px + 25 + 2)
    }
    if( gx < mx){
      gx = (px - 1)
    }
    if(gx == mx) {
      gx = (px + (25/2))
    }
    if (gy > my){
      gy = (py + 25 + 1)
    }
    if(gy < my){
      gy = py -1
    }
    if(gy == my) {
      gy = (py + (25/2))
    }
     

  }
  
  shoot(gx,gy,ex,ey){
    if (mouseIsPressed == true){
      b = new bullet()
  sprites.push(b)
      bullets.push(b)
      b.onScreen = true;
      b.active = true;
      b.draw()
      b.update()
      b.x = gx
      b.y = gy
    
      b.fire((b.x), (b.y), ex,ey)
    }
  }
  

}