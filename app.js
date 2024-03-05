const textArea =document.querySelector(".cajatexto");
const mensaje = document.querySelector(".textoFinal");
const muneco =  document.querySelector(".muneco");
const msjFinal= document.querySelector(".mensaje");
const botonCopiar = document.querySelector(".btnCopiar")




function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    muneco.style.display = "none"
    msjFinal.style.display= "none"
    botonCopiar.style.display="block"
}



function encriptar(encriptador){
    let clave=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    encriptador = encriptador.toLowerCase()

    for(let i = 0; i < clave.length; i++){
        if(encriptador.includes(clave[i][0])){
            encriptador = encriptador.replaceAll(clave[i][0],clave[i][1])

        }
    }
    return encriptador
}


function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value)
    mensaje.value = textoDesencriptado
    textArea.value = "";
    msjFinal.style.display= "none"
    muneco.style.display="none"
    botonCopiar.style.display="block"

}



function desencriptar(desencriptador){
    let clave=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    desencriptador = desencriptador.toLowerCase()

    for(let i = 0; i < clave.length; i++){
        if(desencriptador.includes(clave[i][1])){
            desencriptador = desencriptador.replaceAll(clave[i][1],clave[i][0])

        }
    }
    return desencriptador
}

function btnCopiar(){
    navigator.clipboard.writeText(mensaje.value);
    alert("Texto Copiado");
    textArea.focus();
    mensaje.value = "";
    muneco.style.display = "block"
    msjFinal.style.display= "block"
    botonCopiar.style.display="none"
    
    

}
    