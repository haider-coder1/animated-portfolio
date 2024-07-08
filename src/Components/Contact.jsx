import React from "react";
import { FaSquareInstagram } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div className="contact-icon"
          data-aos="zoom-in"
      data-aos-duration="1000"
        >
          <a href="https://www.google.com" target="_blank" className="items">
        <FaSquareInstagram  className="icons"/>
          </a>
          <a href="https://www.google.com" target="_blank"  className="items">
            <CiFacebook  className="icons" />
          </a>
          <a href="https://www.google.com"  target="_blank" className="items">
            <CiLinkedin  className="icons" />
          </a>
          <a href="https://www.google.com"  target="_blank" className="items">
       <FaSquareXTwitter className="icons"/>{" "}
          </a>
          <a href="https://www.github.com" target="_blank" className="items">
         <FaGithubSquare className="icons" />
          </a>
          <a href="mailto:haider32ali2@gmail.com" target="_blank" className="items">
                <CgMail className="icons"/>
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
