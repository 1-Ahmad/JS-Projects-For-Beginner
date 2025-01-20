let lists= document.querySelectorAll(".list") ;
let rightBox= document.querySelector("#right") ;
let leftBox= document.querySelector("#left") ;
for( let list of lists ){
  list.addEventListener("dragstart", (e)=>{
    let selected= e.currentTarget ;
    rightBox.addEventListener("dragover", (el)=>{
      el.preventDefault() ;
    }) ;
    rightBox.addEventListener("drop", (e)=>{
      e.currentTarget.appendChild(selected) ;
      selected= null ;
    })
    leftBox.addEventListener("dragover", (el)=>{
      el.preventDefault() ;
    }) ;
    leftBox.addEventListener("drop", (e)=>{
      e.currentTarget.appendChild(selected) ;
      selected= null ;
    })
  })
}