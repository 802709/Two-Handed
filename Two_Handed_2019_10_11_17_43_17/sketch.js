let sprites = []
let enemies = []
let emods = []
let efs = []
let ebigs = []
let etitans = []
let ticks 
let LOOP
let loopcount
let slider
let inp
let inp2
let event

function setup() {
  createCanvas(600, 500);
noStroke()
  
  
  LOOP = 500
  loopcount = 0
  
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
  
  
  inp = createInput('');
  inp2 = createInput('');
  
   
  slider = createSlider(50,g.limit, 50,0)
  slider.position(0, 525);
  slider.style('width', '170px');
  
  ticks = 0
  
  mx = mouseX
  my = mouseY
  
 for (let i = 0; i < 9; i++){
     let e = new enemy()
      e.x = Math.random() * 300 + Math.random() * 100 + 100
      e.y = Math.random() * 300 + Math.random() * 100 + 100
      e.active = true
      sprites.push(e)
      enemies.push(e)
    
   }
  if (ticks == LOOP){
    ticks = 0
}

  
}



function draw() {
  background(15);
  g.revolve(p.x, p.y, g.x, g.y)
  
   inp.input(displayPower);
   inp2.input(displayHP);  
 
  
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
  
  if (ticks == LOOP){
    ticks = 0
}
  if (ticks ==0){
    loopcount++
  }
  
  if (ticks == 0){
    for (let i = 0; i < 4; i++){ 
    let e = new enemy() 
    let em = new emod()
      e.x = Math.random() * 600 
      e.y = Math.random() * 600 + 1000
      e.active = true
      e.draw()
      e.update()
     if (p.y != e.y){
        e.vfollow(p.y)
      }
      if (p.y == e.y){
        e.hfollow(p.x)
      }
      
      if (e.onScreen == true){
       e.wallCols() 
      }
      sprites.push(e)
      enemies.push(e)
      
      
      for (let i = 0; i < 3; i++){ 
        em.x = Math.random() * 600
      em.y = Math.random() * 600 + 1000
      em.active = true
      em.color = "green"
      em.draw()
      em.update()
     if (p.y != em.y){
        em.vfollow(p.y)
      }
      if (p.y == e.y){
        em.hfollow(p.x)
      }
      }

      sprites.push(em)
      enemies.push(em)
      emods.push(em)
  }
  }
  
  if(ticks == 0 && loopcount >= 3){
    let em = new efast()
    for (let i = 0; i < 5; i++){ 
        em.x = Math.random() * 600
      em.y = Math.random() * 600 + 1000
      em.active = true
        em.color = "cyan"
      em.draw()
      em.update()
       if (p.y != em.y){
        em.vfollow(p.y)
      }
      if (p.y == em.y){
        em.hfollow(p.x)
      }
      }
       sprites.push(em)
      enemies.push(em)
      efs.push(em)
  }
  
  if(ticks == 0 && loopcount >= 5){
    let em = new ebig()
    for (let i = 0; i < 5; i++){ 
        em.x = Math.random() * 600
      em.y = Math.random() * 600 + 1000
      em.active = true
        em.color = "magenta"
      em.draw()
      em.update()
       if (p.y != em.y){
        em.vfollow(p.y)
      }
      if (p.y == em.y){
        em.hfollow(p.x)
      }
      }
       sprites.push(em)
      enemies.push(em)
      ebigs.push(em)
  }
  
  if(ticks == 0 && loopcount >= 7){
    let em = new etitan()
    for (let i = 0; i < 5; i++){ 
        em.x = Math.random() * 600
      em.y = Math.random() * 600 + 1000
      em.active = true
        em.color = "orange"
      em.draw()
      em.update()
       if (p.y != em.y){
        em.vfollow(p.y)
      }
      if (p.y == em.y){
        em.hfollow(p.x)
      }
      }
       sprites.push(em)
      enemies.push(em)
      etitans.push(em)
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
  }
 
  enemies.filter(e => e.active).forEach(e=>{
  if (p.y != e.y){
        e.vfollow(p.y)
      }
      if (p.y == e.y){
        e.hfollow(p.x)
      }
    if(e.hp <= 0){
      e.die()
    }
    if(mouseIsPressed == false){
     e.color = e.color
    }
  })
  
    mouseWheel()
   var val = slider.value();
    bullets.filter(b => b.active).forEach(b=>{
  b.dmg = val
    })

  g.limit++
  if (g.limit >= 200){
    g.limit = 200
  }
    bullets.filter(b => b.active).forEach(b=>{
  if (b.dmg >= g.limit){
    b.dmg = g.limit
  }
    })
}


function keyPressed(){
 p.keyPressed(); 
 
}

function keyReleased() {
  p.stop()
}


function mouseClicked(){
 shoot(mouseX, mouseY)
  enemies.filter(e => e.active).forEach(e=>{
  //bullets.filter(b => b.active).forEach(b=>{
if (dist(e.x, e.y, mouseX, mouseY ) <= e.width / 2){
    e.hp -= g.dmg
    //e.hp-=50
    e.color = "white"
  p.hp += 5
   // b.die()
}
   })
   // })
}

 
 function shoot(mx,my){
    if (mouseIsPressed == true){
        cartridge += 1
  for(var i = 0; i< cartridge.length; i++){ 
      let b = new bullet()
      sprites.push(b)
      bullets.push(b)
      b.draw()
      b.update()
      b.x = g.x
      b.y = g.y
      b.onScreen = true;
      b.active = true;
      g.limit = (g.limit - b.dmg)
    
    if(b.x < mx){
    b.move(1,0)
    }
     if(b.x > mx){
    b.move(-1,0)
    }
     if(b.y < my){
    b.move(0,1)
    }
     if(b.y > my){
    b.move(0,1)
    }
    if( b.x > 630 || b.x < -30){
    b.onScreen = false;
  }
  if(b.y > 530 || b.y < -30){
    b.onScreen = false;
}
    if( b.x > 630|| b.x <  -55){
    b.die()
      cartridge -= 1
  }
  if(b.y >  630 || b.y <  -55){
    b.die()
    cartridge -= 1
}
}
}
}


function mouseReleased(){
  enemies.filter(e => e.active).forEach(e=>{
    e.color = "red"
    })
  emods.filter(e => e.active).forEach(e=>{
    e.color = "green"
    })
  efs.filter(e => e.active).forEach(e=>{
    e.color = "cyan"
    })
    ebigs.filter(e => e.active).forEach(e=>{
    e.color = "magenta"
    })
    etitans.filter(e => e.active).forEach(e=>{
    e.color = "orange"
    })
}

function checkCols() { 
  let e = enemies.filter(e => e.active).forEach(e=>{
  if(e.active && checkCC(e.x,e.y,e.width, p.x, p.y,p.width,0) ){
     p.hp -= 1
    console.log(p.hp)
    // console.log(displayHP)
    inp2.input(displayHP)
    if (p.hp <= 0) {
     p.die() 
      g.die()
    console.log("Game Over")
      displayOver()
    }
     }
})
   let et = etitans.filter(et => et.active).forEach(et=>{
  if(et.active && checkCC(et.x,et.y,et.width, p.x, p.y,p.width,0) ){
     p.hp -= 2
    console.log(p.hp)
    // console.log(displayHP)
    inp2.input(displayHP)
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
  createInput('Game Over')
}

function displayPower(){
  mouseWheel()
   bullets.filter(b => b.active).forEach(b=>{
  let dmg = b.dmg
 console.log('Power: ', this.dmg)
})
}

function displayHP(){
 let hp = p.hp
 console.log('HP: ', this.hp)
}

 function mouseWheel(event){
     event = new WheelEvent(mouseWheel)
   let sl = slider.value()
   //print(event.delta)
   sl += event.delta
   if(sl >= g.limit){
     sl = g.limit
   }
   return false
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



