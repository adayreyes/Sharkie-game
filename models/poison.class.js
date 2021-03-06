/**
 * @class Poison 
 * @extends StaticObject
 */
class Poison extends StaticObject{
    width = 60;
    height = 80;
    y = 400 - Math.random() * 400;
    x = 200 + Math.random() * 5000;
    IMAGES = [
        "img/4. Marcadores/Posión/Animada/1.png",
        "img/4. Marcadores/Posión/Animada/2.png",
        "img/4. Marcadores/Posión/Animada/3.png",
        "img/4. Marcadores/Posión/Animada/4.png",
        "img/4. Marcadores/Posión/Animada/5.png",
        "img/4. Marcadores/Posión/Animada/6.png",
        "img/4. Marcadores/Posión/Animada/7.png",
        "img/4. Marcadores/Posión/Animada/8.png",
    ]
    constructor(){
        super().loadImage(this.IMAGES[0]);
        this.loadImages(this.IMAGES);
        this.animate();
    }

     /**
     * Play the animation of the poison floating.
     */
    animate(){
        setInterval(()=>{
            this.drawImages(this.IMAGES)
        },200)
    }

}