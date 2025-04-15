var rightPressed = false;
var leftPressed = false;


document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);


function keyDownHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = true;
    }
    else if (e.keyCode == 37) {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = false;
    }
    else if (e.keyCode == 37) {
        leftPressed = false;
    }
}




document.addEventListener("keydown", keyDownPause, false);

function keyDownPause(e){
    if(e.key.toLowerCase() =='p'){
        pauseUnpause();
    }
}

document.addEventListener("keydown", keyDownStart, false);

    function keyDownStart(e){
        if(!isLeaderBoardActive&&!isNameActive)
            if(e.key.toLowerCase() =='s'){
                startGame();
        }
    }


    function disableAllKeys() {
        window.addEventListener('keydown', blockKey, true);
        window.addEventListener('keyup', blockKey, true);
        window.addEventListener('keypress', blockKey, true);
    }
    
    function blockKey(e) {
        e.preventDefault();
        e.stopPropagation();
    }
    
    function enableAllKeys() {
        window.removeEventListener('keydown', blockKey, true);
        window.removeEventListener('keyup', blockKey, true);
        window.removeEventListener('keypress', blockKey, true);
    }
    