class emod extends enemy{
constructor(){
     super((width -10), (height * Math.random()),color)
  this.hp = 100
  this.width = 30
  this.height = 30
  this.SPEED = 2
  this.color = "green"
}
}