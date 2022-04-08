/**
 * @constant LEVEL1
 * @type {object}
 */
const LEVEL1 = new Level(
    [new PufferFish, new PufferFish, new PufferFish, new JellyFish,new JellyFish,new JellyFish,new PufferFish,new JellyFish,new PufferFish,new JellyFish,new PufferFish,new JellyFish,new PufferFish,new JellyFish,new PufferFish,new JellyFish,new PufferFish,new JellyFish,new PufferFish,new JellyFish,new PufferFish,new JellyFish,new PufferFish,new JellyFish,new PufferFish,new JellyFish,new PufferFish,new JellyFish,new PufferFish,new JellyFish,new PufferFish,new JellyFish,new PufferFish,new JellyFish,new PufferFish,new JellyFish,new PufferFish,new JellyFish,new PufferFish,new JellyFish],
    new Endboss,
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
    [new Healthbar(-10, [" img/4. Marcadores/green/Life/100_  copia 2.png",
    "img/4. Marcadores/green/Life/80_  copia 3.png",
    "img/4. Marcadores/green/Life/60_  copia 3.png",
    "img/4. Marcadores/green/Life/40_  copia 3.png",
    " img/4. Marcadores/green/Life/20_ copia 4.png",
    "img/4. Marcadores/green/Life/0_  copia 3.png"]),new Poisonbar(20,  ["img/4. Marcadores/green/poisoned bubbles/0_ copia 2.png",
       " img/4. Marcadores/green/poisoned bubbles/20_ copia 3.png",
        "img/4. Marcadores/green/poisoned bubbles/40_ copia 2.png",
       " img/4. Marcadores/green/poisoned bubbles/60_ copia 2.png",
        "img/4. Marcadores/green/poisoned bubbles/80_ copia 2.png",
        "img/4. Marcadores/green/poisoned bubbles/100_ copia 3.png"]),new Coinbar(50,["img/4. Marcadores/green/Coin/0_  copia 4.png",
        "img/4. Marcadores/green/Coin/20_  copia 2.png",
       " img/4. Marcadores/green/Coin/40_  copia 4.png",
        "img/4. Marcadores/green/Coin/60_  copia 4.png",
        "img/4. Marcadores/green/Coin/80_  copia 4.png",
        "img/4. Marcadores/green/Coin/100_ copia 4.png"])]
   
);