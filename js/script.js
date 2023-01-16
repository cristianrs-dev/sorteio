function mostrarCampoNumero(){
    let numero=document.getElementById("numero")
    if(numero.style.display=="block"){
        numero.style.display="none"
    }else{
         return numero.style.display="block"
    }
        
}

function displayCirculo(){
    let numero=document.getElementById("numero")
    let display=document.
    getElementById("display")
    if(mostrarCampoNumero()=="block"){
        display.style.borderRadius="50px"
    }
}
function mostrarCampoNome(){
    let nome=document.getElementById("nome")
    if(nome.style.display=="block"){
        nome.style.display="none"
    }else{
       return nome.style.display="block"
    }
}

