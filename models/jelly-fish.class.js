class JellyFish extends MovableObject{
    x = 200 + Math.random() * 500;
    y = 400 - Math.random() * 400;
    width = 60;
    height = 60;
    IMAGES_STAYING = [
        "img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png",
        "img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png",
        "img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png",
        "img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png",
]
    constructor(){
        super().loadImage("img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png");
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