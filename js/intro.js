const introText = document.getElementById('introText');
const introPicture = document.getElementById('introPicture');

function esElementoVisible(elemento){
    var rect = elemento.getBoundingClientRect();

    return(
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

function manejarScroll(){
    if(esElementoVisible(introText) && esElementoVisible(introImage)){
        introText.classList.remove('intro_text_hidden');
        introText.classList.add('intro_text');
        introImage.classList.remove('intro_picture_hidden');
        introImage.classList.add('intro_picture');
    }
}

window.addEventListener('scroll', manejarScroll());
manejarScroll();