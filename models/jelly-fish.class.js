class JellyFish extends MovableObject{
    x = 800 + Math.random() * 5000;
    y = 400 - Math.random() * 400;
    width = 60;
    height = 60;
    IMAGES_STAYING = [
        "img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png",
        "img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png",
        "img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png",
        "img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png",
]
    constructor(){
        super().loadImage("img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png");
        this.loadImages(this.IMAGES_STAYING);
        this.animate();
    }
    animate(){
        this.moveLeft();
        setInterval(()=>{
            this.drawImages(this.IMAGES_STAYING)
        },150)
    }
    
}