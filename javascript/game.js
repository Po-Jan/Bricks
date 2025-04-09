let gameEnded = true;
let playerEnabled = false;


let speed = 3;
let prevDx;
let prevDy;

const startButton = document.querySelector("#startButton");
const difficultyButton = document.querySelector("#difficultyToggle");
const pause = document.querySelector("#pauseButton");
const leaderboardButton = document.querySelector("#leaderboardButton");

function startGame() {
    if (gameEnded) {
        dx = speed;
        dy = -speed;
        gameEnded = false;
        points = 0;
        startTimer();
        displayPoints();
        displayDifficulty();
        enablePlayerControls();
        startButton.classList.add("opacity");
        difficultyButton.classList.add("opacity");
        leaderboardButton.classList.add("opacity");
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
    startButton.classList.remove("opacity");
    difficultyButton.classList.remove("opacity");
    leaderboardButton.classList.remove("opacity");
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

    ctx.clearRect(0, 0, canvas.width, canvas.height);


    drawBall();
    drawPaddle();
    drawBricks();
    collisionDetection();
    collisionDetectionForBricks();


    if (playerEnabled) {
        if (leftPressed && paddleX > 0) {
            paddleX -= 7;
        } else if (rightPressed && paddleX < canvas.width - paddleWidth) {
            paddleX += 7;
        }
    }


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

    if (nextY + ballRadius > canvas.height) {
        loseGame();
        return;
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