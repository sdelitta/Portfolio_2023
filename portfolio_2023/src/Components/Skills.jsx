import React, { useState } from 'react';
import { FaJs, FaCss3Alt, FaHtml5, FaPython, FaReact } from 'react-icons/fa';
// Continue importing the relevant Font Awesome icons for the rest of your skills...

function Skills() {
  const [currentSkill, setCurrentSkill] = useState(null);

  const skills = [
    { name: 'JavaScript', proficiency: '80%', icon: <FaJs /> },
    { name: 'CSS', proficiency: '70%', icon: <FaCss3Alt /> },
    { name: 'HTML', proficiency: '75%', icon: <FaHtml5 /> },
    { name: 'Python', proficiency: '60%', icon: <FaPython /> },
    { name: 'React', proficiency: '65%', icon: <FaReact /> },
    // Add the rest of your skills here...
  ];

  return (
    <div id="skills" className="container py-5">
      <h2>My Skills</h2>
      <div className="d-flex flex-wrap">
        {skills.map((skill, index) => (
          <div key={index} className="p-2 icon" onClick={() => setCurrentSkill(skill)}>
            {skill.icon}
          </div>
        ))}
      </div>
      {currentSkill && (
        <div className="my-3">
          <h4>{currentSkill.name}</h4>
          <div className="progress">
            <div className="progress-bar" role="progressbar" style={{width: currentSkill.proficiency}} aria-valuenow={currentSkill.proficiency} aria-valuemin="0" aria-valuemax="100">{currentSkill.proficiency}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Skills;