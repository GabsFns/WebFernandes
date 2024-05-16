import React from 'react';
import Styles from "../../css/Skills.module.css";
import JavaScriptLogo from "../../images/JavaScriptLogo.png";
import JavaLogo from "../../images/JavaLogo.png";
import CLogo from "../../images/CLogo.png";
import PhpLogo from "../../images/PhpLogo.png";
import MysqlLogo from "../../images/MysqlLogo.png";
import NodeJsLogo from "../../images/NodeJsLogo.png";
import ReactLogo from "../../images/ReactLogo.png";
import AngularLogo from "../../images/AngularLogo.png";
import HTMLLogo from "../../images/HTMLLogo.png";
import CSSLogo from "../../images/CSSLogo.png";
import BootstrapLogo from "../../images/BootstrapLogo.png"
import MongoDBLogo from "../../images/MongoDBLogo.png"

function Skills() {
    const logoBack = [
        { 
            id: 1,
            src: JavaScriptLogo,
            alt: 'JavaScript Logo',
        },
        { 
            id: 2,
            src: JavaLogo,
            alt: 'Java Logo',
        },
        
        { 
            id: 3,
            src: PhpLogo,
            alt: 'Php Logo',
        },
        
        { 
            id: 4,
            src: NodeJsLogo,
            alt: 'Node.js Logo',
        }
    ];
    const logoFront =[
        { 
            id: 1,
            src: ReactLogo,
            alt: 'React Logo',
        },
        {
            id: 2,
            src: AngularLogo,
            alt: 'Angular Logo'
        },
        {
            id: 3,
            src: CSSLogo,
            alt: 'CSS Logo'
        },
        {
            id: 4,
            src: HTMLLogo,
            alt: 'HTML Logo'
        },
        {
            id: 5,
            src: BootstrapLogo,
            alt: 'Bootstrap Logo'
        },
        {
            id: 6,
            src: JavaScriptLogo,
            alt: 'Javascript Logo'
        }
    ]
    const DataBase =[
        {
            id: 1,
            src: MongoDBLogo,
            alt: 'MongoDb logo'
        },
        { 
            id: 5,
            src: MysqlLogo,
            alt: 'Mysql Logo',
        }
    ]

    return (
        <section id='skills' className={Styles.SkillsCaixaLayout}>
                <h3 className={Styles.SkillsTitle}>Ferramentas e Tecnologias Front-end</h3>
        
            <div className={Styles.SkillsLayout}>
                {logoFront.map((logo) => (
                    <div key={logo.id}>
                        <img src={logo.src} alt={logo.alt} />
                    </div>
                ))}
            </div>
                <h3 className={Styles.SkillsTitle}>Ferramentas e Tecnologias Back-end</h3>
            <div className={Styles.SkillsLayout}> 
                {logoBack.map((logo) => (
                    <div key={logo.id}>
                        <img src={logo.src} alt={logo.alt} />
                    </div>
                ))}
            </div>
            <h3 className={Styles.SkillsTitle}>DataBase</h3>
            <div className={Styles.SkillsLayout}> 
                {DataBase.map((logo) => (
                    <div key={logo.id}>
                        <img src={logo.src} alt={logo.alt} />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;