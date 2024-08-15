import React from "react";

function Profile() {
  return (
    <div className="profile">
      <h1>User Profile</h1>
      <div className="profile-info">
        <p>Name: John Doe</p>
        <p>Email: john@example.com</p>
        <p>Joined: January 1, 2024</p>
      </div>
      <div className="preferences">
        <h2>Preferences</h2>
        <ul>
          <li>Favorite Category: Motivation</li>
          <li>Daily Quote Time: 9:00 AM</li>
        </ul>
      </div>
    </div>
  );
}
export default Profile;
