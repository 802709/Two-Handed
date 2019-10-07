let sprites = []
let enemies = []
let ticks 
//let e

function setup() {
  createCanvas(600, 500);
noStroke()
  
  p = new player();
  p.x = 10
  p.y = 10
  p.color = "blue"
  sprites.push(p);
  p.onScreen = true;
  
  g = new gun()
  g.color = "red"
  g.x = 10
  g.y = 10
  sprites.push(g)
  g.onScreen = true
  
  ticks = 0
  
  mx = mouseX
  my = mouseY
  
 for (let i = 0; i < 10; i++){
      e = new enemy()
      e.x = Math.random() * 500 + 300
      e.y = Math.random() * 500 + 300
      e.active = true
      sprites.push(e)
      enemies.push(e)
    
   }
  
  if (ticks == 1000){
    ticks = 0
}
}



function draw() {
  background(15);
  
   
   sprites.filter(sprite => sprite.active && sprite.onScreen).forEach(sprite => {
    sprite.update()
    sprite.draw()
    sprite.wallCols(sprite)
  })
  
   sprites.filter(sprite => sprite.active).forEach(sprite => {
    sprite.update()
    sprite.draw()
  })
 checkCols()
  
  ticks++
  
  if (ticks == 600){
    ticks = 0
}
  
  if (ticks == 0){
    for (let i = 0; i < 10; i++){
    
     e = new enemy()      
     sprites.push(e)
      enemies.push(e)
      e.x = Math.random() * 500 
      e.y = Math.random() * 500 
      e.active = true

  }
  }
  
   mx = mouseX
  my = mouseY

   if (p.hp <= 0) {
     p.die() 
     g.die()
    console.log("Game Over")
    }
  //while (p.active == true){
  //g.revolve((p.x), (p.y), (g.x), (g.y))
  //}
  
   if(mouseIsPressed == false){
    cursor(CROSS)
  }
  if(mouseIsPressed == true){
    noCursor()
   // g.shoot((g.x),(g.y),(e.x),(e.y))
  }
 
  enemies.filter(e => e.active).forEach(e=>{
    e.hfollow((p.x), (e.x), e)
    e.vfollow((p.y), (e.y), e)
  })
}


function keyPressed(){
 p.keyPressed(); 
}

function keyReleased() {
  p.stop()
}

function checkCols() { 
  let e = enemies.filter(e => e.active).forEach(e=>{
  if(e.active && checkCC(e.x,e.y,e.width, p.x, p.y,p.width,10) ){
     p.hp -= 1
    console.log(p.hp)
    if (p.hp <= 0) {
     p.die() 
      g.die()
    console.log("Game Over")
    }
     }
})
  }



function checkCC(x, y,d, x2, y2, d2, b = 0) {
  if( dist(x,y,x2,y2) <= (d/2)+(d2/2) + b){
    return true;
  }
  return false;
}


