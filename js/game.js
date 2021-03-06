/**
 * Canvas
 * @type {HTMLCanvasElement}
 */
let canvas;

/**
 * Main variable for the game.
 * @type {Object}
 */
let world;

/**
 * Used for the movements of Sharkie
 * @see {@link game#checkIfKeyIsPressed}
 * @type {Object}
 */
let keyboard = new Keyboard();

/**
 * Used to start the game.
 * @type {Boolean}
 */
let start = false;

/**
 * Main sound of the game
 * @type {Audio}
 */
let game_sound = new Audio("audio/game.mp3");

/**
 * Allows {@link game#game_sound} to repeat.
 */
game_sound.loop = true;

/**
 * Used for the detection of mobile devices.
 * @see {@link game#checkMobil}
 */
var isMobile = false; 

checkMobil();

/**
 * Check if the client is using a mobile device.
 */
function checkMobil(){
    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
        isMobile = true;
    }
}

/**
 * this function create the world and get the canvas if a mobile device is not being used. 
 */
function init(){
    if(!isMobile){
        canvas = getById("canvas");
        world = new World(canvas,keyboard);
    } else{
        cannotPlay();
    }
    
}

/**
 * Hide all content from the page and show a message.
 */
function cannotPlay(){
    getById("explication").style.display = "none";
    getById("start-button").style.display = "none";
    getById("instructions").style.display = "none";
    document.body.style.height = "100vh";
    getById("cannot").style.display = "flex";
}

/**
 * Check if the client click on the "try again" botton.
 */
function checkIfRestartIsPressed(){
    canvas.addEventListener("mousedown", function(e)
    {
        getMousePosition(canvas,e);
    });
}; 

/**
 * Used to see the canvas in full screen.
 */
function goFullScreen(){
    if(canvas.requestFullScreen)
        canvas.requestFullScreen();
    else if(canvas.webkitRequestFullScreen)
        canvas.webkitRequestFullScreen();
    else if(canvas.mozRequestFullScreen)
        canvas.mozRequestFullScreen();
}

/**
 * Starts the game.
 */
function starting(){
    if(!isMobile){
        world.start = true;
        showCanvas();
        checkIfKeyIsPressed();
        game_sound.play();
    }
}

/**
 * Show the canvas and hide the other HTML elements.
 */
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

/**
 * Get the position of the mouse on the canvas.
 * Reload the page if the client clicks on the right position ("try again" button).
 * @param {Event} event 
 */
function getMousePosition(event) {
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

