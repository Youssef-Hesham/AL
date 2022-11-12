import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faFax,
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
function Footer() {
  return (
    <footer>
      <div className="main-footer">
        <section className="contact-info">
          <h2>Contact Information </h2>
          <ul>
            <li>
              {" "}
              <FontAwesomeIcon icon={faPhone} /> Phone: (+202) 35862 630, (+202)
              37826 355{" "}
            </li>
            <li>
              {" "}
              <FontAwesomeIcon icon={faEnvelope} /> Email:
              alsharief353@yahoo.com
            </li>
            <li>
              {" "}
              <FontAwesomeIcon icon={faLocationDot} /> Address: Mohamed Refaie
              St , Tareek Kafr Tohormos Faisal - Giza 12111, A.R Egypt
            </li>
            <li>
              {" "}
              <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp: 01100538744
            </li>
            <li>
              {" "}
              <FontAwesomeIcon icon={faFax} /> Fax: (+202) 35866 544
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
    </footer>
  );
}

export default Footer;
