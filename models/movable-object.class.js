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
    draw(ctx){
        ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
    }
    drawFrame(ctx){
        ctx.beginPath();
        ctx.lineWidth = "5";
        ctx.strokeStyle = "blue";
        ctx.rect(this.x,this.y,this.width,this.height);
        ctx.stroke();
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
    drawImages(images){
        let i = this.current_img % images.length;
        let path = images[i];
        this.img = this.image_cache[path];
        this.current_img++;
    }
}