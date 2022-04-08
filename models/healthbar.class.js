class Healthbar extends Statusbar{
    constructor(y,images){
        super().IMAGES = images
        this.loadImage(images[0]);
        this.loadImages(images);
        this.y = y;
    }
}