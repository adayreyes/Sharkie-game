let canvas;
let world;
let keyboard = new Keyboard;

function init(){
    canvas = getById("canvas");
    world = new World(canvas,keyboard);
    console.log(world);
    document.body.addEventListener("keydown",keyDown);
    document.body.addEventListener("keyup",keyUp);

    
}

function keyDown(event){
    let key_code = event.keyCode;
    switch (key_code){
        case 37:
            keyboard.LEFT = true;
            break
        case 38:
            keyboard.UP = true;
            break
        case 39:
            keyboard.RIGHT = true;
            break
        case 40:
            keyboard.DOWN = true;
            break
        case 32:
            keyboard.DOWN = true;
            break
    }
}
function keyUp(event){
    let key_code = event.keyCode;
    switch (key_code){
        case 37:
            keyboard.LEFT = false;
            break
        case 38:
            keyboard.UP = false;
            break
        case 39:
            keyboard.RIGHT = false;
            break
        case 40:
            keyboard.DOWN = false;
            break
        case 32:
            keyboard.DOWN = false;
            break
    }
}

function getById(id){
    return document.getElementById(id);
}

