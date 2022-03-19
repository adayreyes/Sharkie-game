class JellyFish extends MovableObject{
    x = 200 + Math.random() * 500;
    y = 400 - Math.random() * 400;
    width = 50;
    height = 50;
    constructor(){
        super().loadImage("img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png")
    }
}