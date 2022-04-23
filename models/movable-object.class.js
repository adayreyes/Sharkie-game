/**
 * @class MovableObject
 * is used for all objects in the world that move around the world
 */
class MovableObject{
    /**
     * Position at the x axis
     * @type {number}
     */
    x;

     /**
     * Position at the y axis
     * @type {number}
     */
    y;

     /**
     * Current image of the object
     * @type {image}
     */
    img;

     /**
      * Width of the object
     * @type {number}
     */
    width;

     /**
     *Height of the object
     * @type {number}
     */
    height;

     /**
     * Array with all images loaded
     * @type {array}
     */
    image_cache = {};

     /**
     *Determite which image should be used (position in array)
     * @type {number}
     */
    current_img = 0;

     /**
     * Array with the path of all default-images paths
     * @type {array}
     */
    IMAGES_STAYING;

     /**
     *Determinate how fast should the object move
     * @type {number}
     */
    speed = 0.15 + Math.random() * 1;

     /**
     * Is used to check in which direction the object is moving
     * @type {boolean}
     */
    other_direction = false;

     /**
     *Value with the current life of object
     * @type {number}
     */
    life = 100;

     /**
     * Is used to check if the object has no more life
     * @type {boolean}
     */
    dead = false;
    current_attack_img = 0;
    


    /**
     * Create a new image and set it to the  {@link MovableObject#img}
     * @param {string} path - path from the image that should be loaded.
     */
    loadImage(path){
        this.img = new Image();
        this.img.src = path
    }

    /**
     * Create a new image for each element of the array and save this in {@link MovableObject#image_cache}
     * @param {array} arr - array with specific images paths
     */
    loadImages(arr){
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.image_cache[path] = img;
        });

    }

    /**
     * Decrease the value of {@link MovableObject#life} 
     * Change the value of {@link MovableObject#dead} to true if {@link MovableObject#life} is = 0.
     * Set the time when this function is called
     */
    hit(){
        this.last_hit = new Date().getTime();
    }
    shock(){
        this.last_shock = new Date().getTime();
    }

    attack(){
        this.last_attack = new Date().getTime();
    }

    /**
     * Check if {@link MovableObject#hit} was called in the last 1s  .
     * @returns {boolean} 
     */
    isHurt(){
        let timepassed = new Date().getTime() - this.last_hit;
        timepassed = timepassed / 1000;
        return timepassed < 1
    }
    isElectrocuted(){
        let timepassed = new Date().getTime() - this.last_shock;
        timepassed = timepassed / 1000;
        return timepassed < 1
    }

    isAttacking(){
        let timepassed = new Date().getTime() - this.last_attack;
        timepassed = timepassed / 1000;
        return timepassed < 1;
    }

    /**
     * Draw the img from {@link MovableObject#img} on the canvas.
     * @param {CanvasRenderingContext2D} ctx - Canvas Context
     */
    draw(ctx){
        ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
    }

    /**
     * Draw a hitbox around the objects with the class {@link Character} or {@link Enemy}
     * @param {CanvasRenderingContext2D} ctx - Canvas Context
     */
    drawSharkieFrame(ctx){
        ctx.beginPath();
        ctx.lineWidth = "5";
        ctx.strokeStyle = "blue";
        ctx.rect(this.x+60,this.y+150,this.width-120,this.height-230);
        ctx.stroke();
    }
    drawFrame(ctx){
        ctx.beginPath();
        ctx.lineWidth = "5";
        ctx.strokeStyle = "blue";
        ctx.rect(this.x,this.y,this.width,this.height);
        ctx.stroke();
    }

    
    /**
     * Move the object to the left, changing de value of {@link MovableObject#x}
     */
    moveLeft(){
        setInterval(()=>{
            this.x -= this.speed;
        },1000/60)
    }
    
    /**
     * Move the object to the right, changing de value of {@link MovableObject#x}
     */
    moveRight(){
       setInterval(()=>{
            this.x += this.speed;
        },1000/60)
    }

    /**
     * Change {@link MovableObject#img} to the next img of the array.
     * @param {array} images - array with paths (e.g {@link MovableObject#IMAGES_STAYING})
     */
    drawImages(images){
        let i = this.current_img % images.length;
        let path = images[i];
        this.img = this.image_cache[path];
        this.current_img++;
    }
    drawAttackImages(images){
        let i = this.current_attack_img % images.length;
        let path = images[i];
        this.img = this.image_cache[path];
        this.current_attack_img++;
    }
   
}