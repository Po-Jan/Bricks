//krairanje paddle elementa
var paddleHeight = 20;
var paddleWidth = 170;
var paddleX = (canvas.width - paddleWidth) / 2;
var paddleY = canvas.height - paddleHeight;

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, paddleY, paddleWidth, paddleHeight);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();
}

function resetPaddle() {
    paddleX = (canvas.width - paddleWidth) / 2;
    paddleY = canvas.height - paddleHeight;
}
