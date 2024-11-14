import React from "react";
import { BsLinkedin, BsGithub, BsTwitterX, BsInstagram, BsYoutube } from 'react-icons/bs';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="links-footer">
        <p>Talk to Me:</p>
        <a href=""
          target="_blank"
          className="icon-container"
          rel="noreferrer"
        >
          <BsLinkedin className="icon-footer"/>
        </a>
        <a href="https://github.com/Secret-ForYou"
          target="_blank"
          className="icon-container"
          rel="noreferrer"
        >
          <BsGithub className="icon-footer"/>
        </a>
        <a href=""
          target="_blank"
          className="icon-container"
          rel="noreferrer"
        >
          <BsTwitterX className="icon-footer"/>
        </a>
        <a href=""
          target="_blank"
          className="icon-container"
          rel="noreferrer"
        >
          <BsInstagram className="icon-footer"/>
        </a>
        <a href=""
          target="_blank"
          className="icon-container"
          rel="noreferrer"
        >
          <BsYoutube className="icon-footer"/>
        </a>
      </div>

      <p className="text-footer">Build with ❤ by David Morris</p>
    </footer>
  );
}

export default Footer;