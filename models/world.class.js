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
        this.addObjectsToMap(this.level.background_objects);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.items.coins);
        this.addObjectsToMap(this.level.items.poisons);
        this.addObjectsToMap(this.level.items.hearts);
        this.addObjectsToMap(this.level.statusbars);
        this.addToMap(this.character);
        this.ctx.translate(-this.camera_x,0);
        
        let self = this;
        requestAnimationFrame(function() {
            self.draw()
        })
    }

    /**
     * Check if the hitbox from each {@link Enemy} is colliding with the hitbox from the {@link Character}
     */
    checkCollisions(){
        setInterval(() => {
            this.level.enemies.forEach(enemy =>{
                if(this.character.isColliding(enemy)){
                    this.character.hit();
                    enemy.hit();
                }
            })
        }, 200);
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
        if(mo instanceof Enemy || mo instanceof Character){
            mo.drawFrame(this.ctx);
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