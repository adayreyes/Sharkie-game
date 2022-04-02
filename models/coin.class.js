/**
 * @class Coin
 * @extends MovableObject
 */
class Coin extends MovableObject{
    width = 40;
    height = 40;
    x = 200 + Math.random() * 5000;
    y = 400 - Math.random() * 400;
    IMAGES_STAYING = [
        "img/4. Marcadores/1. Coins/1.png",
        "img/4. Marcadores/1. Coins/2.png",
        "img/4. Marcadores/1. Coins/3.png",
        "img/4. Marcadores/1. Coins/4.png",
    ]
    constructor(){
        super().loadImage("img/4. Marcadores/1. Coins/1.png");
        this.loadImages(this.IMAGES_STAYING);
        this.animate();
    }
    animate(){
        setInterval(()=>{
            this.drawImages(this.IMAGES_STAYING)
        },250)
    }
}
