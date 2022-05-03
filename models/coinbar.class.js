/**
 * @class Coinbar
 * @extends Statusbar
 */
class Coinbar extends Statusbar{
    constructor(y,images){
        super().IMAGES = images
        this.loadImage(images[this.current_img]);
        this.loadImages(images);
        this.y = y;
    }
}