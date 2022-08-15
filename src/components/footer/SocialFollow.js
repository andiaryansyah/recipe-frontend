import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faInstagram,
  faTwitter,
  faWhatsapp,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const SocialFollow = () => {
  return (
    <div className="social-container ">
      <div className="d-flex align-items-center justify-content-center">
      <p>Visit / Follow Us :</p>
      </div>
      <div className="d-flex align-items-center justify-content-center">
      <a href="https://www.youtube.com/" className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="2x"></FontAwesomeIcon>
      </a> 
      <a href="https://www.facebook.com/" className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x"></FontAwesomeIcon>
      </a> 
      <a href="https://www.instagram.com/" className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x"></FontAwesomeIcon>
      </a> 
      <a href="https://www.twitter.com/" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x"></FontAwesomeIcon>
      </a> 
      <a href="https://www.whatsapp.com/" className="whatsapp social">
        <FontAwesomeIcon icon={faWhatsapp} size="2x"></FontAwesomeIcon>
      </a>
      <a href="https://www.linkedin.com/" className="linkedin social">
        <FontAwesomeIcon icon={faLinkedin} size="2x"></FontAwesomeIcon>
      </a> 
      <a href="https://www.github.com/" className="github social">
        <FontAwesomeIcon icon={faGithub} size="2x"></FontAwesomeIcon>
      </a>
      </div>
    </div>
  );
};

export default SocialFollow;
