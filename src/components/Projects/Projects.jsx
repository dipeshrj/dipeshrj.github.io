import React from 'react'
import "./Projects.css"

const Projects = () => {
  return (
      <div className='projects'>
          <div className='jobsewa'>
        <img src="src\assets\jobsewa.png" alt="jobsewa" height={200} width={400} />
        <div className='jobsewa-details'>
              <h3>Jobsewa</h3>
              <p>A job portal </p>
          </div>
        </div>
          
           <div className='nepmart'>
        <img src="src\assets\e-commerce.png" alt="e-commerce" height={200} width={400} />
        <div className='nepmart-details'>
              <h3>Nepmart</h3>
              <p>An e-commerce website </p>
          </div>
        </div>
          
    </div>
  )
}

export default Projects