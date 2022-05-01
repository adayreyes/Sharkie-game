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

    IMAGES_ATTACKING = [
        "img/2.Enemy/3 Final Enemy/Attack/1.png",
        "img/2.Enemy/3 Final Enemy/Attack/2.png",
        "img/2.Enemy/3 Final Enemy/Attack/3.png",
        "img/2.Enemy/3 Final Enemy/Attack/4.png",
        "img/2.Enemy/3 Final Enemy/Attack/5.png",
        "img/2.Enemy/3 Final Enemy/Attack/6.png"
    ]

    

    IMAGES_HEALTHBAR = ["img/4. Marcadores/orange/health0.png","img/4. Marcadores/orange/health20.png","img/4. Marcadores/orange/health40.png","img/4. Marcadores/orange/health60.png","img/4. Marcadores/orange/health80.png","img/4. Marcadores/orange/health100.png",]
    hadFirstContact = false;

    constructor(){
        super().loadImage("img/2.Enemy/3 Final Enemy/1.Introduce/1.png");
        this.loadImages(this.IMAGES_STAYING);
        this.loadImages(this.IMAGES_APPEARING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_HEALTHBAR);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_ATTACKING);
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
        ctx.rect(this.x,this.y+180,this.width-100,this.height-250);
        ctx.stroke();
    }
    
    /**
     * Draw the default-images every 150ms
     */
    current_img = 0;
    startAttack = false;
    
    EndbossIsAttacking(){
        let timepassed = new Date().getTime() - this.last_attack;
        timepassed = timepassed / 1000;
        return timepassed < .1;
    }

    animateMovement(){
        setTimeout(() => {
            setInterval(() => {
                try {
                    if(!this.dead){
                        this.checkFirstContact();
                        this.endbossAppears();
                        this.endbossFloating();
                        this.hurtAnimation();
                        this.attackAnimation();
                    } else{
                        this.deadAnimation();
                    } 
                } catch (error) {
                    return
                }
            }, 150);
        }, 1000);
    }

    attackAnimation(){
        if(this.startAttack && !this.isHurt() && this.x - world.character.x < 400 && this.x - world.character.x > 50){
            this.attack();
            this.drawImages(this.IMAGES_ATTACKING)
            this.x -= 10;
        }
    }

    hurtAnimation(){
        if(this.isHurt()){
            this.drawImages(this.IMAGES_HURT); 
         }
    }

    deadAnimation(){
        if(!this.stop){
            this.drawImages(this.IMAGES_DEAD);
        }
        setTimeout(() => {
            this.stop = true;
            this.loadImage("img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png")
        }, 800);
    }

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
    endbossAppears(){
        if(this.hadFirstContact && this.current_img < 10){
            this.drawImages(this.IMAGES_APPEARING);
            this.current_img++
        }
    }
    endbossFloating(){
        if(this.hadFirstContact && this.current_img >= 10 && !this.isHurt() && !this.EndbossIsAttacking()){
            this.drawImages(this.IMAGES_STAYING);
            if(world.character.y > -100){
                this.y = world.character.y - 100;
            }
            if(this.x - world.character.x > 550){
                this.x = world.character.x + 550;
            }
        }
    }

}