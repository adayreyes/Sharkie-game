/**
 * @class World
 */
class World{
    /**
     * Create a new Character (Sharkie)
     * @type {object}
     */
    character = new Character();

     /**
     * Canvas Context
     * @type {CanvasRenderingContext2D}
     */
    ctx;

     /**
     * Constant <strong>LEVEL1</strong> contains the objects for the world @see LEVEL1
     * @type {Object}
     */
    level = LEVEL1;

    /**
     * Canvas element
     * @type {HTMLElement}
     */
    canvas;

    /**
     * @see Keyboard
     * @type {object}
     */
    keyboard;

    /**
     * Position of the camera at the x axis
     * @type {number}
     */
    camera_x = 0;

    /**
     * Array with the bubbles 
     * @type {Array}
     * @see {@link ThrowableObject}
     */
    throwable_objects = [];

    /**
     * Array with strings to better control of the function {@link World#throwBubbles}
     * @type {Array}
     * @see {@link World#setNewBubble}
     */
    poison_bottles = [];
    /**
     * Is used to check if the healthbar is empty
     * @type {Boolean}
     * @see {@link World#checkHealth}
     */
    health_empty = false;

    /**
     * Is used to check if the coinbar is full
     * @type {Boolean}
     * @see {@link World#checkCoins}
     */
    coins_full = false;

     /**
     * Is used to check if the poisonbar is full
     * @type {Boolean}
     * @see {@link World#checkPoisons}
     */
    poisons_full = false;

     /**
     * Is used to check if the poisonbar is empty
     * @type {Boolean}
     * @see {@link World#checkPoisons}
     */
    poisons_empty = false;


     /**
     * Is used to check if the game is been started
     * @type {Boolean}
     * @see {@link starting}
     */
    start = false;

    /**
     * Is used to stop the game
     * @type {Boolean}
     * @see {@link World#draw}
     * @see {@link World#gameOver}
     */
    stop = false;


    /**
     * Image that it is showed if client wins
     * @type {Image}
     * @see {@link World#drawGameOverImage}
     */
    win_img = new Image();

    /**
     * Image that it is showed if client loses
     * @type {Image}
     * @see {@link World#drawGameOverImage}
     */
    lose_img = new Image();

    /**
     * Image used at the end of the game to restart it
     * @type {Image}
     * @see {@link World#drawGameOverImage}
     */
    try_again_img = new Image();

    /**
     * Sound used when Sharkie is being hurt by {@link PufferFish} or {@link Endboss}
     * @type {Audio}
     * @see {@link World#checkEnemy}
     */
    hurt_sound = new Audio("audio/hurt.mp3");

    /**
     * Sound used when Sharkie is being hurt by {@link JellyFish}
     * @type {Audio}
     * @see {@link World#checkEnemy}
     */
    electro_sound = new Audio("audio/electro.mp3");

    /**
     * Sound used when Sharkie is slapping
     * @type {Audio}
     * @see {@link World#slapEnemies}
     */
    slap_sound = new Audio("audio/slap.mp3");

    /**
     * Sound used when Sharkie throws a bubble
     * @type {Audio}
     * @see {@link World#throwBubbles}
     */
    bubble_sound = new Audio("audio/bubble.mp3");

    /**
     * Sound used when Sharkie collects a poison bottle
     * @type {Audio}
     * @see {@link World#checkPoisons}
     */
    bottle_sound = new Audio("audio/bottle.mp3");

    /**
     * Sound used when Sharkie collects a coin
     * @type {Audio}
     * @see {@link World#checkCoins}
     */
    coin_sound = new Audio("audio/coin.mp3");

    /**
     * Sound used when Sharkie collects a heart
     * @type {Audio}
     * @see {@link World#collisionWithHeart}
     */
    life_sound = new Audio("audio/life.mp3");

    /**
     * Sound used when the client wins
     * @type {Audio}
     * @see {@link World#drawGameOverImage}
     */
    win_sound = new Audio("audio/win.mp3");

    /**
     * Sound used when the client loses
     * @type {Audio}
     * @see {@link World#drawGameOverImage}
     */
    gameover_sound = new Audio("audio/gameover.mp3");

    /**
     * Sound used when the Endboss appears
     * @type {Audio}
     * @see {@link World#endbossAppearsSound}
     */
    endboss_appears_sound = new Audio("audio/endboss_appears.mp3");

    /**
     * Sound used when the Endboss is being hurt
     * @type {Audio}
     * @see {@link World#bubbleCollisionWithEndboss}
     */
    endboss_hurt_sound = new Audio("audio/endboss_hurt.mp3");
    
    /**
     * Set the values of {@link World#canvas} and {@link World#keyboard}.
     * @param {HTMLElement} canvas - Canvas element
     * @param {object} keyboard - @see Keyboard
     */
    constructor(canvas,keyboard){
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas;
        this.win_img.src = "img/6.Botones/Try again/Mesa de trabajo 1.png";
        this.lose_img.src = "img/6.Botones/Tittles/Game Over/Recurso 13.png";
        this.try_again_img.src = "img/6.Botones/Try again/Recurso 17.png";
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollisions();
        this.throwBubbles();
        this.endbossAppearsSound();  
    }

    /**
     * Set {@link World} as variable in {@link Character} 
     */
    setWorld(){
        this.character.world = this;
    }
    
    /**
     * Draw all the objects in the canvas
     */
    draw(){
        let self = this;
        this.ctx.clearRect(0,0, this.canvas.width,this.canvas.height);
        this.ctx.translate(this.camera_x,0);
        this.fillMap();
        this.ctx.translate(-this.camera_x,0);
        let req = requestAnimationFrame(function() {
            self.draw()
        })
        if(this.stop){
            cancelAnimationFrame(req);
        }
    }
    

    /**
     * Clean code function
     */
    fillMap(){
        this.addGroupsOfObjectsToMap();
        this.addToMap(this.level.endboss);
        this.addToMap(this.character);
    }
    
    /**
     * Clean code function
     */
    addGroupsOfObjectsToMap(){
        this.addObjectsToMap(this.level.background_objects);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.items.coins);
        this.addObjectsToMap(this.level.items.poisons);
        this.addObjectsToMap(this.level.items.hearts);
        this.addObjectsToMap(this.level.statusbars);
        this.addObjectsToMap(this.throwable_objects);
    }
    
    /**
     * Checks if the hitbox from each {@link Enemy} is colliding with the hitbox from the {@link Character}
     */
    checkCollisions(){
        this.collisionWithEnemy();
        this.editHealthbar();
        this.collisionWithCoin();
        this.collisionWithPoison();
        this.collisionWithHeart();
        this.bubbleCollisionWithEnemies();
        this.bubbleCollisionWithEndboss();
        this.slapEnemies();
    }

    /**
     * Load the next image from the statusbar.
     * @param {Number} i - index from array @see {@link LEVEL1}
     * @see {@link StaticObject#IMAGES}
     */
    increaseStatusbar(i){
        this.level.statusbars[i].current_img ++;
        this.level.statusbars[i].img = this.level.statusbars[i].image_cache[this.level.statusbars[i].IMAGES[this.level.statusbars[i].current_img]];
    }

    /**
     * Load the previous image from the statusbar.
     * @param {Number} i - index from array @see {@link LEVEL1}
     * @see {@link StaticObject#IMAGES}
     */
    decreaseStatusbar(i){
        this.level.statusbars[i].current_img --;
        this.level.statusbars[i].img = this.level.statusbars[i].image_cache[this.level.statusbars[i].IMAGES[this.level.statusbars[i].current_img]];
    }


    /**
     * Checks if Sharkie is colliding with an enemy.
     */
    collisionWithEnemy(){
        let interval = setInterval(() => {
            this.level.enemies.forEach(enemy =>{
                if(this.character.sharkieIsColliding(enemy) && !this.character.isSlapping() && !this.level.endboss.dead){
                    this.checkEnemy(enemy);
                }
                this.collisionWithEndboss()
            })
        }, 150);
    }
    
    /**
     * Checks which enemy is colliding with Sharkie, so that the right animation is played.
     * @param {Object} enemy - @see {@link JellyFish} @see {@link PufferFish}
     */
    checkEnemy(enemy){
        if(enemy instanceof PufferFish && !enemy.dead && !this.character.killed && !this.character.dead){
            this.character.hit();
            this.hurt_sound.play();
        }
        if(enemy instanceof JellyFish && !enemy.dead && !this.character.killed && !this.character.dead){
            this.character.shock();
            this.electro_sound.play();
        }
    }

    /**
     * Checks if Sharkie is colliding with the endboss.
     */
    collisionWithEndboss(){
        if(this.character.sharkieIsCollidingWithEndboss(this.level.endboss) && !this.character.killed && !this.character.dead && !this.level.endboss.dead){
            this.character.kill();
        }
    }


    /**
     * Checks if Sharkie is collinding with an enemy or the endboss to edit the healthbar.
     */
    editHealthbar(){
        let interval = setInterval(() => {
            this.level.enemies.forEach(enemy => {
                if(this.character.sharkieIsColliding(enemy) && !this.character.isSlapping() && !this.level.endboss.dead){
                    this.checkHealth();  
                }
                })
                if(this.character.sharkieIsCollidingWithEndboss(this.level.endboss) && !this.level.endboss.dead){
                    this.hurt_sound.play();
                    for (let i = 0; i < 3; i++) {this.checkHealth()};
                }
        }, 500);
    }
    
    /**
     * Checks if Sharkie has more life and decrease the healthbar.
     */
    checkHealth(){
        if(this.level.statusbars[0].current_img <= 0){
            this.level.statusbars[0].current_img = 0;
            this.health_empty = true;
            this.checkIfSharkieIsBeingKilled();
            this.checkIfSharkieIsDying();
        }
        if(!this.health_empty){
            this.decreaseStatusbar(0)
        } 
    }
    
    /**
     * Checks if Sharkie has been killed by enemy.
     */
    checkIfSharkieIsDying(){
         if(this.character.isHurt() && !this.character.killed || this.character.isElectrocuted() && !this.character.killed){
             this.character.dead = true;
             this.gameOver()
         }
     }


     /**
      * Checks if Sharkie is been killed by endboss
      */
     checkIfSharkieIsBeingKilled(){
         if(this.character.isBeingKilled()){
             this.character.killed = true;
             this.gameOver()
         }   
     }

     /**
      * Stops the game and draw the final images.
      */
     gameOver(){
         setTimeout(() => {
             this.stop = true;
             setTimeout(() => {
                 this.drawGameOverImage();
                 game_sound.pause();
                }, 300);
            }, 3000);
            checkIfRestartIsPressed();
    }
    /**
     * Checks if the client wins or loses and draw the right image.
     */    
    drawGameOverImage(){
        if(this.level.endboss.dead){
            this.ctx.drawImage(this.win_img ,0,0,720,480);  
            this.ctx.drawImage(this.try_again_img,210,360,300,80);  
            this.win_sound.play();      
            } else{
                this.ctx.drawImage(this.lose_img ,20,80,670,200);        
                this.ctx.drawImage(this.try_again_img,210,360,300,80);
                this.gameover_sound.play();        
        }      
     }
    
    /**
     * Checks if Sharkie is colliding with a coin.
     */
    collisionWithCoin(){
        let interval = setInterval(() => {
            this.level.items.coins.forEach(coin =>{
                if(this.character.sharkieIsColliding(coin)){
                   this.checkCoins(coin);
                }
            })
        }, 200);
    }

    /**
     * Modifies the coinbar
     * @param {Object} coin @see {@link Coin}
     */
    checkCoins(coin){
        if(this.level.statusbars[2].current_img == 5){
            this.level.statusbars[2].current_img = 4;
            this.coins_full = true;
        }
        if(!this.coins_full){
            coin.y = -50
            this.increaseStatusbar(2);
            this.coin_sound.play();
        }
    }

    /**
     * Checks if Sharkie is colliding with a heart and modifies the healthbar.
     */
    collisionWithHeart(){
        let interval = setInterval(() => {
            this.level.items.hearts.forEach(heart =>{
                if(this.character.sharkieIsColliding(heart)){
                    if(this.level.statusbars[0].current_img < 5){
                    heart.y = -50
                    this.increaseStatusbar(0);
                    this.life_sound.play();
                    }
                }
            })
        }, 200);
    }

    /**
     * Checks if Sharkie is colliding with a poison bottle.
     */
    collisionWithPoison(){
        let interval = setInterval(() => {
            this.level.items.poisons.forEach(poison =>{
                if(this.character.sharkieIsColliding(poison)){
                    this.checkPoisons(poison);
                }
            })
        }, 200);
    }

    /**
     * Modifies the poisonbar
     * @param {Object} poison @see {@link Poison}
     */
    checkPoisons(poison){
        if(this.level.statusbars[1].current_img == 5){
            this.poisons_full = true;
        }
        if(this.level.statusbars[1].current_img < 5){
            this.poisons_full = false;
        }
        if(!this.poisons_full){
            poison.y = -100
            this.increaseStatusbar(1);
            this.poison_bottles.push("bottle");
            this.bottle_sound.play();
        }
    }

    /**
     * Main function for the bubble collisions
     */
    bubbleCollisionWithEnemies(){
        let interval = setInterval(() => {
            this.throwable_objects.forEach(bubble =>{
                this.level.enemies.forEach(enemy =>{
                    this.checkIfBubbleIsCollidingWithEnemy(enemy,bubble);
                })
            })
        }, 50);
    }

    /**
     * Checks if the bubble collides with an enemy or not
     * @param {Object} enemy - @see {@link Enemy}
     * @param {Object} bubble - @see {@link ThrowableObject}
     */
    checkIfBubbleIsCollidingWithEnemy(enemy,bubble){
        if(bubble.isColliding(enemy)){
            bubble.y = -100;
            setInterval(() => {
                this.enemyDeadAnimation(enemy);
            }, 50);
        } else{
            setTimeout(() => {
                bubble.y = -100;
            }, 500);
        }
    }
    
    /**
     * Plays the dead animation from the enemy.
     * @param {Object} enemy - @see {@link Enemy}
     */
    enemyDeadAnimation(enemy){
        enemy.drawImages(enemy.IMG_DEAD);
                enemy.dead = true;
                if(enemy.y > -200){
                    enemy.y -= 20;
                    enemy.x -= 50;
                }
    }

    /**
     * Checks if a bubble is colliding with the endboss.
     * If it does, the hurt animation from the endboss is played.
     */
    bubbleCollisionWithEndboss(){
        let interval = setInterval(() => {
            this.throwable_objects.forEach(bubble => {
                if(bubble.isCollidingWithEndboss(this.level.endboss)){
                    bubble.y = -100;
                    this.endboss_hurt_sound.play();
                    this.level.endboss.hit();
                    this.editEndbossbar();
                }
            });
        }, 50);
    }

    /**
     * Modifies the healthbar from the endboss and end the game if it has no life.
     */
    editEndbossbar(){
        if(this.level.statusbars[3].current_img > 0){
            this.decreaseStatusbar(3);
        } else{
            this.level.endboss.dead = true;
            this.gameOver()
        }
    }

    /**
     * Plays the throw bubbles animation if the client press the key "D"
     */
    throwBubbles(){
        setInterval(() => {
            if(this.keyboard.D){
                if(!this.character.isAttacking()){
                    this.character.attack();
                    this.setNewBubble();
                    setTimeout(() => {
                     this.bubble_sound.play();
                     }, 400);  
                }
            }
        }, 100);
    }

    /**
     * Create a new bubble to be thrown.
     * Modifies the poisonbar.
     */
    setNewBubble(){
        if(this.poison_bottles.length != 0){
            this.poison_bottles.pop();
            this.decreaseStatusbar(1);
            setTimeout(() => {
                if(this.character.other_direction){
                    this.throwable_objects.push(new ThrowableObject(this.character.x - 250,this.character.y,true))
                } else{
                    this.throwable_objects.push(new ThrowableObject(this.character.x,this.character.y,false))
                }
            }, 600);
        }
    }

    /**
     * Plays the slap animation from Sharkie if the client press the spacebar
     */
    slapEnemies(){
        setInterval(() => {
            if(this.keyboard.SPACE){
                if(!this.character.isSlapping()){
                    this.character.slap();
                    this.checkSlapCollision();
                    setTimeout(() => {
                        this.slap_sound.play();
                    }, 400);
                }
            }
        }, 100);
    }

    /**
     * Checks if an enemy is next to Sharkie during the slap animation to kill it.
     */
    checkSlapCollision(){
        this.level.enemies.forEach(enemy =>{
            if(this.character.sharkieIsInRange(enemy)){
               setTimeout(() => {
                setInterval(() => {
                    this.enemyDeadAnimation(enemy);
                }, 50);
               }, 500);
            }
        })
    }

    /**
     * Plays {@link World#endboss_appears_sound} if Sharkie is at the right point.
     */
    endbossAppearsSound(){
        let interval = setInterval(() => {
            if(this.character.x > 3550){
                this.endboss_appears_sound.play();
                clearInterval(interval)
            }
        }, 300);
    }

    /**
     * Draw the objects from an array.
     * @param {array} objects - array with different objects.
     */
    addObjectsToMap(objects){
        objects.forEach(obj => {
            this.addToMap(obj)
        }) 
    }

    /**
     * Draw the object and his hitbox.
     * @param {object} mo - Movable object @see {@link MovableObject}.
     */
    addToMap(mo) {
        if(mo.other_direction){
           this.flipImage(mo);
        } 
        mo.draw(this.ctx);
        if(mo.other_direction){
           this.flipImageBack(mo);
        } 
    }

    /**
     * Flip the object to the other direction.
     * @param {object} mo - Movable object @see {@link MovableObject}
     */
    flipImage(mo){
        this.ctx.save();
        this.ctx.translate(mo.width,0);
        this.ctx.scale(-1,1);
        mo.x = mo.x * -1;
    }
    
     /**
     * Flip the object to his initial direction.
     * @param {object} mo - Movable object @see {@link MovableObject}
     */
    flipImageBack(mo){
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}