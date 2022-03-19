class MovableObject{
    x;
    y;
    img;
    width;
    height;
    image_cache = {};
    current_img = 0;
    IMAGES_STAYING;
    speed = 0.15 + Math.random() * 1;
    other_direction = false;

    loadImage(path){
        this.img = new Image();
        this.img.src = path
    }
    loadImages(arr){
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.image_cache[path] = img;
        });

    }

    moveLeft(){
        setInterval(()=>{
            this.x -= this.speed;
        },1000/60)
    }
    moveRight(){
        setInterval(()=>{
            this.x += this.speed;
        },1000/60)
    }
}