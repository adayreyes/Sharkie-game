let canvas;
let world;


function init(){
    canvas = getById("canvas");
    world = new World(canvas);
    console.log(world);
    
}

function moveCharacter(event){
    console.log("hola")
}




function getById(id){
    return document.getElementById(id);
}