class Boat{
    constructor(x,y,w,h){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        var option = {isStatic:true}
        this.body = Bodies.rectangle(this.x,this.y,this.w,this.h,option)
        World.add(world,this.body)
        this.image = loadImage("assets/boat.png")
    }
    display(){
        image(this.image,this.body.position.x,this.body.position.y,this.w,this.h)
    }
}