var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//kreiranje žoge
var x = canvas.width / 2;
var y = canvas.height - 100;
var dx = 2;
var dy = -2;
var ballColor = "#0095DD"
var ballRadius = 10;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = ballColor; //"#0095DD"
    ctx.fill();
    ctx.closePath();
}


//krairanje paddle elementa
var paddleHeight = 20;
var paddleWidth = 170;
var paddleX = (canvas.width - paddleWidth) / 2;
var paddleY = canvas.height - paddleHeight - 30;

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, paddleY, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
//kreiranje brickov
var brickRowCount = 4;
var brickColumnCount = 4;
var brickWidth = 175;
var brickHeight = 50;
var brickPadding = 30;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;
var centeringForumla = canvas.width / 2 - ((brickWidth + brickPadding) * brickRowCount) / 2;


var bricks = [];
for (c = 0; c < brickColumnCount; c++) {
    bricks[c] = [];
    for (r = 0; r < brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
}

function drawBricks() {
    for (c = 0; c < brickColumnCount; c++) {
        for (r = 0; r < brickRowCount; r++) {
            if (bricks[c][r].status == 1) {
                var brickX = centeringForumla + (brickWidth + brickPadding) * r;
                var brickY = brickOffsetTop + (brickHeight + brickPadding) * c;

                // ✅ Fix: Set correct positions in the brick object
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.fillStyle = "#0095DD";
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}

function collisionDetection() {
    if (
        x > paddleX &&
        x < paddleX + paddleWidth &&
        y + ballRadius > paddleY &&
        y - ballRadius < paddleY + paddleHeight
    ) {
        dy = -dy;
    }
}

function collisionDetectionForBricks() {
    for (var c = 0; c < brickColumnCount; c++) {
        for (var r = 0; r < brickRowCount; r++) {
            var b = bricks[c][r];
            if (b.status == 1) {
                var bx = b.x;
                var by = b.y;
                if (
                    x + ballRadius > bx &&
                    x - ballRadius < bx + brickWidth &&
                    y + ballRadius > by &&
                    y - ballRadius < by + brickHeight
                ) {
                    // Prejsna pozicija žoge
                    let prevX = x - dx;
                    if (
                        prevX + ballRadius <= bx ||
                        prevX - ballRadius >= bx + brickWidth
                    ) {
                        dx = -dx;
                    } else {
                        dy = -dy;
                    }

                    b.status = 0;
                }
            }
        }
    }
}




function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();
    drawBricks();
    collisionDetection();
    collisionDetectionForBricks();

    if (leftPressed == true && paddleX > 0)
        paddleX -= 7;

    else if (rightPressed == true && paddleX < canvas.width - paddleWidth)
        paddleX += 7;
    x += dx;
    y += dy;

    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }
}

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

setInterval(draw, 10);