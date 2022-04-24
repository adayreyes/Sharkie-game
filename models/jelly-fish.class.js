/**
 * @class JellyFish 
 * @extends Enemy
 */
class JellyFish extends Enemy{

    IMAGES_STAYING = [
        "img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png",
        "img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png",
        "img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png",
        "img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png",
    ]
    IMG_DEAD = [
        "img/2.Enemy/2 Jelly fish/Dead/Lila/L1.png",
        "img/2.Enemy/2 Jelly fish/Dead/Lila/L2.png",
        "img/2.Enemy/2 Jelly fish/Dead/Lila/L3.png",
        "img/2.Enemy/2 Jelly fish/Dead/Lila/L4.png",
]
    constructor(){
        super().loadImage("img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png");
        this.loadImages(this.IMAGES_STAYING);
        this.loadImages(this.IMG_DEAD);
        this.animate();
    }
    animate(){
        this.moveLeft();
        if(!this.dead){
            setInterval(()=>{
                this.drawImages(this.IMAGES_STAYING)
            },150)
        }
    }
    
}