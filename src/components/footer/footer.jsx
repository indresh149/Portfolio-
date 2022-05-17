import "./footer.css";
import { BsMouse } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
// import { TiSocialDribbble } from "react-icons/ti";
// import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialGithub } from "react-icons/ti";
import {TiSocialTwitter} from "react-icons/ti";
import {TiSocialLinkedin} from "react-icons/ti";

function Footer() {
  return (
    <div id="footer" className="container footer-container">
      <h1>
        That's all{" "}
        <a href="#home">
          <h2>
            <BsMouse /> - scroll up -
          </h2>
        </a>
      </h1>
      <div className="social-links">
        <a href="https://www.instagram.com/indreshgoswami5/"
        target={"blank"}>
          <BsInstagram className="social" />
        </a>
        <a href="https://www.facebook.com/indresh.goswami.545/"
        target={"blank"}>
          {" "}
          <FaFacebookF className="social" />
        </a>
        <a href="https://www.linkedin.com/in/indreshgoswami/"
        target={"blank"}>
          {" "}
          <TiSocialLinkedin className="social" />
        </a>

        <a href="https://twitter.com/IndreshGoswami5"
        target={"blank"}>
          <TiSocialTwitter className="social" />
        </a>

        <a href="https://github.com/indresh149"
        target={"blank"}>
          <TiSocialGithub className="social" />
        </a>
      </div>
    </div>
  );
}
export default Footer;
