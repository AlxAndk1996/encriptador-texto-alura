const btnEncriptar = document.querySelector(".btn-encriptar");
const textoEncriptar = document.querySelector(".encriptadorr");
const advertencia = document.querySelector(".sugerenciap");
const respuesta = document.querySelector(".mensaje-aviso");
const btnCopiar = document.querySelector(".btn-copiar");
const presMsgEncrip = document.querySelector(".presentacion-msg-encriptado");
const btnDesencriptar = document.querySelector(".btn-desencriptar");

btnEncriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = textoEncriptar.value;
    let sinCarEspeial =  /[áéíóúÁÉÍÓÚ@,.:;+-]/;
    let sinMinusculas = /[A-Z]/;

    if (texto == ""){
        advertencia.textContent = "el campo no debe estar vacio";
    }
    else if (sinCarEspeial.test(texto)){
        advertencia.textContent = "el campo no debe tener caracteres especiales";

    }
    else if (sinMinusculas.test(texto)){
        advertencia.textContent = "el texto debe estar todo en minusculas"
    }

    else {
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");
        
        respuesta.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        presMsgEncrip.remove();
    }

});

btnDesencriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = textoEncriptar.value;
    let sinCarEspeial =  /[áéíóúÁÉÍÓÚ@,.:;+-]/;
    let sinMinusculas = /[A-Z]/;

    if (texto == ""){
        advertencia.textContent = "el campo no debe estar vacio";
    }
    else if (sinCarEspeial.test(texto)){
        advertencia.textContent = "el campo no debe tener caracteres especiales";

    }
    else if (sinMinusculas.test(texto)){
        advertencia.textContent = "el texto debe estar todo en minusculas"
    }

    else {
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");
        
        respuesta.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        presMsgEncrip.remove();
    }

});

btnCopiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = respuesta;
    copiar.select();
    document.execCommand("copy");

});
