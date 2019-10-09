let sprites = []
let enemies = []
let emods = []
let ticks 
let cartridge
let power
let LOOPSPEED
let slider

function setup() {
  createCanvas(600, 500);
noStroke()
  
    LOOPSPEED = 350
  
  p = new player();
  p.x = 10
  p.y = 10
  p.color = "blue"
  sprites.push(p);
  p.onScreen = true;
  
  g = new gun();
  g.x = 10
  g.y = 10
  g.color = "cyan"
  sprites.push(g)
  g.onScreen = true
   
  slider = createSlider(50,g.limit, 50,0)
  slider.position(0, 525);
  slider.style('width', '170px');
  
  ticks = 0
  
  mx = mouseX
  my = mouseY
  
 for (let i = 0; i < 10; i++){
     let e = new enemy()
      e.x = Math.random() * 500 + 300
      e.y = Math.random() * 500 + 300
      e.active = true
      sprites.push(e)
      enemies.push(e)
    
   }
  

  if (ticks == LOOPSPEED){
    ticks = 0
}
  
    power = g.dmg
    displayPower()
  displayHP()
  
}



function draw() {
  background(15);
  g.revolve(p.x, p.y, g.x, g.y)
  
   var val = slider.value();
  g.dmg = val
  
   sprites.filter(sprite => sprite.active).forEach(sprite => {
    sprite.update()
    sprite.draw()
  })
   
   sprites.filter(sprite => sprite.active && sprite.onScreen).forEach(sprite => {
    sprite.update()
    sprite.draw()
    sprite.wallCols(sprite)
  })
  
 checkCols()  
  ticks++
  
  if (ticks == LOOPSPEED){
    ticks = 0
}
  
  if (ticks == 0){
    for (let i = 0; i < 5; i++){ 
    let e = new enemy()      
      e.x = Math.random() * 500 
      e.y = Math.random() * 500 + 1000
      e.active = true
      e.draw()
      e.update()
       e.hfollow(p.x)
      e.vfollow(p.y)
      if (e.onScreen == true){
       e.wallCols() 
      }
       sprites.push(e)
      enemies.push(e)
  }
  //   for (let i = 0; i < 10; i++){ 
  //   let e = new emod()      
  //    sprites.push(e)
  //     emods.push(e)
  //     enemies.push(e)
  //     e.x = Math.random() * 500 + 1000
  //     e.y = Math.random() * 500 + 1000
  //     e.active = true
  // }
  }
  
   mx = mouseX
  my = mouseY

   if (p.hp <= 0) {
     p.die() 
     g.die()
    console.log("Game Over")
    }
  
   if(mouseIsPressed == false){
    cursor(CROSS)
  }
  if(mouseIsPressed == true){
    noCursor()
   // g.shoot((g.x),(g.y),(e.x),(e.y))
  }
 
  enemies.filter(e => e.active).forEach(e=>{
    e.hfollow(p.x)
    e.vfollow(p.y)
    if(e.hp <= 0){
      e.die()
    }
    if(mouseIsPressed == false){
     e.color = "red" 
    }
  })
  
  mouseWheel()
  power = g.dmg
  g.limit++
  if (g.limit >= 200){
    g.limit = 200
  }
  if (power >= g.limit){
    power = g.limit
  }
}


function keyPressed(){
 p.keyPressed(); 
 
}

function keyReleased() {
  p.stop()
  //g.revolve(p.x, p.y, g.x, g.y)
}


function mouseClicked(){
   enemies.filter(e => e.active).forEach(e=>{
  if (dist(e.x, e.y, mouseX, mouseY ) <= e.width / 2){
  shoot()
    e.hp -= g.dmg
    e.color = "white"
}
   })
}

 
 function shoot(){
    if (mouseIsPressed == true){
      let b = new bullet()
      cartridge += 1
      sprites.push(b)
      bullets.push(b)
    }
   bullets.filter(b => b.active).forEach(b => {
   b.x = g.x
      b.y = g.y
      b.onScreen = true;
      b.active = true;
      b.draw()
      b.update()
 enemies.filter(e => e.active).forEach(e=>{
      b.fire(e.x,e.y)
 })
     g.limit = (g.limit - power)
   })
  }

function mouseReleased(){
  enemies.filter(e => e.active).forEach(e=>{
    e.color = "red"
    })
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
      displayOver()
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

function displayOver(){
  var gm = createInput('Game Over')
}

function displayPower(pow){
  mouseWheel()
  pow = power
 createInput("Power: " + pow + "")
}
function displayHP(hp){
  hp = p.hp
 createInput("HP: " + hp + "")
}

 function mouseWheel(){
   let sl = slider.value
   sl += 2
   if(sl >= g.limit){
     sl = g.limit
   }
 }

// function keyPressed(){
//   if((key == 'p')){ 
//   p.stop()
//     p.hp = p.hp
//      g.stop()
//  let e = enemies.filter(e => e.active).forEach(e=>{
//     e.stop()
//    e.hp = e.hp
//  })
//     let b = bullets.filter(b => b.active).forEach(b=>{
//     b.stop()
//  })
// }

// }



