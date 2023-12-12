import { Component } from "react";

function About() {

  const developers = [
    {
      devName: 'Niles Thompson',
      role: 'Full Stack Developer',
      bio: 'Enter Bio here',
      github: 'https://github.com/Niles086'
    },
    {
      devName: 'DeAndre Ordonez',
      role: 'Full Stack Developer',
      bio : 'Enter Bio here',
      github: 'https://github.com/HighMid'
    },
  ];
  
  return(
    <div>
      <h2>About The Devs</h2>
      {developers.map((dev, index) => (
        <div key={index}>
          <h3>{dev.devName}</h3>
          <p>{dev.role}</p>
          <p>{dev.bio}</p>
          <a href={dev.github} target="_blank" rel="noopener noreferrer">GitHub Profile</a>
        </div>
      ))}
    </div>
  );

};

export default About;
