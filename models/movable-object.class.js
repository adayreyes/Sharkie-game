class MovableObject{
    x;
    y;
    img;
    width;
    height;

    loadImage(path){
        this.img = new Image();
        this.img.src = path
    }

    moveRIght(){
        console.log("move right");
    }
}