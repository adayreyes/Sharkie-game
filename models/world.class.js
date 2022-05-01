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
    throwable_objects = [];
    poison_bottles = [];
   
    /**
     * Set the values of {@link World#canvas} and {@link World#keyboard}.
     * @param {HTMLElement} canvas - Canvas element
     * @param {object} keyboard - @see Keyboard
     */
    constructor(canvas,keyboard){
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollisions();
        this.throwBubbles();
        
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
        this.ctx.clearRect(0,0, this.canvas.width,this.canvas.height);
        this.ctx.translate(this.camera_x,0);
        this.addGroupsOfObjectsToMap();
        this.addToMap(this.level.endboss);
        this.addToMap(this.character);
        this.ctx.translate(-this.camera_x,0);
        let self = this;
        requestAnimationFrame(function() {
            self.draw()
        })
    }

    addGroupsOfObjectsToMap(){
        this.addObjectsToMap(this.level.background_objects);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.items.coins);
        this.addObjectsToMap(this.level.items.poisons);
        this.addObjectsToMap(this.level.items.hearts);
        this.addObjectsToMap(this.level.statusbars);
        this.addObjectsToMap(this.throwable_objects);
    }
    
    health_empty = false;
    coins_full = false;
    poisons_full = false;
    poisons_empty = false;
    /**
     * Check if the hitbox from each {@link Enemy} is colliding with the hitbox from the {@link Character}
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
    collisionWithEnemy(){
        let interval = setInterval(() => {
            this.level.enemies.forEach(enemy =>{
                if(this.character.sharkieIsColliding(enemy) && !this.character.isSlapping()){
                    if(enemy instanceof PufferFish && !enemy.dead && !this.character.killed && !this.character.dead){
                        this.character.hit();
                    }
                    if(enemy instanceof JellyFish && !enemy.dead && !this.character.killed && !this.character.dead){
                        this.character.shock();
                    }

                }
            })
            if(this.character.sharkieIsCollidingWithEndboss(this.level.endboss) && !this.character.killed && !this.character.dead && !this.level.endboss.dead){
                this.character.kill();
            }
        }, 150);
    }
    
    editHealthbar(){
        let interval = setInterval(() => {
            this.level.enemies.forEach(enemy => {
                if(this.character.sharkieIsColliding(enemy) && !this.character.isSlapping()){
                    this.checkHealth();  
                }
            })
            if(this.character.sharkieIsCollidingWithEndboss(this.level.endboss) && !this.level.endboss.dead){
                this.checkHealth();  
                this.checkHealth();  
                this.checkHealth();  
                 
            }
        }, 500);
    }
    
    checkHealth(){
        if(this.level.statusbars[0].current_img <= 0){
            this.level.statusbars[0].current_img = 0;
            this.health_empty = true;
            if(this.character.isKilled()){
                this.character.killed = true;
            }
            if(this.character.isHurt() && !this.character.killed || this.character.isElectrocuted() && !this.character.killed){
                this.character.dead = true;
            }
        }
        if(!this.health_empty){
            this.level.statusbars[0].current_img --;
            this.level.statusbars[0].img = this.level.statusbars[0].image_cache[this.level.statusbars[0].IMAGES[this.level.statusbars[0].current_img]];
        } 
     }
    
    
    collisionWithCoin(){
        let interval = setInterval(() => {
            this.level.items.coins.forEach(coin =>{
                if(this.character.sharkieIsColliding(coin)){
                   this.checkCoins(coin);
                }
            })
        }, 200);
    }

    checkCoins(coin){
        if(this.level.statusbars[2].current_img == 5){
            this.level.statusbars[2].current_img = 4;
            this.coins_full = true;
        }
        if(!this.coins_full){
            coin.y = -50
            this.level.statusbars[2].current_img ++;
            this.level.statusbars[2].img = this.level.statusbars[2].image_cache[this.level.statusbars[2].IMAGES[this.level.statusbars[2].current_img]];
        }
    }
    collisionWithHeart(){
        let interval = setInterval(() => {
            this.level.items.hearts.forEach(heart =>{
                if(this.character.sharkieIsColliding(heart)){
                    if(this.level.statusbars[0].current_img < 5){
                    heart.y = -50
                    this.level.statusbars[0].current_img ++;
                    this.level.statusbars[0].img = this.level.statusbars[0].image_cache[this.level.statusbars[0].IMAGES[this.level.statusbars[0].current_img]];
                    }
                }
            })
        }, 200);
    }

    collisionWithPoison(){
        let interval = setInterval(() => {
            this.level.items.poisons.forEach(poison =>{
                if(this.character.sharkieIsColliding(poison)){
                    this.checkPoisons(poison);
                }
            })
        }, 200);
    }

    checkPoisons(poison){
        if(this.level.statusbars[1].current_img == 5){
            this.poisons_full = true;
        }
        if(this.level.statusbars[1].current_img < 5){
            this.poisons_full = false;
        }
        if(!this.poisons_full){
            poison.y = -100
            this.level.statusbars[1].current_img ++;
            this.level.statusbars[1].img = this.level.statusbars[1].image_cache[this.level.statusbars[1].IMAGES[this.level.statusbars[1].current_img]];
            this.poison_bottles.push("bottle");
        }
    }

    bubbleCollisionWithEnemies(){
        let interval = setInterval(() => {
            this.throwable_objects.forEach(bubble =>{
                this.level.enemies.forEach(enemy =>{
                    if(bubble.isColliding(enemy)){
                        bubble.y = -100;
                        setInterval(() => {
                            enemy.drawImages(enemy.IMG_DEAD);
                            enemy.dead = true;
                            if(enemy.y > -200){
                                enemy.y -= 20;
                                enemy.x -= 50;
                            }
                        }, 50);
                    } else{
                        setTimeout(() => {
                            bubble.y = -100;
                        }, 500);
                    }
                })
            })
        }, 50);
    }
    
    bubbleCollisionWithEndboss(){
        let interval = setInterval(() => {
            this.throwable_objects.forEach(bubble => {
                if(bubble.isCollidingWithEndboss(this.level.endboss)){
                    bubble.y = -100;
                    this.level.endboss.hit();
                    this.editEndbossbar();
                }
            });
        }, 50);
    }

    editEndbossbar(){
        if(this.level.statusbars[3].current_img > 0){
            this.level.statusbars[3].current_img --;
            this.level.statusbars[3].img = this.level.statusbars[3].image_cache[this.level.statusbars[3].IMAGES[this.level.statusbars[3].current_img]];
        } else{
            this.level.endboss.dead = true;
        }
    }

    
    editPoisonbar(){
        this.level.statusbars[1].current_img --;
        this.level.statusbars[1].img = this.level.statusbars[1].image_cache[this.level.statusbars[1].IMAGES[this.level.statusbars[1].current_img]];
    }

    throwBubbles(){
        setInterval(() => {
            if(this.keyboard.F){
                if(!this.character.isAttacking()){
                    this.character.attack();
                    this.setNewBubble();
                }
            }
        }, 100);
    }

    setNewBubble(){
        if(this.poison_bottles.length != 0){
            this.poison_bottles.pop();
            this.editPoisonbar();
            setTimeout(() => {
                if(this.character.other_direction){
                    this.throwable_objects.push(new ThrowableObject(this.character.x - 250,this.character.y,true))
                } else{
                    this.throwable_objects.push(new ThrowableObject(this.character.x,this.character.y,false))
                }
            }, 600);
        }
    }

    slapEnemies(){
        setInterval(() => {
            if(this.keyboard.SPACE){
                if(!this.character.isSlapping()){
                    this.character.slap();
                    this.checkSlapCollision();
                }
            }
        }, 100);
    }

    checkSlapCollision(){
        this.level.enemies.forEach(enemy =>{
            if(this.character.sharkieIsInRange(enemy)){
               setTimeout(() => {
                setInterval(() => {
                    enemy.drawImages(enemy.IMG_DEAD);
                    enemy.dead = true;
                    if(enemy.y > -200){
                        enemy.y -= 20;
                        enemy.x -= 50;
                    }
                }, 50);
               }, 500);
            }
        })
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
       /*  if(mo instanceof Character){
            mo.drawSharkieFrame(this.ctx);
        }
        if(mo instanceof Enemy){
            mo.drawFrame(this.ctx)
        }*/
        if (mo instanceof Endboss){
            mo.drawEndbossFrame(this.ctx)
        } 
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