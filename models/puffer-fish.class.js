class PufferFish extends MovableObject{
    x = 200 + Math.random() * 500;
    y = 400 - Math.random() * 400;
    width = 60;
    height = 60;
    
    constructor(){
        super().loadImage("img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png");
    }
}