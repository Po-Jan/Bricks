let gameEnded = true;
let playerEnabled = false;


let speed = 3;
let prevDx;
let prevDy;


function startGame() {
    if (gameEnded) {
        dx = speed;
        dy = -speed*1.3;
        gameEnded = false;
        points = 0;
        startTimer();
        displayPoints();
        displayDifficulty();
        enablePlayerControls();
    }
}

function resetGame() {
    saveScore();
    gameEnded = true;
    dx = 0;
    dy = 0;
    resetBall();
    resetPaddle();
    resetBricks();
    resetTimer();
    disablePlayerControls();
}



function pauseGame() {
    prevDx = dx;
    prevDy = dy;
    dx = 0;
    dy = 0;
    disablePlayerControls();
    stopTimer();
}

function unPauseGame() {
    dx = prevDx;
    dy = prevDy;
    enablePlayerControls();
    startTimer();
}

function winGame() {
    winGameSW();
    resetGame();
}

function winGameSW() {

    swal({
        title: "🎉 Congrats",
        text:
            "You have destroyed all the bricks!\n\nSummary:\nPoints: " +
            points +
            "\nDifficulty: " +
            difficultyVariable + "\nTime spent: " + formatted + "s",
        icon: "success",
        buttons: {
            confirm: {
                text: "Play Again",
                className: "win-button",
            },
        },
        className: "win-popup",
    });
}


function loseGame() {
    loseGameSW();
    resetGame();
}

function loseGameSW() {
    swal({
        title: "You lose",
        text: "Try again!\nThe ball hit the bottom.\n\nSummary:\nPoints: " +
            points +
            "\nDifficulty: " +
            difficultyVariable + "\n Time spent: " + formatted + "s",
        icon: "error",
        buttons: {
            confirm: {
                text: "Retry",
                className: "lose-button",
            },
        },
        className: "lose-popup",
    });
}

function hasGameEnded() {
    for (var c = 0; c < brickColumnCount; c++) {
        for (var r = 0; r < brickRowCount; r++) {
            var b = bricks[c][r];
            if (b.status === 1 || b.status === 2) {
                return false;
            }
        }
    }
    return true;
}

function enablePlayerControls() {
    playerEnabled = true;
}

function disablePlayerControls() {
    playerEnabled = false;
}



function draw() {
    if (gameEnded) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw elements
    drawBall();
    drawPaddle();
    drawBricks();
    collisionDetection();
    collisionDetectionForBricks();

    // Player control (paddle movement)
    if (playerEnabled) {
        if (leftPressed && paddleX > 0) {
            paddleX -= 7;
        } else if (rightPressed && paddleX < canvas.width - paddleWidth) {
            paddleX += 7;
        }
    }

    // === Predict next ball position ===
    let nextX = x + dx;
    let nextY = y + dy;

    // Wall collision: left & right
    if (nextX > canvas.width - ballRadius || nextX < ballRadius) {
        dx = -dx;
    }

    // Top wall collision
    if (nextY < ballRadius) {
        dy = -dy;
    }

    // Bottom wall / Paddle collision
    else if (nextY > canvas.height - ballRadius) {
        if (x > paddleX && x < paddleX + paddleWidth) {
            // Hit paddle: bounce up and adjust dx based on hit location
            dy = -dy;
            dx = 8 * ((x - (paddleX + paddleWidth / 2)) / paddleWidth);
        } else {
            // Missed paddle
            loseGame();
            return;
        }
    }

    // Move ball AFTER all collision handling
    x += dx;
    y += dy;

    // Win condition check
    if (hasGameEnded()) {
        winGame();
        return;
    }
}



function gameLoop() {
    draw();
    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);