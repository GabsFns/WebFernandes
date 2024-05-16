import { FaGoogle, FaPhoneAlt } from "react-icons/fa";
import { useState } from 'react';
import Styles from "../../css/PageContact.module.css";
import ContactInfo from "./ContactInfo";
import emailjs from '@emailjs/browser';

function PageContact() {
  const telefone = "+55 021 994216422";
  const defaultEmail = "gabriel0917py@gmail.com";
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  

  function enviarEmail(e) {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      alert("Preencha todos os campos");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email
    };

    emailjs.send("service_96pk8zi", "template_vcbm0eu", templateParams, "pnedYG2nm0l8SRjWq")
      .then((response) => {
        alert("Email enviado com sucesso");
        console.log("Email enviado:", response.status, response.text);
        setName("");
        setEmail("");
        setMessage("");
        
      })
      .catch((error) => {
        console.error("Erro ao enviar email:", error);
        alert("Erro ao enviar email. Por favor, tente novamente mais tarde.");
      });
  }

  return (
    <div id="contact" className={Styles.TitleLayoutCaixa}>
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
          <ContactInfo icon={<FaPhoneAlt />} info={defaultEmail} />
        </section>

        <section className={Styles.LayoutInput}>
          <form onSubmit={enviarEmail} id="email-form">
            <input
              type="text"
              id="name"
              name="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Name"
            />
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Email"
            />
            <textarea
              id="message"
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              placeholder="Message"
            />
            
            <button type="submit" id="EnviarBTT">
              Send
            </button>
          </form>
        </section>
      </article>
    </div>
  );
}

export default PageContact;


//B7TVBH6BG2HWWZGTX587D788