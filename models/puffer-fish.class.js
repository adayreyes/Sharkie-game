class PufferFish extends Enemy{
    IMAGES_STAYING = [
        "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png",
        "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png",
        "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png",
        "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png",
        "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png",
    ];
    
    constructor(){
        super().loadImage("img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png");
        this.loadImages(this.IMAGES_STAYING);
        this.animate();
    }
    animate(){
        this.moveLeft();
        setInterval(()=>{
            this.drawImages(this.IMAGES_STAYING)
        },150)
    }

}