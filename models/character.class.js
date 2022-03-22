class Character extends MovableObject{
    x = -40;
    y = 60;
    width = 300;
    speed = 10;
    height = 300;
    IMAGES_STAYING = ["img/1.Sharkie/3.Swim/1.png",
    "img/1.Sharkie/3.Swim/2.png",
    "img/1.Sharkie/3.Swim/3.png",
    "img/1.Sharkie/3.Swim/4.png",
    "img/1.Sharkie/3.Swim/5.png",
    "img/1.Sharkie/3.Swim/6.png"];
    world;
    swimming_sound = new Audio("audio/swimming.mp3");
    constructor(){
        super().loadImage("img/1.Sharkie/3.Swim/1.png");
        this.loadImages(this.IMAGES_STAYING);
        this.animate();
    }
    
    animate(){
        
        setInterval(()=>{
            
            if(this.world.keyboard.RIGHT && this.x < 4300){
                this.other_direction = false;
                this.x += this.speed;
                this.swimming_sound.play();
            }
            if(this.world.keyboard.LEFT && this.x > -700){
                this.other_direction = true;
                this.x -= this.speed;
                this.swimming_sound.play();
 
            }
            if(this.world.keyboard.UP && this.y > -140){
                this.y -= this.speed;
                this.swimming_sound.play();
 
            }
            if(this.world.keyboard.DOWN && this.y < 250){
                this.y += this.speed;
                this.swimming_sound.play();
 
            }
            this.world.camera_x = -this.x;
        }, 1000/60)
       

        setInterval(()=>{
            if(this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN){
                this.drawImages(this.IMAGES_STAYING)
            }
        },150)
        
    }


   
}

