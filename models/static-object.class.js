/**
 * is used for all object that don't move around the world
 * @class StaticObject
 */
class StaticObject{
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
    IMAGES;
      /**
     * Create a new image for each element of the array and save this in {@link StaticObject#image_cache}
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
     * Create a new image and set it to the  {@link StaticObject#img}
     * @param {string} path - path from the image that should be loaded.
     */
        loadImage(path){
            this.img = new Image();
            this.img.src = path
        }
     /**
     * Check if the hitbox from both object are in the same area.
     * @param {object} mo - {@link StaticObject}. 
     * @returns {boolean}
     */
      isColliding(mo){
        return this.x + this.width > mo.x && this.y + this.height > mo.y && this.x < mo.x && this.y < mo.y + mo.height 
    }

    /**
     * Draw the img from {@link StaticObject#img} on the canvas.
     * @param {CanvasRenderingContext2D} ctx - Canvas Context
     */
    draw(ctx){
        try{
            ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
        } catch(e){
            console.warn("error loading image",e);
            console.log("could not load image", this.img);
        }
    }
    /**
     * Change {@link StaticObject#img} to the next img of the array.
     * @param {array} images - array with paths (e.g {@link StaticObject#IMAGES})
     */
     drawImages(images){
        let i = this.current_img % images.length;
        let path = images[i];
        this.img = this.image_cache[path];
        this.current_img++;
    }
}