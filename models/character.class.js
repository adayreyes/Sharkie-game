/**
 * @class Character
 * @extends MovableObject
 */
class Character extends MovableObject{
    x = -40;
    y = 60;
    width = 300;
    speed = 4;
    height = 300;
    world;

    IMAGES_SWIMMING = ["img/1.Sharkie/3.Swim/1.png",
    "img/1.Sharkie/3.Swim/2.png",
    "img/1.Sharkie/3.Swim/3.png",
    "img/1.Sharkie/3.Swim/4.png",
    "img/1.Sharkie/3.Swim/5.png",
    "img/1.Sharkie/3.Swim/6.png"];
    
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
    ];

    IMAGES_FLOATING = [
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
    ];

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
   
    IMAGES_HURT = [
        "img/1.Sharkie/5.Hurt/1.Poisoned/1.png",
        "img/1.Sharkie/5.Hurt/1.Poisoned/2.png",
        "img/1.Sharkie/5.Hurt/1.Poisoned/3.png",
        "img/1.Sharkie/5.Hurt/1.Poisoned/4.png",
    ];

    /**
     * Array with all image paths for the hurt animation.
     * @see {@link Character#hurtAnimation}.
     * @type {Array}
     */
    IMAGES_SHOCK = [
        "img/1.Sharkie/5.Hurt/2.Electric shock/1.png",
        "img/1.Sharkie/5.Hurt/2.Electric shock/2.png",
        "img/1.Sharkie/5.Hurt/2.Electric shock/3.png"
    ];

    /**
     * Array with all image paths for the slap animation.
     * @see {@link Character#attackAnimation}.
     * @type {Array}
     */
    IMAGES_SLAPPING = [
        "img/1.Sharkie/4.Attack/Fin slap/1.png",
        "img/1.Sharkie/4.Attack/Fin slap/2.png",
        "img/1.Sharkie/4.Attack/Fin slap/3.png",
        "img/1.Sharkie/4.Attack/Fin slap/4.png",
        "img/1.Sharkie/4.Attack/Fin slap/5.png",
        "img/1.Sharkie/4.Attack/Fin slap/6.png",
        "img/1.Sharkie/4.Attack/Fin slap/7.png",
        "img/1.Sharkie/4.Attack/Fin slap/8.png"
    ];

    /**
     * Array with all image paths for the kill animation.
     * @see {@link Character#killedAnimation}.
     * @type {Array}
     */
    IMAGES_KILLED = [
        "img/1.Sharkie/6.dead/2.Electro_shock/7.png",
        "img/1.Sharkie/6.dead/2.Electro_shock/8.png",
        "img/1.Sharkie/6.dead/2.Electro_shock/9.png",
        "img/1.Sharkie/6.dead/2.Electro_shock/10.png"
    ]

    /**
     * Used to know if Sharkie is moving
     * @type {Boolean}
     */
    isMoving = false;

    /**
     * Used to know if Sharkie is been killed
     * @type {Boolean}
     */
    killed = false;

    /**
     * Audio that is played when Sharkie is swimming.
     * @type {Audio}
     */
    swimming_sound = new Audio("audio/swimming.mp3");
    
    constructor(){
        super().loadImage("img/1.Sharkie/3.Swim/1.png");
        this.loadImages(this.IMAGES_SWIMMING);
        this.loadImages(this.IMAGES_FLOATING);
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
     * Check if an object is near to Sharkie.
     * Used for @see {@link World#checkSlapCollision}.
     * @param {object} mo - {@link MovableObject}. 
     * @returns {boolean}
     */
    sharkieIsInRange(mo){
        return this.x + this.width > mo.x && this.y+160 + this.height-250 > mo.y && this.x < mo.x && this.y+160 < mo.y + mo.height
    }

    /**
     * Move Sharkie around the map.
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

    /**
     * Move Sharkie to the right if the right arrow is pressed.
     * @see {@link game#checkIfKeyIsPressed}
     */
    moveAnimationRight(){
        if(this.world.keyboard.RIGHT && this.x < 4300){
            this.other_direction = false;
            this.x += this.speed;
            this.world.level.statusbars.forEach(element => {
                element.x += this.speed
            });
            this.swimming_sound.play();
        }
    }
    
    /**
     * Move Sharkie to the left if the left arrow is pressed.
     * @see {@link game#checkIfKeyIsPressed}
     */
    moveAnimationLeft(){
        if(this.world.keyboard.LEFT && this.x > -700){
            this.other_direction = true;
            this.x -= this.speed;
            this.world.level.statusbars.forEach(element => {
                element.x -= this.speed
            });
            this.swimming_sound.play();

        }
    }

    /**
     * Move Sharkie up if the up arrow is pressed.
     * @see {@link game#checkIfKeyIsPressed}
     */
    moveAnimationUp(){
        if(this.world.keyboard.UP && this.y > -140){
            this.y -= this.speed;
            this.swimming_sound.play();
        }
    }

    /**
     * Move Sharkie down if the right arrow is pressed.
     * @see {@link game#checkIfKeyIsPressed}
     */
    moveAnimationDown(){
        if(this.world.keyboard.DOWN && this.y < 250){
            this.y += this.speed;
            this.swimming_sound.play();
        }
    }

     /**
     * Check if Sharkie is moving, hurt, attacking or dead and draw the respective images.
     */
    animateMovement(){
        setInterval(() => {
            if(!this.dead && !this.killed){
                this.hurtAnimation();
                this.floatingAnimation();
            }
            this.checkDeadAnimation()
        }, 200);
        setInterval(() => {
            if(!this.dead && !this.killed){
                this.moveAnimation();
                this.attackAnimation();
            }
        }, 100); 
    }

    /**
     * Check if Sharkie died from {@link Enemy} or {@link Endboss}.
     */
    checkDeadAnimation(){
        if(this.dead){
            this.deadAnimation();  
        }
        if(this.killed){
            this.killedAnimation();
        }
    }

    /**
     * Play the animation when Sharkie is moving.
     */
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

    /**
     * Play the animation when Sharkie is attacking.
     */
    attackAnimation(){
        if(this.isAttacking()){
            this.drawAttackImages(this.IMAGES_ATTACK);
        } else if(this.isSlapping()){
            this.drawAttackImages(this.IMAGES_SLAPPING);
        } else{
            this.current_attack_img = 0;
        }
    }

    /**
     * Play the animation when Sharkie is being hurt.
     */
    hurtAnimation(){
        if(this.isHurt() && !this.isSlapping()){
            this.drawImages(this.IMAGES_HURT); 
         }
         else if(this.isElectrocuted() && !this.isSlapping()){
             this.drawImages(this.IMAGES_SHOCK);  
         }
    }

    /**
     * Play the animation when Sharkie is not moving.
     */
    floatingAnimation(){
        if(!this.isMoving && !this.dead && !this.killed && !this.isAttacking() && !this.isHurt() && !this.isElectrocuted() && !this.isSlapping()){
            this.drawImages(this.IMAGES_FLOATING)
        }
    }

    /**
     * Play the animation when Sharkie dies.
     */
    deadAnimation(){
            if(!this.stop){
                this.drawImages(this.IMAGES_DEAD);
            }
            setTimeout(() => {
                this.stop = true;
                this.loadImage("img/1.Sharkie/6.dead/1.Poisoned/12.png")
            }, 1000);
    }

    /**
     * Play the animation when Sharkie is killed.
     */
    killedAnimation(){
        if(!this.stop){
            this.drawImages(this.IMAGES_KILLED);
        }
        this.moveBonesToGround();
        setTimeout(() => {
            this.stop = true;
            this.loadImage("img/1.Sharkie/6.dead/2.Electro_shock/10.png")
        }, 500);
    }

    /**
     * Play the animation when Shakie is killed and the bones go to the bottom.
     */
    moveBonesToGround(){
        if(this.y < 150){
            this.y += 30
        }
        if(this.y > 200){
            this.y -= 30
        }
    }
}


