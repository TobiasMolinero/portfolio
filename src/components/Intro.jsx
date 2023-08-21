/* eslint-disable react/no-unescaped-entities */
import '../css/Intro.css'
import myPicture from '../assets/fotomia-sinfondo.png'
import cv from '../assets/CV - TobiasMolinero.pdf'

const Intro = () => {
    return (
        <section className="intro">
            <div className="container">
                <div className="row">
                    <div className="image col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <img src={myPicture} alt="foto"/>
                    </div>
                    <div className="text-intro col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <h1>Hola! Soy Tobias Molinero</h1>
                        <h3>Frontend Developer</h3>
                        <p>Tengo 25 años y vivo en Tucuman, Argentina. Soy estudiante avanzado de la Tecnicatura en Programación de la Universidad Tecnologica Nacional - Facultad Regional Tucuman. Actualmente mis conocimientos y experiencias estan orientadas hacia el desarrollo Front-end, pero tambien estoy aprendiendo sobre desarrollo Back-end. Dejo mi CV en aqui abajo por si te interesa.</p>
                        <a href={cv} download>Descargar CV</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

// Currently my knowledge and experience are oriented towards Frontend development, but I'm also learning about backend development. Here below I leave my resume in case you are interested in knowing something else

export default Intro
