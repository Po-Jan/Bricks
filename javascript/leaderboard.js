const leadeaboardButton = document.querySelector("#leaderboardButton");
const leaderboard = document.querySelector(".leaderboard");
let isLeaderBoardActive = false;



document.addEventListener("click", (event) => {
    const isClickInside = leaderboard.contains(event.target) || leadeaboardButton.contains(event.target);

    if (isLeaderBoardActive && !isClickInside) {
        leaderboard.classList.add("displayNone");
        isLeaderBoardActive = false;
    }
});

leadeaboardButton.addEventListener("click", (event) => {
    if (gameEnded) {
        const isHidden = leaderboard.classList.contains("displayNone");

        if (isHidden) {
            renderLeaderboard();
            leaderboard.classList.remove("displayNone");
            isLeaderBoardActive = true;
        } else {
            leaderboard.classList.add("displayNone");
            isLeaderBoardActive = false;
        }
    }

    event.stopPropagation();
});

function disableLeaderboard() {
    leaderboard.classList.add("displayNone");
    isLeaderBoardActive = false;
}

function saveScore() {
    let leaderboardData = JSON.parse(localStorage.getItem("leaderboardData")) || [];
    leaderboardData.push({ name: playerName, score: points, difficulty: difficultyVariable });
    leaderboardData.sort((a, b) => b.score - a.score);
    localStorage.setItem("leaderboardData", JSON.stringify(leaderboardData));
}

function renderLeaderboard() {
    const data = JSON.parse(localStorage.getItem("leaderboardData")) || [];
    leaderboard.innerHTML = `
    <div class="header">
        <span>Rk</span>
        <span>Name</span>
        <span>Difficulty</span>
        <span>Points</span>
    </div>`;

    if (data.length === 0) {
        const emptyRow = document.createElement("div");
        emptyRow.style.gridColumn = "1 / -1"; // Make it span all columns
        emptyRow.style.textAlign = "center";
        emptyRow.style.padding = "10px 0";
        emptyRow.textContent = "No scores yet.";
        leaderboard.appendChild(emptyRow);

    }

    data.forEach((entry, index) => {
        const row = document.createElement("div");
        row.innerHTML = `
        <span>${index + 1}</span>
        <span>${entry.name}</span>
        <span>${entry.difficulty}</span>
        <span>${entry.score}</span>`;

        leaderboard.appendChild(row);
    });
}
