import React, { Component } from 'react'

import abouDrawtSVG from '../../assets/img/about-draw.svg'
import explorerDrawtSVG from '../../assets/img/explorer-draw.svg'
import {Link} from "react-router-dom";

const Main = () => {
    return (
        <main>
        <section id="about" className="full-width">
            <div className="container x-auto full-height flex space-between y-center wrap">
                <img className="draw" src={abouDrawtSVG}
                alt="Ilustración de una estudiante teniendo una clase virtual"/>
                <div className="text-ctn flex">
                    <h2>Somos el puente para encontrar lo que necesitas</h2>
                    <p>
                        Hola, en esta página podrás encontrar creadores de contenido relacionados con la educación (por ahora en programación)
                        que te ayudarán en tu camino del aprendizaje, podrás buscar por su nombre o filtrar por lenguajes así al presionar
                        en un influencer se mostrará el perfil con un breve resumen y los links correspondientes. ¡Anímate a aprender!
                    </p>
                </div>
            </div>
        </section>
        <section id="explorer" className="full-width">
            <div className="container x-auto full-height flex space-between y-center wrap">
                <h2>Conoce creadores que enseñan programación
                    <Link to={'/explorer'} className={'category'}> entrando aquí</Link>
                </h2>
                <img className="draw" src={explorerDrawtSVG}
                alt="Ilustración de una estudiante teniendo una clase virtual"/>
            </div>
        </section>
    </main>
    )
}

export default Main
