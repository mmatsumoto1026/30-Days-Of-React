import React from 'react';
import ReactDOM from 'react-dom';

import AsabenehImage from './images/Asabeneh-Yetayeh-3.jpg';
import roundCheckMark from './images/roundCheckMark.png';
import clockIcon from './images/icons8-clock-48.png';


const skillsFormatted = ["HTML", "CSS", "Sass", "JS", "React", "Redux", "MongoDB", "Python", "Flask", "Django", "NumPy", "Pandas", "Data Analysis", "MYSQL", "GraphQL", "D3.js", "Gatsby", "Docker", "Heroku", "Git"].map((skill, i) => <li key={i}>{skill}</li>);

const userCard = (
  <div className='userCardContainer'>
    <img className="AsabenehImage" src={AsabenehImage} alt='Asabeneh image' />
    <p className="userName">Asabeneh YETAYEH<img className="roundCheckMark" src={roundCheckMark} alt='round check Mark' /></p>
    <p className="title">Senior Developer, Finland</p>
    <p className="skills">SKILLS</p>
    <ul className="clearfix">{skillsFormatted}</ul>
    <p><img className="clockIcon" src={clockIcon} alt='clockIcon' />Joined on Aug 30, 2020</p>
  </div>
);

const app = (
  <div className='app'>
    {userCard}
  </div>
);

const rootElement = document.getElementById('root');
ReactDOM.render(app, rootElement);