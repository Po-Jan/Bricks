var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


var brickRowCount = 6;
var brickColumnCount = 4;
var brickWidth = 150;
var brickHeight = 30;
var brickPadding = 10;
var brickOffsetTop = 15;
var brickOffsetLeft = 20;

const jungleColors = [
    "#2e3d27", // deep canopy green
    "#556b2f", // mossy olive
    "#8b5e3c", // earthy clay
    "#5c5b57"  // stone grey
  ];

var bricks = [];
for (let c = 0; c < brickColumnCount; c++) {
    bricks[c] = [];
    for (let r = 0; r < brickRowCount; r++) {
        const randomColor = jungleColors[Math.floor(Math.random() * jungleColors.length)];
        bricks[c][r] = {x: 0,y: 0,status: 2,brickColor: randomColor};
    }
}

function drawBricks() {
    const totalBricksWidth = brickRowCount * brickWidth + (brickRowCount - 1) * brickPadding;
    const brickOffsetLeft = (canvas.width - totalBricksWidth) / 2;

    for (let c = 0; c < brickColumnCount; c++) {
        for (let r = 0; r < brickRowCount; r++) {
            if (bricks[c][r].status == 1 || bricks[c][r].status == 2) {
                const brickX = brickOffsetLeft + (brickWidth + brickPadding) * r;
                const brickY = brickOffsetTop + (brickHeight + brickPadding) * c;

                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;

                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.fillStyle = bricks[c][r].brickColor;
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}
function resetBricks() {
    for (let c = 0; c < brickColumnCount; c++) {
        bricks[c] = [];
        for (let r = 0; r < brickRowCount; r++) {
            const randomColor = jungleColors[Math.floor(Math.random() * jungleColors.length)];
            bricks[c][r] = {x: 0,y: 0,status: 2,brickColor: randomColor};
        }
    }
}


function destroyBricks(){
        for (c = 0; c < brickColumnCount; c++) {
            bricks[c] = [];
            for (r = 0; r < brickRowCount; r++) {
                bricks[c][r] = { x: 0, y: 0, status: 0, brickColor:  "white" };
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



