/**
 * @class ThrowableObject
 * @extends MovableObject
 */
class ThrowableObject extends MovableObject {
   
    constructor(x,y,bool){
        super().loadImage("img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png");
        this.x = x + 250;
        this.y = y + 170;
        this.width = 40;
        this.height = 40;
        this.throwBubble(100,400);
        this.other_direction = bool;
    }
    
    /**
     * Play animation of the bubble moving.
     * @see {@link World#setNewBubble}
     */
    throwBubble(){
        setInterval(() => {
            if(this.other_direction){
                this.x -= 10;
            } else{
                this.x += 10;
            }
        }, 50);
    }
    
}