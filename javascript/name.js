let playerName = "";
let isNameActive=true;
function askForPlayerName() {
  swal({
    title: "Please insert your name:",
    content: makeInputField(),
    buttons:  "Start",
    className: "difficulty-popup",
    closeOnClickOutside:false,
    closeOnEsc: false,
  }).then((value) => {
    if (value) {
      const input = document.getElementById("nameInput");
      playerName = input.value.trim() || "Anonymous";
      if(playerName=="Credits")
        Credits();
      document.getElementById("nameShow").textContent = "Name: "+playerName;
      isNameActive=false;
    }
  });
}

function makeInputField() {
  const input = document.createElement("input");
  input.id = "nameInput";
  input.placeholder = "Your name";
  input.type = "text";
  input.className = "swal-content__input";
  input.maxLength=15;
  return input;
}

window.addEventListener("load", () => {
  askForPlayerName();
});