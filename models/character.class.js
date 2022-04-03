/**
 * @class Character
 * @extends MovableObject
 */
class Character extends MovableObject{
    x = -40;
    y = 60;
    width = 300;
    speed = 10;
    height = 300;
    world;
    IMAGES_STAYING = ["img/1.Sharkie/3.Swim/1.png",
    "img/1.Sharkie/3.Swim/2.png",
    "img/1.Sharkie/3.Swim/3.png",
    "img/1.Sharkie/3.Swim/4.png",
    "img/1.Sharkie/3.Swim/5.png",
    "img/1.Sharkie/3.Swim/6.png"];
    /**
     * Array with all the dead-images paths
     * @type {Array}
     */
    IMAGES_DEAD = [
        "img/1.Sharkie/6.dead/1.Poisoned/1.png",
        "img/1.Sharkie/6.dead/1.Poisoned/2.png",
        "img/1.Sharkie/6.dead/1.Poisoned/3.png",
        "img/1.Sharkie/6.dead/1.Poisoned/4.png",
        "img/1.Sharkie/6.dead/1.Poisoned/5.png",
        "img/1.Sharkie/6.dead/1.Poisoned/6.png",
        "img/1.Sharkie/6.dead/1.Poisoned/7.png",
        "img/1.Sharkie/6.dead/1.Poisoned/8.png",
        "img/1.Sharkie/6.dead/1.Poisoned/9.png",
        "img/1.Sharkie/6.dead/1.Poisoned/10.png",
        "img/1.Sharkie/6.dead/1.Poisoned/11.png",
        "img/1.Sharkie/6.dead/1.Poisoned/12.png",
    ]
    /**
     * Array with all the hurt-images paths
     * @type {Array}
     */
    IMAGES_HURT = [
        "img/1.Sharkie/5.Hurt/1.Poisoned/1.png",
        "img/1.Sharkie/5.Hurt/1.Poisoned/2.png",
        "img/1.Sharkie/5.Hurt/1.Poisoned/3.png",
        "img/1.Sharkie/5.Hurt/1.Poisoned/4.png",
        "img/1.Sharkie/3.Swim/1.png"
    ]
    /**
     * Audio that is played when Sharkie is swimming.
     * @type {Audio}
     */
    swimming_sound = new Audio("audio/swimming.mp3");

    constructor(){
        super().loadImage("img/1.Sharkie/3.Swim/1.png");
        this.loadImages(this.IMAGES_STAYING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.animate();
    }
    
    /**
     * This function animate Sharkie
     */
    animate(){
        this.moveCharacter();
        this.animateMovement();
    } 

    /**
     * Move Sharkie around the map and plays {@link Character#swimming_sound}
     */
    moveCharacter(){
        setInterval(()=>{
            
            if(this.world.keyboard.RIGHT && this.x < 4300){
                this.other_direction = false;
                this.x += this.speed;
                this.world.level.statusbars.forEach(element => {
                    element.x += this.speed
                });
                this.swimming_sound.play();
            }
            if(this.world.keyboard.LEFT && this.x > -700){
                this.other_direction = true;
                this.x -= this.speed;
                this.world.level.statusbars.forEach(element => {
                    element.x -= this.speed
                });
                this.swimming_sound.play();
 
            }
            if(this.world.keyboard.UP && this.y > -140){
                this.y -= this.speed;
                this.swimming_sound.play();
 
            }
            if(this.world.keyboard.DOWN && this.y < 250){
                this.y += this.speed;
                this.swimming_sound.play();
 
            }
            this.world.camera_x = -this.x;
        }, 1000/60)
    }

     /**
     * Check if Sharkie is moving, hurt or dead and draw the respective images.
     */
    animateMovement(){
        setInterval(()=>{
            if(this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN){
                this.drawImages(this.IMAGES_STAYING)
            } else if(this.dead == true){
                this.drawImages(this.IMAGES_DEAD)
            } else if(this.isHurt()){
                this.drawImages(this.IMAGES_HURT);
            }
        },150)
    }
}

