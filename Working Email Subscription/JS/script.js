let msg = document.querySelector("#msg")
const scriptURL = "https://script.google.com/macros/s/AKfycbwouFDtK3sPPnwFTeJIda_zZHycKgwVwbUejtGPxdN3ZrVlfutlX31dDrWnd_TI5DBoqQ/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) =>{
      msg.innerHTML= "Thank You For Subscribing!" ;
      setTimeout(() => {
        msg.innerHTML= "" ;
      }, 5000);
      form.reset() ;
    })
    .catch((error) => console.error("Error!", error.message));
});