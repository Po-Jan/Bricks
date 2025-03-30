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

function isCollisionDetected() {
    if (
        x > paddleX &&
        x < paddleX + paddleWidth &&
        y + ballRadius > paddleY &&
        y - ballRadius < paddleY + paddleHeight
    ) {
        return true;
    }
    return false;
}


function collisionDetectionForBricks() {
    for (var c = 0; c < brickColumnCount; c++) {
        for (var r = 0; r < brickRowCount; r++) {
            var b = bricks[c][r];
            if (b.status == 1 || b.status == 2) {
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
                    b.status--;

                    if (b.status === 1) {
                        b.brickColor = "#FF0000";
                    } else if (b.status === 0) {
                        points = points + 10;
                        displayPoints();
                    }
                }
            }

        }
    }

}