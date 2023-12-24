import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-badge">
        <div className="hello">
          <span>👋</span>
          <h4>Hello, I'm Dipesh</h4>
        </div>

        <div className="developer">
          <p>Frontend Developer</p>
          <p>Freelancer</p>
        </div>
      </div>

      <div className="profile_image">
        <div className="overlay-circle">
          <img src="src\assets\circle.svg" alt="overlay-circle" />
        </div>
        <div className="profile-img">
          <img src="src\assets\profile.png" alt="profile" />
        </div>
      </div>

      <div className="profile-icons">
        <a href="https://github.com/dipeshrj">
          <img src="src\assets\github.png" alt="github" height={40} />
        </a>
        <a href="https://www.linkedin.com/in/dipeshraj056">
          <img src="src\assets\linkedin.png" alt="linkedin" />
        </a>
      </div>
    </div>
  );
};

export default Profile;
