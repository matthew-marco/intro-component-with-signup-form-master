let inputsField = document.querySelectorAll("form input");
let btn = document.querySelector(".errorrr");

inputsField.forEach(input=>{
    input.addEventListener("blur",e=>{
        if(e.target.value === ""){
            e.target.classList.add("error")
            document.querySelector("label[for="+e.target.id+"]").style.display = "block"
           
            // e.target.appendChild(div)
        }else if(e.target.value !== "" && e.target.classList.contains("error")){
            e.target.classList.remove("error")
            document.querySelector("label[for="+e.target.id+"]").style.display = "none"
          
        
        }
    })
    
})


