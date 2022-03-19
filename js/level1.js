const LEVEL1 = new Level(
    [new PufferFish, new PufferFish, new PufferFish, new JellyFish,new JellyFish,new JellyFish],
    {coins:[new Coin(300,400),new Coin(350,350),new Coin(400,300),new Coin(450,350),new Coin(500,400)],poisons:[new Poison(300),new Poison(550)]},
    [
        new BackgroundObject("img/3. Background/Dark/1.png",-720,0),
        new BackgroundObject("img/3. Background/Dark/2.png",0,0),
        new BackgroundObject("img/3. Background/Dark/1.png",720,0),
        new BackgroundObject("img/3. Background/Dark/2.png",720*2,0),
        new BackgroundObject("img/3. Background/Dark/1.png",720*3,0),
        new BackgroundObject("img/3. Background/Dark/2.png",720*4,0),
        new BackgroundObject("img/3. Background/Dark/1.png",720*5,0),
        new BackgroundObject("img/3. Background/Dark/2.png",720*6,0),
     
    ]
);