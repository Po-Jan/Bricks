var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width / 3.3;
var y = canvas.height - 30;
var dx = 5;
var dy = -5;
var ballColor = "gray";

var ballRadius = 10;

function drawBall() {
	ctx.beginPath();
	ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
	ctx.fillStyle = ballColor;
	ctx.fill();
	ctx.closePath();
}



function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawBall();
	x += dx*0.9;
	y += dy;

	if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
		dx = -dx;
	}
	if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
		dy = -dy;
	}
}

setInterval(draw, 12);



