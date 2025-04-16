
function Credits(){
   swal({
      title: " Credits:",
      text: "\nJan Poljšak, 4. Ra\nA cool game about bricks\n Teacher: Boštjan Vouk",
      icon: "info",
      buttons: {
         confirm: {
            text: "Okay!",
            className: "swal-button"
         }
      }
   });
   setTimeout(() => {
      let swalModal = document.querySelector(".swal-modal");
      if (swalModal) {
         swalModal.classList.add("swCredits");
      }
   }, 100);


}

