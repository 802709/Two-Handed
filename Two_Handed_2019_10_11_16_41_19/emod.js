class emod extends enemy{
constructor(){
     super((width -10), (height * Math.random()),color)
  this.hp = 150
  this.width = 25
  this.height = 25
  this.SPEED = 2
  this.color = "green"
}
}