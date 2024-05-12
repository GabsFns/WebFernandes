import { FaGoogle, FaPhoneAlt } from "react-icons/fa";
import Styles from "../../css/PageContact.module.css";
import ContactInfo from "./ContactInfo";

function PageContact() {
  const telefone = "+55 021 994216422";
  const email = "gabriel0917py@gmail.com";

  return (
    <div id="contact"  className={Styles.TitleLayoutCaixa}>
      <h1>Contact</h1>
      <article className={Styles.LayoutArticle}>
        <section className={Styles.LayoutSectionContact}>
          <h2>Me envie uma Mensagem</h2>
          <p>
            Obrigado por visitar minha página de contato! Estou ansioso para
            ouvir suas perguntas, comentários e oportunidades de colaboração.
            Sinta-se à vontade para preencher o formulário abaixo para entrar em
            contato diretamente comigo. Prometo responder o mais rápido
            possível!
          </p>
          <ContactInfo icon={<FaGoogle />} info={telefone} />
          <ContactInfo icon={<FaPhoneAlt />} info={email} />
        </section>

        <section className={Styles.LayoutInput}>
          <input type="text" id="username" name="username" placeholder="Name" />
          <input type="email" id="email" name="email" placeholder="Email" />
          <textarea id="mensagem" name="mensagem" placeholder="Message" />
          <button type="submit" id="EnviarBTT">
            Send
          </button>
        </section>
      </article>
    </div>
  );
}



export default PageContact;