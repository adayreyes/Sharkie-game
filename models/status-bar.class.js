/**
 * Class for statusbars like health bar
 * @class Statusbar 
 * @extends MovableObject
 */
class Statusbar extends MovableObject {
    IMAGES_STAYING = [
        " img/4. Marcadores/green/Life/100_  copia 2.png",
        "img/4. Marcadores/green/Life/80_  copia 3.png",
        "img/4. Marcadores/green/Life/60_  copia 3.png",
        "img/4. Marcadores/green/Life/40_  copia 3.png",
        " img/4. Marcadores/green/Life/20_ copia 4.png",
        "img/4. Marcadores/green/Life/0_  copia 3.png"
    ]
    current_img = 0;
    width = 200;
    height = 50;
    x = -40;
    
    
    constructor(y){
        super().loadImage(" img/4. Marcadores/green/Life/100_  copia 2.png");
        this.loadImages(this.IMAGES_STAYING);
        this.y = y;
    
    }

    /* animate(){
        setInterval(()=>{
            this.drawImages(this.STATUS_IMAGES)
        },250)
    } */
}