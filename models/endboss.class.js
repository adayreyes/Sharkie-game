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

    IMAGES_FLOATING = [
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
    ];

    IMAGES_HURT = [
        "img/2.Enemy/3 Final Enemy/Hurt/1.png",
        "img/2.Enemy/3 Final Enemy/Hurt/2.png",
        "img/2.Enemy/3 Final Enemy/Hurt/3.png",
        "img/2.Enemy/3 Final Enemy/Hurt/4.png"
    ]

    IMAGES_DEAD = [
        "img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 6.png",
        "img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 7.png",
        "img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png",
        "img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png",
        "img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png"
    ]
    
    IMAGES_ATTACK = [
        "img/2.Enemy/3 Final Enemy/Attack/1.png",
        "img/2.Enemy/3 Final Enemy/Attack/2.png",
        "img/2.Enemy/3 Final Enemy/Attack/3.png",
        "img/2.Enemy/3 Final Enemy/Attack/4.png",
        "img/2.Enemy/3 Final Enemy/Attack/5.png",
        "img/2.Enemy/3 Final Enemy/Attack/6.png"
    ]
    
    /**
     * Array with all image paths for the endboss healthbar animation.
     * @type {Array}
     */
    IMAGES_HEALTHBAR = ["img/4. Marcadores/orange/health0.png","img/4. Marcadores/orange/health20.png","img/4. Marcadores/orange/health40.png","img/4. Marcadores/orange/health60.png","img/4. Marcadores/orange/health80.png","img/4. Marcadores/orange/health100.png",]

    /**
     * Used to know if Sharkie have already seen the endboss.
     * @type {Boolean}
     * @see {@link Endboss#checkFirstContact}
     */
    hadFirstContact = false;

    /**
     * Used to know which img from an array is being used.
     * @type {Number}
     */
    current_img = 0;

    /**
     * Used to set when the endboss starts to attack.
     * @see {@link Endboss#checkFirstContact}
     */
    startAttack = false;

    /**
     * Sound played when Endboss is attacking.
     */
    bite_sound = new Audio("audio/bite.mp3");
    
    constructor(){
        super().loadImage("img/2.Enemy/3 Final Enemy/1.Introduce/1.png");
        this.loadImages(this.IMAGES_FLOATING);
        this.loadImages(this.IMAGES_APPEARING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_HEALTHBAR);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_ATTACK);
        this.animate();
        
    };

    /**
     * Checks if {@link Endboss#last_attack} was called in the last 1s.
     * @returns {boolean} 
     */
    endbossIsAttacking(){
        let timepassed = new Date().getTime() - this.last_attack;
        timepassed = timepassed / 1000;
        return timepassed < .1;
    }

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
        ctx.rect(this.x,this.y+180,this.width-100,this.height-250);
        ctx.stroke();
    }
    

    /**
     * Checks if the Endboss is dead and play the respective animation.
     */
    animateMovement(){
        setInterval(() => {
            try {
                 if(!this.dead){
                    this.endbossAnimations();
                } else{
                    this.deadAnimation();
                } 
            } catch (error) {
                return
            }
        }, 150);
        
    }
    
    /**
     * Function with all Endboss animations when it is alive.
     */
    endbossAnimations(){
        this.checkFirstContact();
        this.endbossAppears();
        this.endbossFloating();
        this.hurtAnimation();
        this.attackAnimation(); 
    }

    /**
     * Checks if the Endboss is attacking and play the animation.
     */
    attackAnimation(){
        if(this.startAttack && !this.isHurt() && this.x - world.character.x < 400 && this.x - world.character.x > 50){
            this.attack();
            this.bite_sound.play();
            this.drawImages(this.IMAGES_ATTACK)
            this.x -= 20;
        }
    }

    /**
     * Checks if the Endboss is being hurt and play the animation.
     */
    hurtAnimation(){
        if(this.isHurt()){
            this.drawImages(this.IMAGES_HURT); 
         }
    }

    /**
     * Checks if the Endboss is dying and play the animation.
     */
    deadAnimation(){
        if(!this.stop){
            this.drawImages(this.IMAGES_DEAD);
        }
        setTimeout(() => {
            this.stop = true;
            this.loadImage("img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png")
        }, 800);
    }

    /**
     * Checks if {@link Character} reachs the position of the Endboss and make it appear.
     */
    checkFirstContact(){
        if(world.character.x > 3550){
            this.hadFirstContact = true;
            world.level.statusbars[4].y = -30;
            world.level.statusbars[3].y = 30;
            setTimeout(() => {
                this.startAttack = true;
            }, 2000);
        }
    }

    /**
     * Play the animation of the Endboss appearing.
     */
    endbossAppears(){
        if(this.hadFirstContact && this.current_img < 10){
            this.drawImages(this.IMAGES_APPEARING);
            this.current_img++
        }
    }

    /**
     * Play the animation of the Endboss floating.
     */
    endbossFloating(){
        if(this.hadFirstContact && this.current_img >= 10 && !this.isHurt() && !this.endbossIsAttacking()){
            this.drawImages(this.IMAGES_FLOATING);
            if(world.character.y > -100){
                this.y = world.character.y - 100;
            }
            if(this.x - world.character.x > 550){
                this.x = world.character.x + 550;
            }
        }
    }
}