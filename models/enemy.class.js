/**
 * @class Enemy 
 * @extends MovableObject
 */
class Enemy extends MovableObject{
    x = 800 + Math.random() * 5000;
    y = 400 - Math.random() * 400;
    width = 60;
    height = 60;
}

