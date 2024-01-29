let proyectos = [
    {
        id_proyecto: 1,
        titulo: 'Wiki-Dogs',
        descripcion: 'Wiki-Dogs es un sitio web que desarrollé durante el cursado de la tecnicatura para practicar React y como consumir datos desde una API. Si te gustan tanto los perros como a mi, ve a visitar la página y conocé mas sobre las distintas razas de perros.',
        imagen: './assets/wikidogs.png',
        link: 'https://tobiasmolinero.github.io/wikidog',
        alt: 'Imagen de wikidogs'
    },
    {
        id_proyecto: 2,
        titulo: 'Portfolio Tobias',
        descripcion: 'Por supuesto, desarrollé mi portfolio para poder contarles a todos sobre mí y sobre mis trabajos como desarrollador freelance. Hecho con HTML y CSS puro; y algo de Javascript.',
        imagen: './assets/tm.png',
        link: './index.html',
        alt: 'Imagen de Tobias Molinero portfolio'

    },
    {
        id_proyecto: 3,
        titulo: 'Matob Consultoría',
        descripcion: 'Este sitio web lo desarrollé para una pequeña consultora de la cual formo parte como diseñador y desarrollador web. La desarrolle con HTML, CSS y Javascript.',
        imagen: './assets/matob.png',
        link: 'https://tobiasmolinero.github.io/matob',
        alt: 'Imagen de matob'

    },
    {
        id_proyecto: 4,
        titulo: 'Molis Desarrollo web',
        descripcion: 'Sitio para mi emprendimiento de desarrollo web que comencé junto a uno de mis hermanos. Hecho con HTML, CSS y Javascript',
        imagen: './assets/molis.png',
        link: 'https://tobiasmolinero.github.io/moli_desarrollo-web',
        alt: 'Imagen de molis'

    }
]

const modalBackground = document.getElementById('modalBackground');
const modal = document.getElementById('modal');
const botonCerrarModal = document.getElementById('botonCerrarModal');
var contenidoModal = document.getElementById('contenidoModal');


botonCerrarModal.addEventListener('click', () => {
    modalBackground.classList.add('modal_hidden');
    modalBackground.classList.remove('modal_showed');
});

window.addEventListener('click', (e) => {
    if(e.target == modalBackground){
        modalBackground.classList.add('modal_hidden');
        modalBackground.classList.remove('modal_showed')
    }
});



function abrirModal(id){
    modalBackground.classList.remove('modal_hidden');
    modalBackground.classList.add('modal_showed');
    var datos = filtrarContenido(id);
    llenarContenido(datos);
}

function filtrarContenido(id){
    var datos = proyectos.filter(p => p.id_proyecto === id);
    return datos;  
}

function llenarContenido(datos){
    contenidoModal.innerHTML = '';
    datos.forEach(d => {
        contenidoModal.innerHTML = `
            <div class="imagen">
                <img src="${d.imagen}" alt="${d.alt}">
            </div>
            <div class="descripcion">
                <h3>${d.titulo}</h3>
                <p>${d.descripcion}</p>
                <a href="${d.link}" target="_blank">Ver sitio web <i class="bi bi-box-arrow-up-right"></i></a>
            </div>
        `
    });
}
