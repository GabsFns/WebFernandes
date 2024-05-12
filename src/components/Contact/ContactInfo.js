import Styles from "../../css/PageContact.module.css"
function ContactInfo({ icon, info }) {
    return (
      <div className={Styles.LayoutContactME}>
        {icon}
        <p>{info}</p>
      </div>
    );
  }
  export default ContactInfo;