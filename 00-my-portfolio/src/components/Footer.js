import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-div">
      <a
        className="footerIcon"
        href="https://github.com/Majid-pkz"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
      <a
        className="footerIcon"
        href="https://www.linkedin.com/in/majid-pourkazemi"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>
    </div>
  );
}

export default Footer;
