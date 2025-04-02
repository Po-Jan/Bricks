//kreiranje žoge
var x = canvas.width / 2;
var y = canvas.height - 100;
var dx;
var dy;

var ballColor = "green"
var ballRadius = 10;



function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = ballColor; 
    ctx.fill();
    ctx.closePath();
}

function resetBall() {
    x = canvas.width / 2;
    y = canvas.height - 100;
    dx = speed;
    dy = -speed*1.3;
}
