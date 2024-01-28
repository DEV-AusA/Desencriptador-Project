
const encriptarTexto = ()=>{

    // obtengo el texto del textarea
    const textoOriginal = document.getElementById('box-principal').value.toLowerCase();

    const vocalesEncriptadas = {
        a: 'enter',
        e: 'imes',
        i: 'ai',
        o: 'ober',
        u: 'ufat',
    }

    let palabraEncriptada = '';

    // itero por cada letra del texto con 'char'
    for (let char of textoOriginal){

        // si en cada iteracion el valor de char hace que vocalesEncriptadas[char] sea 'true' entra al if
        if (vocalesEncriptadas[char]) {
            // agrego el valor de 'vocalesEncriptadas[char]' a la 'palabraEncriptada'
            palabraEncriptada += vocalesEncriptadas[char];
        }
        // sino agrego el mismo valor de char a palabraEncriptada
        else{
            palabraEncriptada += char;
        }
        // version simplificada
        // si en cada iteracion el valor de char hace que vocalesEncriptadas[char] sea 'true' agrega este || sino agrega el char que no coincide
        //palabraEncriptada += vocalesEncriptadas[char] || char;
    }

    //eligo el container a esconder
    const boxAEsconder = document.getElementById('box-a-esconder');
    
    // obtengo los elementos textarea y button
    const textareaOculto = document.getElementById('box-encriptado');
    const botonOculto = document.getElementById('boton-copiar');
    //caja principal para vaciar contenido despues de encriptar
    const boxPrincipal = document.getElementById('box-principal')
    
    //agrego el texto al nuevo textarea
    textareaOculto.value = palabraEncriptada;
    // vacio el box principal
    boxPrincipal.value = '';

    // saco a la luz lo escondido :)
    const estaOculto = boxAEsconder.className;
    // cambia el nombre de la clase y la oculta solo la primerza vez
    if (estaOculto == 'box-temporal') {
        boxAEsconder.className = 'oculto';
    }
    
    botonOculto.classList.replace('oculto', 'botones-principal');
    textareaOculto.classList.replace('oculto', 'box-desencriptado');

}

const desencriptarTexto = ()=>{

    let textoEncriptado = document.getElementById('box-principal').value;

    const palabrasEncriptadas = {
        enter: 'a',
        imes: 'e',
        ai: 'i',
        ober: 'o',
        ufat: 'u',
    }

    // con for in itero con cada 'propiedad' de 'palabrasEncriptadas' en este caso va iterar 5 veces
    for (let propiedad in palabrasEncriptadas) {

        if (palabrasEncriptadas.hasOwnProperty(propiedad)) {

            // en cada iteracion guarda el valor de la propiedad en 'valorPropiedad'
            const valorPropiedad = palabrasEncriptadas[propiedad]; // a, e, i, o , u
            // creo un array usando .split para quitar el valor de la propiedad en todo el texto, deja una coma de separacion en el array
            textoEncriptado = textoEncriptado.split(propiedad);
            // uso .join para unir la el array anterior reemplazando la coma del array (,) por la letra de 'valorPropiedad'
            textoEncriptado = textoEncriptado.join(valorPropiedad);
        }
    }
    
    const boxEncriptado = document.getElementById('box-encriptado');

    //caja principal para vaciar contenido despues de desencriptar
    const boxPrincipal = document.getElementById('box-principal')
    
    // cargo el texto desencriptado en el box
    boxEncriptado.value = textoEncriptado;
    // vacio el box principal
    boxPrincipal.value = '';
}

const copiarTexto = () =>{
    // texto a copiar al portapapeles
    const textoACopiar = document.getElementById('box-encriptado').value;

    // guardandolo en el portapapeles
    navigator.clipboard.writeText(textoACopiar)
}

// BOTONES
// declaro el boton encriptar
const botonEncriptar = document.getElementById('boton-encriptar');
// agrego el evento click al boton
botonEncriptar.addEventListener('click', encriptarTexto);

const botonDesencriptar = document.getElementById('boton-desencriptar');
botonDesencriptar.addEventListener('click', desencriptarTexto);

const botonCopiar =document.getElementById('boton-copiar');
botonCopiar.addEventListener('click', copiarTexto);


