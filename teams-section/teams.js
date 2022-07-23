



const dropDown=document.getElementById("dropDown")
const showdropDown=document.getElementById("showdropDown")
const hidedropDown=document.getElementById("hidedropDown")


showdropDown.addEventListener("click",()=>{
    dropDown.style.display="block"
    showdropDown.style.display="none"
    hidedropDown.style.display="block"
})
hidedropDown.addEventListener("click",()=>{
    hidedropDown.style.display="none"
    showdropDown.style.display="block"
    dropDown.style.display="none"
})

const freefireBox=document.getElementById("freefireBox")
const pubgBox=document.getElementById("pubgBox")
freefireBox.addEventListener("click",()=>{
    gameLabel.classList.add("labelforGameActive")
    gameInput.classList.add("inputforGameActive")
    gameInput.setAttribute('value','Free Fire');
})

pubgBox.addEventListener("click",()=>{
    gameLabel.classList.add("labelforGameActive")
    gameInput.classList.add("inputforGameActive")
    gameInput.setAttribute('value','Pubg');

})




const gameInput=document.getElementById("gameInput")
const gameLabel=document.getElementById("gameLabel")

gameInput.addEventListener('focusin',()=>{
    gameLabel.classList.add("labelforGameActive")
    gameInput.classList.add("inputforGameActive")
  
})



gameInput.addEventListener("focusout",()=>{
    if(gameInput.value.length>=1){
        gameLabel.classList.add("labelforGameActive")
        gameInput.classList.add("inputforGameActive")
    }
    else{
        gameLabel.classList.remove("labelforGameActive")
        gameInput.classList.remove("inputforGameActive")
    }
})





const gameUserInput=document.getElementById("gameUserInput")
const gameUserLabel=document.getElementById("gameUserLabel")



gameUserInput.addEventListener('focusin',()=>{
    gameUserLabel.classList.add("InGamelabelActive")
    gameUserInput.classList.add("input-for-in-game-user-Active")
})

gameUserInput.addEventListener("focusout",()=>{
    if(gameUserInput.value.length>=1){
       gameUserInput.classList.add("input-for-in-game-user-Active")
       gameUserLabel.classList.add("InGamelabelActive")
    }
    else{
        gameUserInput.classList.remove("input-for-in-game-user-Active")
        gameUserLabel.classList.remove("InGamelabelActive")
    }
})





const UIDInput=document.getElementById("UIDInput")
const UIDLabel=document.getElementById("UIDLabel")

UIDInput.addEventListener('focusin',()=>{
  UIDLabel.classList.add("labelforuidActive")
   UIDInput.classList.add("inputforuidActive")
})


UIDInput.addEventListener('focusout',()=>{


    if(UIDInput.value.length>=1){
        UIDLabel.classList.add("labelforuidActive")
        UIDInput.classList.add("inputforuidActive")
    }
    else{
        UIDLabel.classList.remove("labelforuidActive")
        UIDInput.classList.remove("inputforuidActive")
    }


})
