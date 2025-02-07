let productImg= document.querySelector("#productImg") ;
let btns= document.querySelectorAll(".btn") ;
btns.forEach((e, ind)=>{
  e.addEventListener("click", ()=>{
    btns.forEach((el)=>{
      el.classList.remove("active") ;
    })
    e.classList.add("active") ;
    productImg.src= `./Imgs/image${ind+1}.png`
  })
})