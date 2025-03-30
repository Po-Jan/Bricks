const leadeaboardButton=document.querySelector("#leaderboardButton");
const leaderboard=document.querySelector(".leaderboard");
let isLeaderBoardActive=false;
leadeaboardButton.addEventListener("click",()=>{
    if(gameEnded){
        if(!isLeaderBoardActive){
            leaderboard.classList.remove("displayNone");
            isLeaderBoardActive=true;
        }else{
            leaderboard.classList.add("displayNone");
            isLeaderBoardActive=false;
        }
    }
});
