/**
 * @class JellyFish 
 * @extends Enemy
 */
class JellyFish extends Enemy{

    IMAGES_FLOATING = [
        "img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png",
        "img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png",
        "img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png",
        "img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png",
    ]
    IMAGES_DEAD = [
        "img/2.Enemy/2 Jelly fish/Dead/Lila/L1.png",
        "img/2.Enemy/2 Jelly fish/Dead/Lila/L2.png",
        "img/2.Enemy/2 Jelly fish/Dead/Lila/L3.png",
        "img/2.Enemy/2 Jelly fish/Dead/Lila/L4.png",
]
    constructor(){
        super().loadImage("img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png");
        this.loadImages(this.IMAGES_FLOATING);
        this.loadImages(this.IMAGES_DEAD);
        this.animate();
    }
    
    /**
     * Play the animation of the fish moving.
     */
    animate(){
        this.moveLeft();
        if(!this.dead){
            setInterval(()=>{
                this.drawImages(this.IMAGES_FLOATING)
            },150)
        }
    }
    
}