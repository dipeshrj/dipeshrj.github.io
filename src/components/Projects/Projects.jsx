import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects">
      {/* jobsewa */}
      <div className="jobsewa">
        <img
          src="src\assets\jobsewa.png"
          alt="jobsewa"
          height={200}
          width={400}
        />
        <div className="jobsewa-details">
          <h3>Jobsewa</h3>
          <p>A job portal </p>
        </div>
      </div>
      {/* e-commerce */}
      <div className="nepmart">
        <img
          src="src\assets\e-commerce.png"
          alt="e-commerce"
          height={200}
          width={400}
        />
        <div className="nepmart-details">
          <h3>Nepmart</h3>
          <p>An e-commerce website </p>
        </div>
      </div>
      {/* todoapp */}
      <div className="todoapp">
        <img
          src="src\assets\todoapp.png"
          alt="to-do-app"
          height={200}
          width={400}
        />
        <div className="todoapp-details">
          <h3>ToDo App</h3>
          <p>A todo web-app </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;