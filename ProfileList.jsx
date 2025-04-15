// ProfileList.jsx
import React from 'react';
import ProfileCard from './ProfileCard';

const ProfileList = () => {
  const users = [
    { name: 'John Doe', age: 28, location: 'New York', hobbies: 'Reading, Traveling' },
    { name: 'Nike', age: 30, location: 'New York', hobbies: 'Gaming, Photography' },
    { name: 'Alice', age: 25, location: 'California', hobbies: 'Cooking, Hiking' },
  ];

  return (
    <div>
      <h2>Profile List:</h2>
      {users.map((user, index) => (
        <ProfileCard
          key={index}
          name={user.name}
          age={user.age}
          location={user.location}
        >
          <p><strong>Hobbies:</strong> {user.hobbies}</p>
        </ProfileCard>
      ))}
    </div>
  );
};

export default ProfileList;
