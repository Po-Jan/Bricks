var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


var brickRowCount = 5;
var brickColumnCount = 4;
var brickWidth = 180;
var brickHeight = 30;
var brickPadding = 10;
var brickOffsetTop = 15;
var brickOffsetLeft = 20;

var bricks = [];
let brickImage=new Image();
brickImage.src="assets/brick.png";

let brickImageCracked = new Image();
brickImageCracked.src = "assets/brickCracked.png";

for (let c = 0; c < brickColumnCount; c++) {
    bricks[c] = [];
    for (let r = 0; r < brickRowCount; r++) {
        bricks[c][r] = {x: 0,y: 0,status: 2, image:brickImage};
    }
}
function drawBricks() {
    const totalBricksWidth = brickRowCount * brickWidth + (brickRowCount - 1) * brickPadding;
    const brickOffsetLeft = (canvas.width - totalBricksWidth) / 2;

    for (let c = 0; c < brickColumnCount; c++) {
        for (let r = 0; r < brickRowCount; r++) {
            const b = bricks[c][r];

            if (b.status === 1 || b.status === 2) {
                const brickX = brickOffsetLeft + (brickWidth + brickPadding) * r;
                const brickY = brickOffsetTop + (brickHeight + brickPadding) * c;

                b.x = brickX;
                b.y = brickY;

                ctx.beginPath();
                ctx.drawImage(b.image, b.x, b.y, brickWidth, brickHeight);
                ctx.closePath();
            }
        }
    }
}

function resetBricks() {
    for (let c = 0; c < brickColumnCount; c++) {
        bricks[c] = [];
        for (let r = 0; r < brickRowCount; r++) {
            bricks[c][r] = {x: 0,y: 0,status: 2, image:brickImage};
        }
    }
}


function destroyBricks(){
        for (c = 0; c < brickColumnCount; c++) {
            bricks[c] = [];
            for (r = 0; r < brickRowCount; r++) {
                bricks[c][r] = { x: 0, y: 0, status: 0, image:brickImage};
            }
        } 
}

let points = 0;
const score = document.querySelector(".score");
function displayPoints() {
    score.textContent = "Score: " + points;
}

let difficultyVariable = "easy";
const setText = document.querySelector(".difficulty");
function displayDifficulty() {
    setText.textContent = "Difficulty: " + difficultyVariable;
}



