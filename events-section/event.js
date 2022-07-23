const leftSlider=document.getElementById("leftSlider")

const bringSlider=document.getElementById("bringSlider")

const hideSlider=document.getElementById("hideSlider")

const body=document.getElementById("body")


const seeBtn=document.querySelectorAll(".see")

const eventOne=document.querySelectorAll(".eventOne")

const seeMoreBtn=document.getElementById("seeMoreBtn")
const eventContainer=document.getElementById("eventContainer")

bringSlider.addEventListener("click",()=>{
    leftSlider.classList.add("sliderActive")
    hideSlider.style.display="block"
    bringSlider.style.display="none"
    body.classList.add("bodyActive")
   seeBtn[0].style.display="none"
   seeBtn[1].style.display="none"



   if(body.classList.contains="bodyActive"){
   eventContainer.style.transform = 'scale(0.7)';
   }

  
})
hideSlider.addEventListener("click",()=>{
    leftSlider.classList.remove("sliderActive")
   hideSlider.style.display="none"
   bringSlider.style.display="block"
   body.classList.remove("bodyActive")
   seeBtn[0].style.display="block"
   seeBtn[1].style.display="block"
 
if(body.classList.contains="bodyActive"){
    eventContainer.style.transform = 'scale(0.9)';
}


})



