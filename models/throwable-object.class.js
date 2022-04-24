class ThrowableObject extends MovableObject {
   
    constructor(x,y){
        super().loadImage("img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png");
        this.x = x + 250;
        this.y = y + 170;
        this.width = 40;
        this.height = 40;
        this.throwBubble(100,400);
    }

    throwBubble(){
        setInterval(() => {
            this.x += 10;
        }, 50);
    }
    
}