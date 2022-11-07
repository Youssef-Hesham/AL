import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import images from "./Images";
function Footer() {
  return (
    <footer>
      <div className="main-footer">
        <section className="contact-info">
          <h2>Contact Information </h2>
          <ul>
            <li>
              {" "}
              <FontAwesomeIcon icon={faPhone} /> Phone: 3586230 , 01226127068{" "}
            </li>
            <li>
              {" "}
              <FontAwesomeIcon icon={faEnvelope} /> Email:
              alsharief353@yahoo.com
            </li>
            <li>
              {" "}
              <FontAwesomeIcon icon={faLocationDot} /> Address:
            </li>
            <li>
              {" "}
              <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp: 01100538744
            </li>
          </ul>
        </section>
        <section className="footer-links">
          <h2>Links</h2>
          <div className="links-buttons">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faYoutube} />
          </div>
        </section>
      </div>

      <div className="partners">
        <h2>Partners</h2>
        <div className="partner-logos">
          <img src={images[4].src} alt="logo" />
          <img src={images[5].src} alt="logo" />
          <img src={images[6].src} alt="logo" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
