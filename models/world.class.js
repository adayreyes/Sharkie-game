class World{
    character = new Character();
    ctx;
    level = LEVEL1;
    canvas;
    keyboard;
    camera_x = 0;
    
    
    constructor(canvas,keyboard){
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        
    }
    
    setWorld(){
        this.character.world = this;
    }
    

    draw(){
        this.ctx.clearRect(0,0, this.canvas.width,this.canvas.height);
        this.ctx.translate(this.camera_x,0);
        this.addObjectsToMap(this.level.background_objects);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.items.coins);
        this.addObjectsToMap(this.level.items.poisons);
        this.ctx.translate(-this.camera_x,0);
        
        let self = this;
        requestAnimationFrame(function() {
            self.draw()
        })
    }
    
   

    addObjectsToMap(objects){
        objects.forEach(obj => {
            this.addToMap(obj)
        })
    }
    addToMap(mo) {
        if(mo.other_direction){
           this.flipImage(mo);
        } 
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);
        if(mo.other_direction){
           this.flipImageBack(mo);
            
        }
        
    }
    flipImage(mo){
        this.ctx.save();
        this.ctx.translate(mo.width,0);
        this.ctx.scale(-1,1);
        mo.x = mo.x * -1;
    }
    flipImageBack(mo){
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}