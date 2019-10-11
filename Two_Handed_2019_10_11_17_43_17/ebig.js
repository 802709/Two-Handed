class ebig extends enemy{
constructor(){
     super((width -10), (height * Math.random()),color)
  this.hp = 150
  this.width = 40
  this.height = 40
  this.SPEED = 2
  this.color = "magenta"
}
}