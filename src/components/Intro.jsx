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
                        <h1>Hi! I'm Tobias Molinero</h1>
                        <h3>Frontend Developer</h3>
                        <p>I am 25 years old and live in Tucuman, Argentina. I am an advanced student in the university technique in programming of the National Technological University - Tucuman Regional Faculty. Currently my knowledge and experience are oriented towards Frontend development, but I'm also learning about backend development. Here below I leave my resume in case you are interested in knowing something else.</p>
                        <a href={cv} download>Download CV</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Intro
