/**
 * @constant LEVEL1
 * @type {object}
 */
const LEVEL1 = new Level(
    [new PufferFish, new PufferFish, new PufferFish, new JellyFish,new JellyFish,new JellyFish,new PufferFish,new JellyFish,new PufferFish,new JellyFish,new PufferFish,new JellyFish,new PufferFish,new JellyFish,new PufferFish,new JellyFish,new PufferFish,new JellyFish,new PufferFish,new JellyFish,new PufferFish,new JellyFish,new PufferFish,new JellyFish,new PufferFish,new JellyFish,new PufferFish,new JellyFish,new PufferFish,new JellyFish,new PufferFish,new JellyFish,new PufferFish,new JellyFish,new PufferFish,new JellyFish,new PufferFish,new JellyFish,new PufferFish,new JellyFish, new Endboss],
    {coins:[new Coin(),new Coin(),new Coin(),new Coin(),new Coin(),new Coin(),new Coin(),new Coin(),new Coin(),new Coin(),new Coin(),new Coin()],poisons:[new Poison(),new Poison(),new Poison(),new Poison(),new Poison(),new Poison(),new Poison(),new Poison(),new Poison()],hearts:[new Heart,new Heart,new Heart,new Heart,new Heart,new Heart,new Heart,new Heart,]},
    [
        new BackgroundObject("img/3. Background/Dark/1.png",-720,0),
        new BackgroundObject("img/3. Background/Dark/2.png",0,0),
        new BackgroundObject("img/3. Background/Dark/1.png",720,0),
        new BackgroundObject("img/3. Background/Dark/2.png",720*2,0),
        new BackgroundObject("img/3. Background/Dark/1.png",720*3,0),
        new BackgroundObject("img/3. Background/Dark/2.png",720*4,0),
        new BackgroundObject("img/3. Background/Dark/1.png",720*5,0),
        new BackgroundObject("img/3. Background/Dark/2.png",720*6,0),
     
    ],
    [new Statusbar(-10),new Statusbar(20),new Statusbar(50)]
   
);