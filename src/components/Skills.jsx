import '../css/Skills.css'
import bootstrap from '../assets/iconos/bootstrap.png'
import css from '../assets/iconos/css-3.png'
import git from '../assets/iconos/git.png'
import html from '../assets/iconos/html-5.png'
import js from '../assets/iconos/js.png'
import mysql from '../assets/iconos/mysql.png'
import react from '../assets/iconos/react.png'

const Skills = () => {
    return (
        <section className="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>Tecnologías y herramientas de desarrollo</h2>
                        <div className='skill-cards'>
                            <div className="skill">
                                <figure>
                                    <img src={html} alt="icono"/>
                                </figure>
                                <h3>HTML</h3>
                            </div>
                            <div className="skill">
                                <figure>
                                    <img src={css} alt="icono"/>
                                </figure>
                                <h3>CSS</h3>
                            </div>
                            <div className="skill">
                                <figure>
                                    <img src={bootstrap} style={{width: 80, height: 70}} alt="icono"/>
                                </figure>
                                <h3>Bootstrap</h3>
                            </div>
                            <div className="skill">
                                <figure>
                                    <img src={js} alt="icono"/>
                                </figure>
                                <h3>JavaScript</h3>
                            </div>
                            <div className="skill">
                                <figure>
                                    <img src={react} alt="icono" style={{height: 80, width: 80}}/>
                                </figure>
                                <h3>React.js</h3>
                            </div>
                            <div className="skill">
                                <figure>
                                    <img src={git} alt="icono" style={{height: 80, width: 80}}/>
                                </figure>
                                <h3>Git</h3>
                            </div>
                            <div className="skill">
                                <figure>
                                    <img src={mysql} alt="icono" style={{height: 70, width: 70}}/>
                                </figure>
                                <h3>MySql</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
