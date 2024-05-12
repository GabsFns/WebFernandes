import Styles from "../../css/TitlePrinci.module.css"

import StylesNav from "../../css/NavContact.module.css"
import githubIconImage from "../../images/githubIcon.png"
import linkedinIconImage from "../../images/linkedinIcon.png"
import InstagramIconImage from "../../images/instagramIcon.png"

function TitleApresentacao(){
   
    const IconGit = githubIconImage;
    const LinkdinIcon = linkedinIconImage;
    const InstaIcon = InstagramIconImage

    return (
    <div className={Styles.LayoutArticle}>
        <article className={Styles.TitleStyle}>
           <div> 
                <h3>Bem-Vindo</h3>
                <h1>Olá, Sou um Desenvolvedor Full Stack</h1>
                <p>Gabriel Fernandes</p>
            </div>
                <div className={StylesNav.NavContact}>
                    <div className={StylesNav.NavContactIMG}>
                        <a href="">
                            <img src={LinkdinIcon} alt="linkedin"/>
                        </a>
                        <a href="">
                            <img src={IconGit} alt="github"/>
                        </a>
                        <a href="">
                            <img src={InstaIcon} alt="instagram"/>
                        </a>
                    </div>
                    <button className={StylesNav.NavBtt}>Entre em Contato</button>
                </div>
            </article>
                    
                    <hr></hr>
    </div>
        
        

    )
}
export default TitleApresentacao