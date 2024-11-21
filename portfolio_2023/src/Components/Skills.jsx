import React, { useState } from 'react';
import { FaJs, FaCss3Alt, FaHtml5, FaPython, FaReact, FaBootstrap, FaDatabase, FaTrello, FaFigma } from 'react-icons/fa';
import { DiDjango } from 'react-icons/di';
import { SiMysql, SiFirebase, SiGatsby } from 'react-icons/si';

function Skills() {
  const [currentSkill, setCurrentSkill] = useState(null);

  const skills = [
    { name: 'JavaScript', proficiency: 'Intermediate', icon: <FaJs /> },
    { name: 'CSS', proficiency: 'Advanced', icon: <FaCss3Alt /> },
    { name: 'Bootstrap', proficiency: 'Intermediate', icon: <FaBootstrap /> },
    { name: 'HTML', proficiency: 'Advanced', icon: <FaHtml5 /> },
    { name: 'Python', proficiency: 'Intermediate', icon: <FaPython /> },
    { name: 'Django', proficiency: 'Intermediate', icon: <DiDjango /> },
    { name: 'MongoDB', proficiency: 'Novice', icon: <FaDatabase /> },
    { name: 'SQL', proficiency: 'Novice', icon: <SiMysql /> },
    { name: 'Firebase', proficiency: 'Advanced', icon: <SiFirebase /> },
    { name: 'React', proficiency: 'Intermediate', icon: <FaReact /> },
    { name: 'Gatsby', proficiency: 'Novice', icon: <SiGatsby /> },
    { name: 'Trello', proficiency: 'Intermediate', icon: <FaTrello /> },
    { name: 'Figma', proficiency: 'Intermediate', icon: <FaFigma /> },
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
          <p>Proficiency Level: {currentSkill.proficiency}</p>
        </div>
      )}
    </div>
  );
}

export default Skills;