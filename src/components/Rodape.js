import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";

function Rodape() {
  return (
    <footer className="footer">
      <p className="footer_social">
        <a
          href="https://www.linkedin.com/in/jo%C3%A3o-filho-souza-wd-fullstack/"
          className=" link-icone mr-2"
          title="linkedin"
        >
          <BsLinkedin size="20" color="#fff" />
        </a>
        <a
          href="https://github.com/jfilinho"
          className=" link-icone mr-2"
          title="github"
        >
          <AiFillGithub size="20" color="#fff" />
        </a>

        <a href="https://www.instagram.com/filho_souzaa"
         className=" link-icone mr-2"
          title="instagram">
          <FaInstagram size="20" color="#fff" />
        </a>

        <a
          href="https://www.facebook.com/jfilhossouza"
          className=" link-icone mr-2"
          title="Facebook"
        >
          <FaFacebook size="20" color="#fff" />
        </a>
      </p>
      <p className="footer_copyright">
        &copy; Copyright 2022 - Desenvolvido por - João Filho
      </p>
    </footer>
  );
}
export default Rodape;
