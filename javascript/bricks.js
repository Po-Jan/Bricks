var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


//kreiranje brickov
var brickRowCount = 1;
var brickColumnCount = 1;
var brickWidth = 555;
var brickHeight = 30;
var brickPadding = 30;
var brickOffsetTop = 15;
var brickOffsetLeft = 20;
var brickColor = "#0095DD";


var bricks = [];
for (c = 0; c < brickColumnCount; c++) {
    bricks[c] = [];
    for (r = 0; r < brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 2, brickColor: "#0095DD" };
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
    for (c = 0; c < brickColumnCount; c++) {
        bricks[c] = [];
        for (r = 0; r < brickRowCount; r++) {
            bricks[c][r] = { x: 0, y: 0, status: 2, brickColor: "#0095DD" };
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



