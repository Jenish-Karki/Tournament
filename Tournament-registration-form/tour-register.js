const inputActive=document.querySelectorAll("#inputActive")

const alertbox=document.querySelectorAll("#alertbox")




const box=document.querySelectorAll("#box")

const showInput=document.querySelectorAll("#showInput")
const hideInput=document.querySelectorAll("#hideInput")

   
    
    
showInput[0].addEventListener("click",()=>{
    box[0].classList.add("squadActive")
    showInput[0].style.display="none"
    hideInput[0].style.display="block"
})
hideInput[0].addEventListener("click",()=>{
    box[0].classList.remove("squadActive")
    showInput[0].style.display="block"
    hideInput[0].style.display="none"
})
    
    
    inputActive[0].addEventListener('focusin',()=>{
    inputActive[0].classList.add("inputtransform1")
    });
 
inputActive[0].addEventListener('focusout',()=>{
if(inputActive[0].value.length<=0){
    alertbox[0].style.display="flex"
    box[0].style.outline="2px solid tomato"
}
else{
    alertbox[0].style.display="none"
    box[0].style.outline="none"
}

        });
    




    
    
        showInput[1].addEventListener("click",()=>{
            box[1].classList.add("boxOneActive")
            showInput[1].style.display="none"
            hideInput[1].style.display="block"
        })
        hideInput[1].addEventListener("click",()=>{
            box[1].classList.remove("boxOneActive")
            showInput[1].style.display="block"
            hideInput[1].style.display="none"
        })
    
        inputActive[1].addEventListener('focusin',()=>{
            inputActive[1].classList.add("inputtransform1")
            });
         
        inputActive[1].addEventListener('focusout',()=>{
        if(inputActive[1].value.length<=0){
            alertbox[1].style.display="flex"
            box[1].style.outline="2px solid tomato"
        }
        else{
            alertbox[1].style.display="none"
            box[1].style.outline="none"
        }
        
                });





                

    
    
        showInput[2].addEventListener("click",()=>{
            box[2].classList.add("boxOneActive")
            showInput[2].style.display="none"
            hideInput[2].style.display="block"
        })
        hideInput[2].addEventListener("click",()=>{
            box[2].classList.remove("boxOneActive")
            showInput[2].style.display="block"
            hideInput[2].style.display="none"
        })
    
        inputActive[2].addEventListener('focusin',()=>{
            inputActive[2].classList.add("inputtransform1")
            });
         
        inputActive[2].addEventListener('focusout',()=>{
        if(inputActive[2].value.length<=0){
            alertbox[2].style.display="flex"
            box[2].style.outline="2px solid tomato"
        }
        else{
            alertbox[2].style.display="none"
            box[2].style.outline="none"
        }
        
                });


                

    
    
        showInput[3].addEventListener("click",()=>{
            box[3].classList.add("boxOneActive")
            showInput[3].style.display="none"
            hideInput[3].style.display="block"
        })
        hideInput[3].addEventListener("click",()=>{
            box[3].classList.remove("boxOneActive")
            showInput[3].style.display="block"
            hideInput[3].style.display="none"
        })
    
        inputActive[3].addEventListener('focusin',()=>{
            inputActive[3].classList.add("inputtransform1")
            });
         
        inputActive[3].addEventListener('focusout',()=>{
        if(inputActive[3].value.length<=0){
            alertbox[3].style.display="flex"
            box[3].style.outline="2px solid tomato"
        }
        else{
            alertbox[3].style.display="none"
            box[3].style.outline="none"
        }
        
                });
            

                

    
    
        showInput[4].addEventListener("click",()=>{
            box[4].classList.add("boxOneActive")
            showInput[4].style.display="none"
            hideInput[4].style.display="block"
        })
        hideInput[4].addEventListener("click",()=>{
            box[4].classList.remove("boxOneActive")
            showInput[4].style.display="block"
            hideInput[4].style.display="none"
        })
    
        inputActive[4].addEventListener('focusin',()=>{
            inputActive[4].classList.add("inputtransform1")
            });
         
        inputActive[4].addEventListener('focusout',()=>{
        if(inputActive[4].value.length<=0){
            alertbox[4].style.display="flex"
            box[4].style.outline="2px solid tomato"
        }
        else{
            alertbox[4].style.display="none"
            box[4].style.outline="none"
        }
        
                });
















                4    
    
                showInput[5].addEventListener("click",()=>{
                    box[5].classList.add("boxOneActive")
                    showInput[5].style.display="none"
                    hideInput[5].style.display="block"
                })
                hideInput[5].addEventListener("click",()=>{
                    box[5].classList.remove("boxOneActive")
                    showInput[5].style.display="block"
                    hideInput[5].style.display="none"
                })
            
                inputActive[5].addEventListener('focusin',()=>{
                    inputActive[5].classList.add("inputtransform1")
                    });
                 
                inputActive[5].addEventListener('focusout',()=>{
                if(inputActive[5].value.length<=0){
                    alertbox[5].style.display="flex"
                    box[5].style.outline="2px solid tomato"
                }
                else{
                    alertbox[5].style.display="none"
                    box[5].style.outline="none"
                }
                
                        });



                            
    
        showInput[6].addEventListener("click",()=>{
            box[6].classList.add("boxOneActive")
            showInput[6].style.display="none"
            hideInput[6].style.display="block"
        })
        hideInput[6].addEventListener("click",()=>{
            box[6].classList.remove("boxOneActive")
            showInput[6].style.display="block"
            hideInput[6].style.display="none"
        })
    
        inputActive[6].addEventListener('focusin',()=>{
            inputActive[6].classList.add("inputtransform1")
            });
         
        inputActive[6].addEventListener('focusout',()=>{
        if(inputActive[6].value.length<=0){
            alertbox[6].style.display="flex"
            box[6].style.outline="2px solid tomato"
        }
        else{
            alertbox[6].style.display="none"
            box[6].style.outline="none"
        }
        
                });
            


                    
    
        showInput[7].addEventListener("click",()=>{
            box[7].classList.add("boxOneActive")
            showInput[7].style.display="none"
            hideInput[7].style.display="block"
        })
        hideInput[7].addEventListener("click",()=>{
            box[7].classList.remove("boxOneActive")
            showInput[7].style.display="block"
            hideInput[7].style.display="none"
        })
    
        inputActive[7].addEventListener('focusin',()=>{
            inputActive[7].classList.add("inputtransform1")
            });
         
        inputActive[7].addEventListener('focusout',()=>{
        if(inputActive[7].value.length<=0){
            alertbox[7].style.display="flex"
            box[7].style.outline="2px solid tomato"
        }
        else{
            alertbox[7].style.display="none"
            box[7].style.outline="none"
        }
        
                });


                    
    
        showInput[8].addEventListener("click",()=>{
            box[8].classList.add("boxOneActive")
            showInput[8].style.display="none"
            hideInput[8].style.display="block"
        })
        hideInput[8].addEventListener("click",()=>{
            box[8].classList.remove("boxOneActive")
            showInput[8].style.display="block"
            hideInput[8].style.display="none"
        })
    
        inputActive[8].addEventListener('focusin',()=>{
            inputActive[8].classList.add("inputtransform1")
            });
         
        inputActive[8].addEventListener('focusout',()=>{
        if(inputActive[8].value.length<=0){
            alertbox[8].style.display="flex"
            box[8].style.outline="2px solid tomato"
        }
        else{
            alertbox[8].style.display="none"
            box[8].style.outline="none"
        }
        
                });


                    
    
        showInput[9].addEventListener("click",()=>{
            box[9].classList.add("boxOneActive")
            showInput[9].style.display="none"
            hideInput[9].style.display="block"
        })
        hideInput[9].addEventListener("click",()=>{
            box[9].classList.remove("boxOneActive")
            showInput[9].style.display="block"
            hideInput[9].style.display="none"
        })
    
        inputActive[9].addEventListener('focusin',()=>{
            inputActive[9].classList.add("inputtransform1")
            });
         
        inputActive[9].addEventListener('focusout',()=>{
        if(inputActive[9].value.length<=0){
            alertbox[9].style.display="flex"
            box[9].style.outline="2px solid tomato"
        }
        else{
            alertbox[9].style.display="none"
            box[9].style.outline="none"
        }
        
                });




                    
    
        showInput[10].addEventListener("click",()=>{
            box[10].classList.add("boxOneActive")
            showInput[10].style.display="none"
            hideInput[10].style.display="block"
        })
        hideInput[10].addEventListener("click",()=>{
            box[10].classList.remove("boxOneActive")
            showInput[10].style.display="block"
            hideInput[10].style.display="none"
        })
    
        inputActive[10].addEventListener('focusin',()=>{
            inputActive[10].classList.add("inputtransform1")
            });
         
        inputActive[10].addEventListener('focusout',()=>{
        if(inputActive[10].value.length<=0){
            alertbox[10].style.display="flex"
            box[10].style.outline="2px solid tomato"
        }
        else{
            alertbox[10].style.display="none"
            box[10].style.outline="none"
        }
        
                });


                
                    
    
        showInput[11].addEventListener("click",()=>{
            box[11].classList.add("boxOneActive")
            showInput[11].style.display="none"
            hideInput[11].style.display="block"
        })
        hideInput[11].addEventListener("click",()=>{
            box[11].classList.remove("boxOneActive")
            showInput[11].style.display="block"
            hideInput[11].style.display="none"
        })
    
        inputActive[11].addEventListener('focusin',()=>{
            inputActive[11].classList.add("inputtransform1")
            });
         
        inputActive[11].addEventListener('focusout',()=>{
        if(inputActive[11].value.length<=0){
            alertbox[11].style.display="flex"
            box[11].style.outline="2px solid tomato"
        }
        else{
            alertbox[11].style.display="none"
            box[11].style.outline="none"
        }
        
                });



    
    
                showInput[12].addEventListener("click",()=>{
                    box[12].classList.add("boxOneActive")
                    showInput[12].style.display="none"
                    hideInput[12].style.display="block"
                })
                hideInput[12].addEventListener("click",()=>{
                    box[12].classList.remove("boxOneActive")
                    showInput[12].style.display="block"
                    hideInput[12].style.display="none"
                })
            
                inputActive[12].addEventListener('focusin',()=>{
                    inputActive[12].classList.add("inputtransform1")
                    });
                 
                inputActive[12].addEventListener('focusout',()=>{
                if(inputActive[12].value.length<=0){
                    alertbox[12].style.display="flex"
                    box[12].style.outline="2px solid tomato"
                }
                else{
                    alertbox[12].style.display="none"
                    box[12].style.outline="none"
                }
                
                        });
        
        
        
        
        




            
            
        
        






   
    
    
    
 
    
    
    

    
    


