//krairanje paddle elementa
var paddleHeight = 20;
var paddleWidth = 170;
var paddleX = (canvas.width - paddleWidth) / 2;
var paddleY = canvas.height - paddleHeight;

let paddleImage=new Image();
paddleImage.src="assets/vaservaga.png"

function drawPaddle() {
    ctx.beginPath();
    ctx.drawImage(paddleImage,paddleX, paddleY, paddleWidth, paddleHeight);
    ctx.closePath();
}

function resetPaddle() {
    paddleX = (canvas.width - paddleWidth) / 2;
    paddleY = canvas.height - paddleHeight;
}
