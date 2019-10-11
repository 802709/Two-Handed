class efast extends enemy{
constructor(){
     super((width -10), (height * Math.random()),color)
  this.hp = 10
  this.width = 20
  this.height = 20
  this.SPEED = 5
  this.color = "cyan"
}
}