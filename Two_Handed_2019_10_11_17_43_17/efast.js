class efast extends enemy{
constructor(){
     super((width -10), (height * Math.random()),color)
  this.hp = 10
  this.width = 18
  this.height = 18
  this.SPEED = 5
  this.color = "cyan"
}
}