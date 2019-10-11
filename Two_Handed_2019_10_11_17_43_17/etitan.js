class etitan extends enemy{
constructor(){
     super((width -10), (height * Math.random()),color)
  this.hp = 250
  this.width = 50
  this.height = 50
  this.SPEED = 1
  this.color = "orange"
}
}