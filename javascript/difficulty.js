document.getElementById("difficultyToggle").addEventListener("click", () => {
  if (gameEnded) {
    swal({
      title: "Pick your difficulty",
      content: makeDropdown(),
      buttons: ["Cancel", "Start"],
      className: "difficulty-popup",
    }).then((confirmed) => {
      if (confirmed) {
        difficultyVariable = document.getElementById("difficultySelect").value;
        displayDifficulty();
        switch (difficultyVariable) {
          case "amateur":
            speed = speed+1;
            break;
          case "hard":
            speed = speed+2;
            break;
          default:
            speed = speed+3;
        }

      }
    });
  }

});
function makeDropdown() {
  const select = document.createElement("select");
  select.id = "difficultySelect";
  select.innerHTML = `
    <option value="easy">Easy</option>
    <option value="amateur">Amateur</option>
    <option value="hard">Hard</option>
  `;
  return select;
}