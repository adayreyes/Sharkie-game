/**
 * @class Heart 
 * @extends StaticObject
 */
class Heart extends StaticObject{
    width = 60;
    height = 60;
    x = 200 + Math.random() * 5000;
    y = 400 - Math.random() * 400;

    constructor(){
        super().loadImage("img/4. Marcadores/green/100_  copia 3.png");
    }
}