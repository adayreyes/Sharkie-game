class Character extends MovableObject{
    x = -50;
    y = 60;
    width = 300;
    height = 300;
    IMAGES_STAYING = ["img/1.Sharkie/3.Swim/1.png",
    "img/1.Sharkie/3.Swim/2.png",
    "img/1.Sharkie/3.Swim/3.png",
    "img/1.Sharkie/3.Swim/4.png",
    "img/1.Sharkie/3.Swim/5.png",
    "img/1.Sharkie/3.Swim/6.png"]
    constructor(){
        super().loadImage("img/1.Sharkie/3.Swim/1.png");
        this.loadImages(this.IMAGES_STAYING);
        this.animate();
    }
    
    animate(){
        setInterval(()=>{
            let i = this.current_img % this.IMAGES_STAYING.length;
            let path = this.IMAGES_STAYING[i];
            this.img = this.image_cache[path];
            this.current_img++;
        },150)
        this.current_img++
    }


   
}

