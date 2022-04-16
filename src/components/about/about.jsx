import React from 'react'
import "./about.css"
import ME from "../../assets/N2PuvF9Q_400x400.jpg"
import {FaAward, FaFolderOpen, FaHourglassHalf} from "react-icons/fa"

const about = () => {
  return (
    <section id='about'>
      <h5>Conoce</h5>
      <h2>Sobre Mi</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Me"/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaHourglassHalf className='about__icon'/>
              <h5>Experiencia</h5>
              <small>Solo Proyectos Personales</small>
            </article>

            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Educacion</h5>
              <small>10+ Certificaciones</small>
            </article>

            <article className='about__card'>
              <FaFolderOpen className='about__icon'/>
              <h5>Proyectos</h5>
              <small>5 Completados</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos blanditiis quo voluptate, hic aut suscipit dolor? Debitis error ipsum inventore deleniti asperiores ad blanditiis obcaecati quaerat? Quam, explicabo quae?
          </p>

          <a href="https://drive.google.com/drive/folders/1S1NPiKxZYqjyP7GykIuf4ZNLbwQzXm76?usp=sharing" className='btn btn-primary'>See Certificates</a>
        </div>
      </div>
    </section>
  )
}

export default about