import React from "react";
import "./card.css";
import { motion } from "framer-motion"

import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa"; 


const Card = ({ name, description, profileImg }) => {
  return (
    <div className="profile-card">
      <motion.div
        className="image"
        whileHover={{
          scale: 1.1, 
          rotate: 0, 
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)"
        }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <img src={profileImg} alt={name} className="profile-img" />
      </motion.div>
      <div className="text-data">
        <span className="name">{name}</span>
        <span className="description">{description}</span>
      </div>

      <div className="media-box">
        <div className=" media-buttons">
          <a href="#" style={{ background: "#4267b2" }} className="link">
            <FaFacebookF />
          </a>
          <a href="#" style={{ background: "#1da1f2" }} className="link">
            <FaTwitter />
          </a>
          <a href="#" style={{ background: "#e1306c" }} className="link">
            <FaInstagram />
          </a>
          <a href="#" style={{ background: "#ff0000" }} className="link">
            <FaYoutube />
          </a>
        </div>

        <div className="buttons">
          <button className="button"><h4><a href="">Summary</a></h4></button>
          <button className="button"><h4><a href="">Location</a></h4></button>
        </div>

        
        
      </div>
    </div>
  );
};

export default Card;
