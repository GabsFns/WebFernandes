import { FaLinkedin, FaInstagramSquare, FaPaste } from "react-icons/fa";
import Styles from "../../css/Footer.module.css";
import ImageFooterLogo from "../../images/LogoFooterPORT.png"

function Footer(){
const Logo = ImageFooterLogo;

    return(
        <>
            <hr></hr>
            <footer className={Styles.LayoutFooter}>
                <h1 className={Styles.TitleFooter}> CODE.</h1>
                    <p>2024 - Portfolio Gabriel Fernandes</p>
                <div className={Styles.LayoutBTT}>
                    <button><FaLinkedin size={30} /></button>
                    <button><FaInstagramSquare size={30} /></button>
                    <button><FaPaste size={30} /></button>
                </div>
            </footer>
        </>
    )
}
export default Footer