let canvas;
let world;
let keyboard = new Keyboard;
let start = false;

/**
 * this function create the world and get the canvas 
 */
function init(){
    canvas = getById("canvas");
        world = new World(canvas,keyboard);
        checkIfKeyIsPressed(); 
        canvas.style.display = "block";
        document.getElementById("start-button").style.display = "none";
        document.getElementById("explication").style.display = "flex";

}

function starting(){
    world.start = true;
}

function stop(){
    world.stop = true;
}


/**
 * check if a key is pressed
 */
function checkIfKeyIsPressed(){
    document.body.addEventListener("keydown",keyDown);
    document.body.addEventListener("keyup",keyUp);
}

/**
 * Check if the user press one of arrows of the keyboard
 * If so, change the variable at Keyboard @see {@link keyboard.js} to true
 * @param {event} event - 
 */
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
            keyboard.SPACE = true;
            break
            case 68:
                keyboard.D = true;
            break
    }
}

/**
 * Check if the user release one of arrows of the keyboard
 * If so, change the variable at Keyboard @see {@link keyboard.js} to false
 * @param {event} event - 
 */
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
            keyboard.SPACE = false;
            break
        case 68:
            keyboard.D = false;
            break
    }
}

/**
 * with this function we can get the id from an element faster
 * @param {string} id - is the id from the HTML element
 * @returns {HTMLBodyElement} - the element we want to use
 */
function getById(id){
    return document.getElementById(id);
}

