/**
 * @class Endboss
 * @extends MovableObject
 */
class Endboss extends MovableObject{
    x = 4000;
    y = 0;
    img = "img/2.Enemy/3 Final Enemy/2.floating/1.png";
    width = 400;
    height = 400;

    /**
     * Array with all appearing-images paths
     * @type {Array}
     */
    IMAGES_APPEARING = [
        "img/2.Enemy/3 Final Enemy/1.Introduce/1.png",
        "img/2.Enemy/3 Final Enemy/1.Introduce/2.png",
        "img/2.Enemy/3 Final Enemy/1.Introduce/3.png",
        "img/2.Enemy/3 Final Enemy/1.Introduce/4.png",
        "img/2.Enemy/3 Final Enemy/1.Introduce/5.png",
        "img/2.Enemy/3 Final Enemy/1.Introduce/6.png",
        "img/2.Enemy/3 Final Enemy/1.Introduce/7.png",
        "img/2.Enemy/3 Final Enemy/1.Introduce/8.png",
        "img/2.Enemy/3 Final Enemy/1.Introduce/9.png",
        "img/2.Enemy/3 Final Enemy/1.Introduce/10.png",
    ];
    IMAGES_STAYING = [
        "img/2.Enemy/3 Final Enemy/2.floating/1.png",
        "img/2.Enemy/3 Final Enemy/2.floating/2.png",
        "img/2.Enemy/3 Final Enemy/2.floating/3.png",
        "img/2.Enemy/3 Final Enemy/2.floating/4.png",
        "img/2.Enemy/3 Final Enemy/2.floating/5.png",
        "img/2.Enemy/3 Final Enemy/2.floating/6.png",
        "img/2.Enemy/3 Final Enemy/2.floating/7.png",
        "img/2.Enemy/3 Final Enemy/2.floating/8.png",
        "img/2.Enemy/3 Final Enemy/2.floating/9.png",
        "img/2.Enemy/3 Final Enemy/2.floating/10.png",
        "img/2.Enemy/3 Final Enemy/2.floating/11.png",
        "img/2.Enemy/3 Final Enemy/2.floating/12.png",
        "img/2.Enemy/3 Final Enemy/2.floating/13.png",
    ]
    constructor(){
        super().loadImage("img/2.Enemy/3 Final Enemy/1.Introduce/1.png");
        this.loadImages(this.IMAGES_STAYING);
        this.loadImages(this.IMAGES_APPEARING);
        this.animate();

    };

    /**
     * This function animates the {@link Endboss}
     */
    animate(){
        this.animateMovement();
    }
    /**
     * Draw a hitbox around the {@link Endboss}
     * @param {CanvasRenderingContext2D} ctx - Canvas Context
     */
     drawEndbossFrame(ctx){
        ctx.beginPath();
        ctx.lineWidth = "5";
        ctx.strokeStyle = "blue";
        ctx.rect(this.x+30,this.y+180,this.width-100,this.height-250);
        ctx.stroke();
    }
    hadFirstContact = false;
    
    /**
     * Draw the default-images every 150ms
     */
    animateMovement(){
        let i = 0;
        setTimeout(() => {
            setInterval(()=>{
                if(world.character.x > 3700){
                    if(i < 10 && !this.hadFirstContact){
                        this.drawImages(this.IMAGES_APPEARING)
                        this.hadFirstContact = true;
                        i++
                    }
                } else if(this.hadFirstContact){
                    this.drawImages(this.IMAGES_STAYING)
                }
            },150)
            
        }, 1000);
    }

}