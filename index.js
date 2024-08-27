function encriptar(){
    let texto = document.getElementById("iniciar_texto").value;
    let tituloMensaje = document.getElementById("resultado_titulo");
    let parrafo = document.getElementById("resultado_parrafo");
    let figura = document.getElementById("figura");

    let textoCifrado = texto    .replace(/e/gi,"enter")
                                .replace(/i/gi,"imes")
                                .replace(/a/gi,"ai")
                                .replace(/o/gi,"ober")
                                .replace(/u/gi,"ufat");

    if (texto.length !=0){
        document.getElementById("resultado_texto").value = textoCifrado;
        document.getElementById("iniciar_texto").value = "";        
        tituloMensaje.textContent = "¡Mensaje encriptado!";
        parrafo.textContent = "";
        figura.src = "./assets/imagen3.png";
    } else {
        figura.src = "./assets/imagen5.png";
        tituloMensaje.textContent = "No hay texto";
        parrafo.textContent = "Ingresa el texto en campo encriptador";
        alert("No has ingresado texto en el encriptador")
    }
}


function desencriptar(){
    let texto = document.getElementById("iniciar_texto").value;
    let tituloMensaje = document.getElementById("resultado_titulo");
    let parrafo = document.getElementById("resultado_parrafo");
    let figura = document.getElementById("figura");

    let textoCifrado = texto   .replace(/ai/gi,"a")
                                .replace(/enter/gi,"e")
                                .replace(/imes/gi,"i")
                                .replace(/ober/gi,"o")
                                .replace(/ufat/gi,"u");

    if (texto.length !=0){
        document.getElementById("resultado_texto").value = textoCifrado;
        document.getElementById("iniciar_texto").value = "";        
        tituloMensaje.textContent = "¡Mensaje desencriptado!";
        parrafo.textContent = "";
        figura.src = "./assets/imagen4.png";
    } else {
        figura.src = "./assets/imagen5.png";
        tituloMensaje.textContent = "No hay texto";
        parrafo.textContent = "Ingresa el texto en campo encriptador";
        alert("No has ingresado texto en el encriptador")
    }
}


function copiar() {
    let texto = document.getElementById("resultado_texto").value; // Obtén el valor del texto
    navigator.clipboard.writeText(texto).then(function() {

        let mensaje = document.getElementById("resultado_parrafo");
        mensaje.textContent = "¡Texto copiado!";
    }).catch(function(error) {
        console.error("Error al copiar: ", error);
    });
};
