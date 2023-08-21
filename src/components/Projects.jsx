import '../css/Projects.css'
import wikidog from '../assets/wikidog.png'

const Projects = () => {
    return (
        <section className="projects"> 
            <div className="container">
                <div className="row">
                    <h2>Mis Proyectos</h2>
                    <p>
                        Aqui te dejo algunos de mis proyectos. Mira mas en mi <a href="https://github.com/TobiasMolinero" target="_blank" rel='noreferrer'>Github</a>.
                    </p>
                    <div className="grid-projects">
                        <figure>
                            <img src={wikidog} alt="wikidog"/>
                                <div className="overlay">
                                    <h2>Wiki sobre razas de perros.</h2>
                                    <a href="https://tobiasmolinero.github.io/wikidog/" target="_blank" rel='noreferrer'>Ver sitio web</a>
                                </div>
                                <figcaption><a href="https://tobiasmolinero.github.io/wikidog/" target="_blank" rel='noreferrer'>Ver sitio web</a></figcaption>
                        </figure>

                    </div>
                </div>
            </div>
        </section>
    )
}

// Here are some of my practice projects. Look at them. See more on my

export default Projects
