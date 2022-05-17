import "./contact.css";
import { AiOutlineLinkedin, AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

function Contact() {
  return (
    <div id="contact" className="container contact-container">
      <h1>Contact Me</h1>
      <div className="contact-links">
        <a
          href="https://www.linkedin.com/in/indreshgoswami/"
          className="contact linkdin"
          target={"blank"}
        >
          <AiOutlineLinkedin className="icon" />
          <h2>
            linkdin <span>indreshgoswami</span>
          </h2>
        </a>

        <a
          href="https://api.whatsapp.com/send?phone=9315592742&text=Hi Indresh"
          className="contact whatsapp"
          target={"blank"}
        >
          <AiOutlineWhatsApp className="icon" />
          <h2>
            whatsapp <span>+91 93155 92742</span>
          </h2>
        </a>

        <a href="https://www.instagram.com/indreshgoswami5/" 
            className="contact instagram"
            target={"blank"}
            >
          <AiOutlineInstagram className="icon" />
          <h2>
            instagram <span>@indreshgoswami5</span>
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Contact;
