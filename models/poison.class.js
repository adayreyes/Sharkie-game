class Poison extends MovableObject{
    width = 60;
    height = 80;
    y = 400;
    IMAGES_STAYING = [
        "img/4. Marcadores/Posión/Animada/1.png",
        "img/4. Marcadores/Posión/Animada/2.png",
        "img/4. Marcadores/Posión/Animada/3.png",
        "img/4. Marcadores/Posión/Animada/4.png",
        "img/4. Marcadores/Posión/Animada/5.png",
        "img/4. Marcadores/Posión/Animada/6.png",
        "img/4. Marcadores/Posión/Animada/7.png",
        "img/4. Marcadores/Posión/Animada/8.png",
    ]
    constructor(x){
        super().loadImage("img/4. Marcadores/Posión/Animada/1.png");
        this.x = x;
        this.loadImages(this.IMAGES_STAYING);
        this.animate();
    }
    animate(){
        setInterval(()=>{
            let i = this.current_img % this.IMAGES_STAYING.length;
            let path = this.IMAGES_STAYING[i];
            this.img = this.image_cache[path];
            this.current_img++;
        },200)
        this.current_img++
    }

}