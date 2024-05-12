import React from 'react';
import Styles from "../../css/About.module.css";
import ImgAboutMe from "../../images/AboutMe.jpg";

function About() {
   const AboutMe = ImgAboutMe;

    return (
      <section id="about" className={Styles.AboutLayout}>
        <h1>About Me</h1>
        <div className={Styles.AboutDescricao}>
          <img src={AboutMe} alt="" />
          <div>
            <h3>Desbravando o Código: Um Desenvolvedor Full Stack em Ação</h3>
            <p>
              Olá! Sou Gabriel Fernandes, um desenvolvedor full stack em busca de
              desafios empolgantes. Com habilidades em frontend e backend, estou
              pronto para criar aplicações web completas e eficientes. Determinado
              a oferecer soluções de alta qualidade, estou sempre aprendendo e
              evoluindo. Vamos construir algo incrível juntos!
            </p>
            <button className={Styles.BttCurriculo}>&#10232; View Curriculo</button>
          </div>
        </div>
      </section>
    );
}

export default About;