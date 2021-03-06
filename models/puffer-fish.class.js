/**
 * @class PufferFish
 * @extends Enemy
 */
class PufferFish extends Enemy{
    IMAGES_FLOATING = [
        "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png",
        "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png",
        "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png",
        "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png",
        "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png",
        "img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition1.png",
        "img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition2.png",
        "img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition3.png",
        "img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition4.png",
        "img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition5.png",
        "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png",
        "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png",
        "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png",
        "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png",
        "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png"
    ];
    IMAGES_DEAD = ["img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 1 (can animate by going up).png"]
    
    constructor(){
        super().loadImage("img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png");
        this.loadImages(this.IMAGES_FLOATING);
        this.loadImages(this.IMAGES_DEAD);
        this.animate();
    }

    /**
     * Play the animation of the fish moving.
     */
    animate(){
        this.moveLeft();
        setInterval(()=>{
            if(!this.dead){
                this.drawImages(this.IMAGES_FLOATING)
            }
        },200)
    }

}