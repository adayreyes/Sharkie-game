let canvas;
let world;
let keyboard = new Keyboard;
let start = false;
let game_sound = new Audio("audio/game.mp3");
game_sound.loop = true;

/**
 * this function create the world and get the canvas 
 */
function init(){
    canvas = getById("canvas");
    world = new World(canvas,keyboard);
    
}

function checkIfRestartIsPressed(){
    canvas.addEventListener("mousedown", function(e)
    {
        getMousePosition(canvas,e);
    });
}; 

function goFullScreen(){
    if(canvas.requestFullScreen)
        canvas.requestFullScreen();
    else if(canvas.webkitRequestFullScreen)
        canvas.webkitRequestFullScreen();
    else if(canvas.mozRequestFullScreen)
        canvas.mozRequestFullScreen();
}

function starting(){
    world.start = true;
    showCanvas();
    checkIfKeyIsPressed();
    game_sound.play();
}

function showCanvas(){
    canvas.style.display = "block";
    getById("start-button").style.display = "none";
    getById("explication").style.display = "none";
    getById("instructions").style.display = "none";
    getById("small-instructions").style.display = "flex";
}

/**
 * check if a key is pressed
 */
function checkIfKeyIsPressed(){
    document.body.addEventListener("keydown",keyDown);
    document.body.addEventListener("keyup",keyUp);
}

function getMousePosition(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    if(x < canvas.clientWidth * 0.708 && x > canvas.clientWidth * 0.292 && y > canvas.clientHeight * 0.75 && y < canvas.clientHeight * 0.92){
        window.location.reload(false);
    }
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

