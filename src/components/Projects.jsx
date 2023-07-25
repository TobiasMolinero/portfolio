import '../css/Projects.css'
import wikidog from '../assets/wikidog.png'

const Projects = () => {
    return (
        <section className="projects"> 
            <div className="container">
                <div className="row">
                    <h2>My Projects</h2>
                    <p>
                        Here are some of my practice projects. Look at them. See more on my <a href="https://github.com/TobiasMolinero" target="_blank" rel='noreferrer'>Github</a>.
                    </p>
                    <div className="grid-projects">
                        <figure>
                            <img src={wikidog} alt="wikidog"/>
                                <div className="overlay">
                                    <h2>Wiki about breeds of dogs.</h2>
                                    <a href="https://tobiasmolinero.github.io/wikidog/" target="_blank" rel='noreferrer'>Visit Website</a>
                                </div>
                                <figcaption><a href="https://tobiasmolinero.github.io/wikidog/" target="_blank" rel='noreferrer'>View Website</a></figcaption>
                        </figure>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
