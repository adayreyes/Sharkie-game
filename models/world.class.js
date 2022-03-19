class World{
    character = new Character();
    enemies = [new PufferFish, new PufferFish, new PufferFish, new JellyFish,new JellyFish,new JellyFish]
    items = {coins:[new Coin,new Coin,new Coin,new Coin,new Coin,],poisons:[new Poison,new Poison]};
    ctx;
    background = new Image();
    layer1 = new Image();
    canvas;

    constructor(canvas){
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas;
        this.draw();
        this.background.src = "img/3. Background/Dark/1.png";
        this.layer1.src = "img/3. Background/Layers/1. Light/1.png";
        
    }
    moveCharacter(event){
        console.log(event)
    }
    draw(){
        this.ctx.clearRect(0,0, this.canvas.width,this.canvas.height);
        this.ctx.drawImage(this.background,0,0,this.canvas.width,this.canvas.height);
        this.ctx.drawImage(this.layer1,0,0,this.canvas.width,this.canvas.height);
        this.ctx.drawImage(this.character.img,this.character.x,this.character.y,this.character.width,this.character.height);
        this.enemies.forEach(enemy =>{
            this.ctx.drawImage(enemy.img,enemy.x,enemy.y,enemy.width,enemy.height)
        })
        
        for (let i = 0, j = 0; i < this.items.coins.length; i++, j+=40) {
            const coin = this.items.coins[i];
            this.ctx.drawImage(coin.img,coin.x + j,coin.y - j,coin.width,coin.height);
        }
        for (let i = 0, j = 0; i < this.items.poisons.length; i++, j += 300) {
            const coin = this.items.poisons[i];
            this.ctx.drawImage(coin.img,coin.x + j,coin.y,coin.width,coin.height);
        }
    
        let self = this;
        requestAnimationFrame(function() {
            self.draw()
        })
    }
}