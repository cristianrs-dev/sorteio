function mostrarCampoNumero(){
    //let numero=document.querySelector("#numero")
    if(numero.style.display=="block"){
        numero.style.display="none"
    }else{
         return numero.style.display="block"
    }
     
    
}
function mostrarCampoNome(){

    if(pessoas.style.display=="block"){
        pessoas.style.display="none"
    }else{
         return pessoas.style.display="block"
    }
     
    
}

function getNumero(){
    
    let numero= parseFloat(document.getElementById
    ("numero").value)
    let display=document.querySelector(".number")
    let sortear=Math.round(numero*Math.random())
    display.innerHTML=sortear 

}


