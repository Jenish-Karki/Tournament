const leftSlider=document.getElementById("leftSlider")

const bringSlider=document.getElementById("bringSlider")

const hideSlider=document.getElementById("hideSlider")

const body=document.getElementById("body")

const welcomeContainer=document.getElementById("welcomeContainer")

const transform=document.getElementById("transform")

const loginBtn=document.getElementById("loginBtn")

const RegisterBtn=document.getElementById("RegisterBtn")

const ORtext=document.getElementById("ORtext")

const seeBtn=document.querySelectorAll(".see")

const eventOne=document.querySelectorAll(".eventOne")

const seeMoreBtn=document.getElementById("seeMoreBtn")

const text=document.getElementById("text")


bringSlider.addEventListener("click",()=>{
    leftSlider.classList.add("sliderActive")
    hideSlider.style.display="block"
    bringSlider.style.display="none"
    body.classList.add("bodyActive")
   loginBtn.style.display="none"
   RegisterBtn.style.display="none"
   ORtext.style.display="none"
   seeBtn[0].style.display="none"
   seeBtn[1].style.display="none"
   seeBtn[2].style.display="none"
   seeBtn[3].style.display="none"
   seeBtn[4].style.display="none"
   seeBtn[5].style.display="none"
   seeBtn[6].style.display="none"
   seeBtn[7].style.display="none"
  
})
hideSlider.addEventListener("click",()=>{
    leftSlider.classList.remove("sliderActive")
   hideSlider.style.display="none"
   bringSlider.style.display="block"
   body.classList.remove("bodyActive")
   loginBtn.style.display="block"
   RegisterBtn.style.display="block"
   ORtext.style.display="block"
   seeBtn[0].style.display="block"
   seeBtn[1].style.display="block"
   seeBtn[2].style.display="block"
   seeBtn[3].style.display="block"
   seeBtn[4].style.display="block"
   seeBtn[5].style.display="block"
   seeBtn[6].style.display="block"
   seeBtn[7].style.display="block"
})



















const createBtn=document.getElementById("createAccuountBtn")
const createAccoutnsContainer=document.getElementById("createAccoutnsContainer")
