const textPrimera = document.getElementById("textarea-primera");
const textSegunda = document.getElementById("textarea-segunda");

// Para  permitir solo letras minúsculas
function filtrarTexto(texto) {
    return texto.replace(/[^a-z\s]/g, ''); // Permite solo letras minúsculas y espacios
}

// Aplicar el filtro en tiempo real
textPrimera.addEventListener('input', function(e) {
    this.value = filtrarTexto(this.value);
});

// Función para encriptar
function btnEncriptar() {
    const textoEncriptado = encriptar(filtrarTexto(textPrimera.value));
    textSegunda.value = textoEncriptado;
    textPrimera.value = "";
    textSegunda.style.backgroundImage = "none"; // funcion para elimina la imagen después de encriptar
}

// Función para desencriptar
function btnDesencriptar() {
    const textoDesencriptado = desencriptar(filtrarTexto(textPrimera.value));
    textSegunda.value = textoDesencriptado;
    textPrimera.value = "";
    textSegunda.style.backgroundImage = "none"; //funcion para elimina la imagen después de desencriptar
}

// Función para copiar el texto
function copiarTexto() {
    textSegunda.select();
    document.execCommand("copy");
    alert("Texto copiado");
}

// Función para encriptar con animación
function encriptarConAnimacion() {
    const inputText = filtrarTexto(textPrimera.value);

    let textoEncriptado = inputText
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    let outputText = textSegunda;
    outputText.value = "";

    textPrimera.value = ""; // funcion para limpiar el textarea después de encriptar
    let index = 0;

    function addLetter() {
        if (index < textoEncriptado.length) {
            outputText.value += textoEncriptado[index];
            index++;
            setTimeout(addLetter, 50);
        } else {
            textSegunda.style.backgroundImage = "none";
        }
    }

    addLetter();
}

// Función para desencriptar con animación
function desencriptarConAnimacion() {
    const inputText = filtrarTexto(textPrimera.value);

    let textoDesencriptado = inputText
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    let outputText = textSegunda;
    outputText.value = "";

    textPrimera.value = ""; // funcion para limpia el textarea después de desencriptar
    let index = 0;

    function addLetter() {
        if (index < textoDesencriptado.length) {
            outputText.value += textoDesencriptado[index];
            index++;
            setTimeout(addLetter, 50);
        } else {
            textSegunda.style.backgroundImage = "none";
        }
    }

    addLetter();
}

