let imgBox= document.querySelector(".imgBox") ;
let qrImg= document.querySelector("#qrImg") ;
let qrText= document.querySelector("#qrText") ;
function generateQR(){
  if( qrText.value !== ""){
    qrImg.src= `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText.value}` ;
    imgBox.classList.add("show-img") ;
  }
  else{
    qrText.classList.add("error") ;
    setTimeout(()=>{
      qrText.classList.remove("error") ;
    }, 1000)
  }
}