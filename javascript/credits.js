

   swal({
      title: " Credits:",
      text: "\nJan Poljšak, 4. Ra\nInspired by the puzzle game Braid\n Teacher: Boštjan Vouk",
      icon: "info",
      buttons: {
         confirm: {
            text: "Okay!",
            className: "swal-button"
         }
      }
   });

   // Add the class "swCredits" to the modal after it's created
   setTimeout(() => {
      let swalModal = document.querySelector(".swal-modal");
      if (swalModal) {
         swalModal.classList.add("swCredits");
      }
   }, 100); // Small delay to ensure the modal exists





canvas.addEventListener("click", onCanvasClick, false);

function onCanvasClick(e) {
   var mouseX = e.offsetX;
   var mouseY = e.offsetY;

   // Check if the click is inside the ball's current position (simple bounding box check)
   var distance = Math.sqrt((mouseX - x) * (mouseX - x) + (mouseY - y) * (mouseY - y));

   if (distance < ballRadius) {
       console.log("Ball clicked!");

   }
}