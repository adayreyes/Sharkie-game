/**
 * @class Character
 * @extends MovableObject
 */
class Character extends MovableObject{
    x = -40;
    y = 60;
    width = 300;
    speed = 5;
    height = 300;
    world;
    IMAGES_SWIMMING = ["img/1.Sharkie/3.Swim/1.png",
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
    IMAGES_STAYING = [
        "img/1.Sharkie/1.IDLE/1.png",
        "img/1.Sharkie/1.IDLE/2.png",
        "img/1.Sharkie/1.IDLE/3.png",
        "img/1.Sharkie/1.IDLE/4.png",
        "img/1.Sharkie/1.IDLE/5.png",
        "img/1.Sharkie/1.IDLE/6.png",
        "img/1.Sharkie/1.IDLE/7.png",
        "img/1.Sharkie/1.IDLE/8.png",
        "img/1.Sharkie/1.IDLE/9.png",
        "img/1.Sharkie/1.IDLE/10.png",
        "img/1.Sharkie/1.IDLE/11.png",
        "img/1.Sharkie/1.IDLE/12.png",
        "img/1.Sharkie/1.IDLE/13.png",
        "img/1.Sharkie/1.IDLE/14.png",
        "img/1.Sharkie/1.IDLE/15.png",
        "img/1.Sharkie/1.IDLE/16.png",
        "img/1.Sharkie/1.IDLE/17.png",
        "img/1.Sharkie/1.IDLE/18.png",
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
    ]

    IMAGES_SHOCK = [
        "img/1.Sharkie/5.Hurt/2.Electric shock/1.png",
        "img/1.Sharkie/5.Hurt/2.Electric shock/2.png",
        "img/1.Sharkie/5.Hurt/2.Electric shock/3.png"
    ]
    IMAGES_ATTACK = [
        "img/1.Sharkie/4.Attack/Fin slap/1.png",
        "img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png",
        "img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/2.png",
        "img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/3.png",
        "img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/4.png",
        "img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/5.png",
        "img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/6.png",
        "img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/7.png",
        "img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/8.png"
       
        
    ];
    IMAGES_SLAPPING = [
        "img/1.Sharkie/4.Attack/Fin slap/1.png",
        "img/1.Sharkie/4.Attack/Fin slap/2.png",
        "img/1.Sharkie/4.Attack/Fin slap/3.png",
        "img/1.Sharkie/4.Attack/Fin slap/4.png",
        "img/1.Sharkie/4.Attack/Fin slap/5.png",
        "img/1.Sharkie/4.Attack/Fin slap/6.png",
        "img/1.Sharkie/4.Attack/Fin slap/7.png",
        "img/1.Sharkie/4.Attack/Fin slap/8.png"
    ]
    IMAGES_KILLED = [
        "img/1.Sharkie/6.dead/2.Electro_shock/7.png",
        "img/1.Sharkie/6.dead/2.Electro_shock/8.png",
        "img/1.Sharkie/6.dead/2.Electro_shock/9.png",
        "img/1.Sharkie/6.dead/2.Electro_shock/10.png"
    ]
    isMoving = false;
    killed = false;
    /**
     * Audio that is played when Sharkie is swimming.
     * @type {Audio}
     */
    swimming_sound = new Audio("audio/swimming.mp3");

    constructor(){
        super().loadImage("img/1.Sharkie/3.Swim/1.png");
        this.loadImages(this.IMAGES_SWIMMING);
        this.loadImages(this.IMAGES_STAYING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_SHOCK);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_SLAPPING);
        this.loadImages(this.IMAGES_KILLED);
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
     * Check if the hitbox from Sharkie is colliding with the hitbox from the enemies.
     * @param {object} mo - {@link MovableObject}. 
     * @returns {boolean}
     */
     sharkieIsColliding(mo){
        return this.x+70 + this.width-150 > mo.x && this.y+160 + this.height-250 > mo.y && this.x+70 < mo.x && this.y+160 < mo.y + mo.height 
    }
    
    sharkieIsInRange(mo){
        return this.x + this.width > mo.x && this.y+160 + this.height-250 > mo.y && this.x < mo.x && this.y+160 < mo.y + mo.height
    }

    /**
     * Move Sharkie around the map and plays {@link Character#swimming_sound}
     */
    moveCharacter(){
        let interval = setInterval(()=>{
            if(!this.dead && !this.isSlapping() && !this.killed){
                this.moveAnimationRight();
                this.moveAnimationLeft();
                this.moveAnimationUp();
                this.moveAnimationDown(); 
                this.world.camera_x = -this.x;
            }
        }, 1000/60)
    }

    moveAnimationRight(){
        if(this.world.keyboard.RIGHT && this.x < 4300){
            this.other_direction = false;
            this.x += this.speed;
            this.world.level.statusbars.forEach(element => {
                element.x += this.speed
            });
            /* this.swimming_sound.play(); */
        }
    }
    
    moveAnimationLeft(){
        if(this.world.keyboard.LEFT && this.x > -700){
            this.other_direction = true;
            this.x -= this.speed;
            this.world.level.statusbars.forEach(element => {
                element.x -= this.speed
            });
            /* this.swimming_sound.play(); */

        }
    }

    moveAnimationUp(){
        if(this.world.keyboard.UP && this.y > -140){
            this.y -= this.speed;
            /* this.swimming_sound.play(); */
        }
    }

    moveAnimationDown(){
        if(this.world.keyboard.DOWN && this.y < 250){
            this.y += this.speed;
            /* this.swimming_sound.play(); */
        }
    }

     /**
     * Check if Sharkie is moving, hurt or dead and draw the respective images.
     */
    animateMovement(){
        setInterval(() => {
            if(!this.dead && !this.killed){
                this.hurtAnimation();
                this.stayAnimation();
            }
            if(this.dead){
                this.deadAnimation();  
            }
            if(this.killed){
                this.killedAnimation();
            }
        }, 200);
        setInterval(() => {
            if(!this.dead && !this.killed){
                this.moveAnimation();
                this.attackAnimation();
            }
        }, 100); 
    }

    moveAnimation(){
        if(this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN){
            if(!this.isHurt() && !this.isElectrocuted()){
                this.drawImages(this.IMAGES_SWIMMING);
                this.isMoving = true;
            }
        } else{
            this.isMoving = false;
        }
    }

    attackAnimation(){
        if(this.isAttacking()){
            this.drawAttackImages(this.IMAGES_ATTACK);
        } else if(this.isSlapping()){
            this.drawAttackImages(this.IMAGES_SLAPPING);
        } else{
            this.current_attack_img = 0;

        }
    }

    hurtAnimation(){
        if(this.isHurt() && !this.isSlapping()){
            this.drawImages(this.IMAGES_HURT); 
         }
         else if(this.isElectrocuted() && !this.isSlapping()){
             this.drawImages(this.IMAGES_SHOCK);
            
         }
    }
    stayAnimation(){
        if(!this.isMoving && !this.dead && !this.killed && !this.isAttacking() && !this.isHurt() && !this.isElectrocuted() && !this.isSlapping()){
            this.drawImages(this.IMAGES_STAYING)
        }
    }
    deadAnimation(){
            if(!this.stop){
                this.drawImages(this.IMAGES_DEAD);
            }
            setTimeout(() => {
                this.stop = true;
                this.loadImage("img/1.Sharkie/6.dead/1.Poisoned/12.png")
            }, 1000);
    }

    killedAnimation(){
        if(!this.stop){
            this.drawImages(this.IMAGES_KILLED);
            if(this.y < 150){
                this.y += 30
            }
            if(this.y > 200){
                this.y -= 30
            }
        }
        setTimeout(() => {
            this.stop = true;
            this.loadImage("img/1.Sharkie/6.dead/2.Electro_shock/10.png")
        }, 500);
    }
}

