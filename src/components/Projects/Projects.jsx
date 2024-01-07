import React from "react";
import "./Projects.css";
import { Button } from "@mui/material";

const Projects = () => {
  return (
    <div className="projects">
      {/* jobsewa */}
      <div className="jobsewa">
        <img src="assets/jobsewa.png" alt="jobsewa" height={200} width={400} />
        <div className="jobsewa-details">
          <h3>Jobsewa</h3>
          <p>A job portal </p>
          <Button variant="contained">
            <a id="anchor" href="https://github.com/dipeshrj/Job-Portal">
              Soure Code
            </a>
          </Button>
        </div>
      </div>

      {/* e-commerce */}
      <div className="nepmart">
        <img
          src="assets/e-commerce.png"
          alt="e-commerce"
          height={200}
          width={400}
        />
        <div className="nepmart-details">
          <h3>Nepmart</h3>
          <p>An e-commerce website </p>
          <Button variant="contained">
            <a
              id="anchor"
              href="https://github.com/dipeshrj/JavaScript-Project-E-commerce-"
            >
              Source Code
            </a>
          </Button>
        </div>
      </div>

      {/* todoapp */}
      <div className="todoapp">
        <img
          src="assets/todoapp.png"
          alt="to-do-app"
          height={200}
          width={400}
        />
        <div className="todoapp-details">
          <h3>ToDo App</h3>
          <p>A todo web-app </p>
          <Button variant="contained">
            <a id="anchor" href="https://github.com/dipeshrj/To-Do-App">
              Soure Code
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
