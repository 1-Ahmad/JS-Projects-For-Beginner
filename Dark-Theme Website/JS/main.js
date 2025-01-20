let icon= document.querySelector("#icon") ;
icon.addEventListener("click", ()=>{
  document.body.classList.toggle("dark-theme")
  if( document.body.classList.contains("dark-theme")){
    icon.src= "./imgs/sun.png" ;
  }
  else{
    icon.src= "./imgs/moon.png" ;
  }
}) ;