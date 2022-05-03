/**
 * @class Coin
 * @extends StaticObject
 */
class Coin extends StaticObject{
    width = 40;
    height = 40;
    x = 200 + Math.random() * 5000;
    y = 400 - Math.random() * 400;
    IMAGES = [
        "img/4. Marcadores/1. Coins/1.png",
        "img/4. Marcadores/1. Coins/2.png",
        "img/4. Marcadores/1. Coins/3.png",
        "img/4. Marcadores/1. Coins/4.png"
    ];
    
    constructor(){
        super().loadImage(this.IMAGES[0]);
        this.loadImages(this.IMAGES);
        this.animate();
    };

    /**
     * Play the animation of the coin floating.
     */
    animate(){
        setInterval(()=>{
            this.drawImages(this.IMAGES)
        },250)
    }
}
