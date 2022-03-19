class PufferFish extends MovableObject{
    x = 200 + Math.random() * 500;
    y = 400 - Math.random() * 400;
    width = 60;
    height = 60;
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
            let i = this.current_img % this.IMAGES_STAYING.length;
            let path = this.IMAGES_STAYING[i];
            this.img = this.image_cache[path];
            this.current_img++;
        },150)
        this.current_img++
    }

}