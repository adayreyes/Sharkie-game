class Coin extends MovableObject{
    width = 40;
    height = 40;
    IMAGES_STAYING = [
        "img/4. Marcadores/1. Coins/1.png",
        "img/4. Marcadores/1. Coins/2.png",
        "img/4. Marcadores/1. Coins/3.png",
        "img/4. Marcadores/1. Coins/4.png",
    ]
    constructor(x,y){
        super().loadImage("img/4. Marcadores/1. Coins/1.png");
        this.x = x;
        this.y = y;
        this.loadImages(this.IMAGES_STAYING);
        this.animate();
    }
    animate(){
        setInterval(()=>{
            let i = this.current_img % this.IMAGES_STAYING.length;
            let path = this.IMAGES_STAYING[i];
            this.img = this.image_cache[path];
            this.current_img++;
        },250)
        this.current_img++
    }
}
