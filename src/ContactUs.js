import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faFax,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <div className="main-contacts body-main-div contact-us-phone">
      <iframe
        className="map  ifram-phone"
        title="location"
        src="https://maps.google.com/maps?width=709&amp;height=495&amp;hl=en&amp;q=giza%20cairo+(giza)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>

      <div className="contact-info contact-phone">
        <h2>Contact Information</h2>
        <ul>
          <li>
            {" "}
            <FontAwesomeIcon icon={faPhone} /> Phone: (+202) 35862 630, (+202)
            37826 355{" "}
          </li>
          <li>
            {" "}
            <FontAwesomeIcon icon={faEnvelope} /> Email: alsharief353@yahoo.com
          </li>
          <li>
            {" "}
            <FontAwesomeIcon icon={faLocationDot} /> Address: Mohamed Refaie St
            , Tareek Kafr Tohormos Faisal - Giza 12111, A.R Egypt
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
      </div>
    </div>
  );
}
export default Contact;
