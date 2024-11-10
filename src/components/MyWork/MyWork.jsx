import React from 'react'
import './MyWork.css'
import mywork_data from '../../assets/mywork_data.js'
import theme_pattern from '../../assets/theme_pattern.svg'



const MyWork = () => {
  return (
    <div className="work-section">
      <div className="about-title">
        <h1>My Work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      {mywork_data.map((project, index) => (
        <div key={index} className="grid-container">
          {/* Alternating image and description order for each project */}
          {index % 2 === 0 ? (
            <>
              <div className="work-image">
                <img src={project.w_img} alt={project.w_name} />
              </div>
              <div className="work-description">
                <h2>{project.w_name}</h2>
                <p>{project.w_description}</p>
              </div>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <button className="github-button">See Here</button>
                </a>
            </>
          ) : (
            <>
              <div className="work-description">
                <h2>{project.w_name}</h2>
                <p>{project.w_description}</p>
              </div>
              
              <div className="work-image">
                <img src={project.w_img} alt={project.w_name} />
              </div>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <button className="github-button">See Here</button>
                </a>
            </>
          )}
        </div>
      ))}
    </div>
  );
};


export default MyWork
