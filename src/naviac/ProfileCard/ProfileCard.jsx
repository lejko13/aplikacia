// ProfileCard.jsx
import React from "react";
import "./ProfileCard.css";

const ProfileCard = ({ name, role, image, description }) => {
  return (
    <div className="profile-card">
      <img src={image} alt={name} className="profile-image" />
      <div className="profile-info">
        <h2 className="profile-name">{name}</h2>
        <p className="profile-role">{role}</p>
        <p className="profile-description">{description}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
