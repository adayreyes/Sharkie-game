/**
 * @class Healthbar
 * @extends Statusbar
 */
class Healthbar extends Statusbar{
    constructor(x,y,images){
        super().IMAGES = images
        this.loadImage(images[this.current_img]);
        this.loadImages(images);
        this.y = y;
        this.x = x;
    }
    current_img = 5;
}