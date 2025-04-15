// ProfileCard.jsx
import React from 'react';

const ProfileCard = ({ name, age, location, children }) => {
  return (
    <div className="profile-card" >
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Location:</strong> {location}</p>
      {children}
    </div>
  );
};

export default ProfileCard;
