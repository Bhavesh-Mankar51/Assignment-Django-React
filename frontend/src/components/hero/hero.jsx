import React, { useState, useEffect } from "react";
import Card from "../card/card";
import data from "../../data/data.json"; // Import JSON file
import "./hero.css";

const Hero = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    setProfiles(data); // Load data from JSON file
  }, []);

  return (
    <div className="hero-wrapper">
      {profiles.map((profile) => (
        <Card
          key={profile.id}
          name={profile.name}
          description={profile.description}
          profileImg={profile.profileImg}
        />
      ))}
    </div>
  );
};

export default Hero;
