class World{
    character = new Character();
    enemies = [new PufferFish, new PufferFish, new PufferFish, new JellyFish,new JellyFish,new JellyFish]
    items = {coins:[new Coin(300,400),new Coin(350,350),new Coin(400,300),new Coin(450,350),new Coin(500,400)],poisons:[new Poison(200),new Poison(500)]};
    ctx;
    background_objects = [
        new BackgroundObject("img/3. Background/Dark/1.png",0,0),
    ];
    layer1 = new Image();
    canvas;
    
    constructor(canvas){
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas;
        this.draw();
        this.layer1.src = "img/3. Background/Layers/1. Light/1.png";
        
    }
    
    

    draw(){
        this.ctx.clearRect(0,0, this.canvas.width,this.canvas.height);
        this.ctx.drawImage(this.layer1,0,0,this.canvas.width,this.canvas.height);
        this.addObjectsToMap(this.background_objects);
        this.ctx.drawImage(this.character.img,this.character.x,this.character.y,this.character.width,this.character.height);
        this.addObjectsToMap(this.enemies);
        this.addObjectsToMap(this.items.coins);
        this.addObjectsToMap(this.items.poisons);
        
        
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
        this.ctx.drawImage(mo.img,mo.x,mo.y,mo.width,mo.height)
    }
}