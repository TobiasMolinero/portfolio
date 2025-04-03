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
        descripcion: 'Este sitio web lo desarrollé para una pequeña consultora de la cual formo parte como diseñador y desarrollador web. La desarrollé con HTML, CSS y Javascript. Faltan completarle algunos detalles pero va por buen camino.',
        imagen: './assets/matob.png',
        link: 'https://tobiasmolinero.github.io/matob',
        alt: 'Imagen de matob'

    },
    {
        id_proyecto: 5,
        titulo: 'CLO2 Servicios y sistemas',
        descripcion: 'Realizada con Astro, este sitio web es para una empresa dedicada a realizar distintos tratamientos de sanitización para frutas, verduras, ambientes, efluentes, etc. Utilizando como recurso principal el gas Dioxido de cloro(CLO2).',
        imagen: './assets/clo2.png',
        link: 'https://clo2-astro.vercel.app',
        alt: 'Imagen de clo2'
    },
    /*{
        id_proyecto: 6,
        titulo: 'Yum Paltas',
        descripcion: 'Este es un proyecto a largo plazo que comencé el año pasado. Se trata de una aplicación web para un negocio que se dedica a la venta de paltas, con la idea de que se pueda gestionar el negocio de una manera mas clara, sencilla y comoda. Por el momento posee funcionalidades como el registro de usuarios para logeo, registro de las ventas, de clientes y de gastos. Este es el primer proyecto propio en el que tuve que implementar base de datos con MySql y un backend con Express.js en Node js.',
        imagen: './assets/YUM Paltas.png',
        link: './index.html',
        alt: 'Imagen de Yum paltas'
    },*/
    {
        id_proyecto: 7,
        titulo: 'STAR WARS WIKI',
        descripcion: 'Esta fue una prueba tecnica con tematica de star wars que hice para postular a un trabajo. En la prueba teniamos que utilizar next.js + typescript + tailwind para los estilos. Tambien teniamos que traer los datos de una api mediante la api de fetch. Lamentablemente no quede para este trabajo :( Pero me quedo bonito así que disfrutala!',
        imagen: './assets/starwars-wiki.webp',
        link: 'https://starwars-wiki-sigma.vercel.app/',
        alt: 'imagen del proyecto Star Wars wiki'
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
                <a href="${d.link}" target="_blank">Ver más<i class="bi bi-box-arrow-up-right"></i></a>
            </div>
        `
    });
}
