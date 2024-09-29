
import React from 'react'
// import styles from "./Footer.module.css";

import { BsWhatsapp } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin , FaTiktok, FaBlog} from "react-icons/fa";


import "./Footer.css"


function Footer () {
  return (
    <footer className="footer">
    <div className="waves">
      <div className="wave" id="wave1"></div>
      <div className="wave" id="wave2"></div>
      <div className="wave" id="wave3"></div>
      <div className="wave" id="wave4"></div>
    </div>
    <ul className="social-icon">
      <li className="social-icon__item"><a className="social-icon__link" arget="_blank" href="https://www.linkedin.com/in/mohammed-assal-94b54126b">
          <FaLinkedin/>
        </a></li>
      <li className="social-icon__item"><a className="social-icon__link" arget="_blank" href="https://wa.me/+212768866259">
          <BsWhatsapp/>
        </a></li>
      <li className="social-icon__item"><a className="social-icon__link" arget="_blank" href="https://github.com/Mohammed-Assal">
          <FaGithub />
        </a></li>
    
        <li className="social-icon__item"><a className="social-icon__link" arget="_blank" href="https://www.tiktok.com/@quarkweb">
          <FaTiktok/>
        </a></li>
        <li className="social-icon__item"><a className="social-icon__link" arget="_blank" href="https://www.tiktok.com/@quarkweb">
          <FaBlog/>
        </a></li>
    </ul>
  
    <p>&copy;2024 Mohammed Assal | All Rights Reserved</p>
  </footer>
    
  )
}

export default Footer
