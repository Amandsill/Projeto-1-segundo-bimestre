
const texto = document.querySelector("#original")
const contador = document.querySelector("span")
const modificado = document.querySelector("#modificado")

texto.addEventListener("keyup", function() {
    contador.innerHTML = 0 + texto.value.length
    if(efeito.value = "uppercase") {
        modificado.value= original.value.toUpperCase();
    }
    else{
        modificado.value = original.value.toLowerCase();
    }
})

