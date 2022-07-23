const userName=document.getElementById("UserName")
const  labelUsername=document.getElementById("labelUsername")

userName.addEventListener("focusin",()=>{
    labelUsername.classList.add("labelusernameActive")
    userName.style.borderTop="3px solid #fff"
    userName.style.borderTopLeftRadius="20px"
    userName.style.borderTopRightRadius="20px"
    userName.style.transition="0.3s ease-in-out"
      labelUsername.style.fontSize="1.2em"
    

});



userName.addEventListener("focusout",()=>{
    if(userName.value.length>=1){
        labelUsername.classList.add("labelusernameActive")
        userName.style.borderTop="3px solid #fff"
        userName.style.borderTopLeftRadius="20px"
        userName.style.borderTopRightRadius="20px"
        userName.style.transition="0.3s ease-in-out"
        labelUsername.style.fontSize="1.2em"
    }
   else{
    labelUsername.classList.remove("labelusernameActive")
    userName.style.borderTop="0px"
    userName.style.borderTopLeftRadius="0px"
     userName.style.borderTopRightRadius="0px"
     userName.style.transition="0.3s ease-in-out"
     labelUsername.style.fontSize="1em"
   }

    });



const  password=document.getElementById("Password")
const  labelPassword=document.getElementById("labelPassword")



password.addEventListener("focusin",()=>{
   labelPassword.classList.add("labelpasswordActive")
   password.style.borderTop="3px solid #fff"
   password.style.borderTopLeftRadius="20px"
   password.style.borderTopRightRadius="20px"
   password.style.transition="0.3s ease-in-out"
    });
    
    
password.addEventListener('focusout',()=>{
    if(password.value.length>=1){
        labelPassword.classList.add("labelpasswordActive")
        password.style.borderTop="3px solid #fff"
        password.style.borderTopLeftRadius="20px"
        password.style.borderTopRightRadius="20px"
        password.style.transition="0.3s ease-in-out"
    }
    else{
        labelPassword.classList.remove("labelpasswordActive")
        password.style.borderTop="0px"
        password.style.borderTopLeftRadius="0px"
        password.style.borderTopRightRadius="0px"
    }
})


        const submitBtn=document.getElementById("submitBtn")

  submitBtn.addEventListener("click",(e)=>{
    e.preventDefault
  });







  
const  inputName=document.getElementById("inputName")
const  labelName=document.getElementById("labelName")



inputName.addEventListener("focusin",()=>{
    labelName.classList.add("labelnameActive")
    inputName.style.borderTop="3px solid #fff"
    inputName.style.borderTopLeftRadius="20px"
    inputName.style.borderTopRightRadius="20px"
    inputName.style.transition="0.3s ease-in-out"
    });
    
    
    inputName.addEventListener('focusout',()=>{
    if(inputName.value.length>=1){
        labelName.classList.add("labelnameActive")
        inputName.style.borderTop="3px solid #fff"
        inputName.style.borderTopLeftRadius="20px"
        inputName.style.borderTopRightRadius="20px"
        inputName.style.transition="0.3s ease-in-out"
    }
    else{
        labelName.classList.remove("labelnameActive")
        inputName.style.borderTop="0px"
        inputName.style.borderTopLeftRadius="0px"
        inputName.style.borderTopRightRadius="0px"
    }
})


