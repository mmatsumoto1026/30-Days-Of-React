import React from 'react';
import ReactDOM from 'react-dom';

import AsabenehImage from './images/Asabeneh-Yetayeh-3.jpg';
import roundCheckMark from './images/roundCheckMark.jpg';
import clockIcon from './images/icons8-clock-48.png';

// Hexadecimal color generator
const hexaColor = () => {
  let str = '0123456789abcdef';
  let color = '';
  let colorArr =[];
  for(let i = 0; i < 5; i++){
    for (let j = 0; j < 6; j++) {
      let index = Math.floor(Math.random() * str.length);
      color += str[index];
    }
    colorArr.push('#' + color);
    color = '';
  }
  return colorArr;
};

const colorsFormatted = hexaColor().map((color, i) => 
  <div 
    style={
      {
        width: "100%",
        height: 68,
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        backgroundColor: color,
        textAlign: "center",
        lineHeight: "68px",
        borderRadius: "5px",
        marginBottom: 2,
      }
    } 
    key={i}
  >
        {color}
  </div>
);

const HexaColorboxes = () => {
  return <div style={{padding: "15px 30px"}}>{colorsFormatted}</div>;
};

const skillsFormatted = ["HTML", "CSS", "Sass", "JS", "React", "Redux", "MongoDB", "Python", "Flask", "Django", "NumPy", "Pandas", "Data Analysis", "MYSQL", "GraphQL", "D3.js", "Gatsby", "Docker", "Heroku", "Git"].map((skill, i) => <li key={i}>{skill}</li>);

const UserCard = () =>{
  return (
    <div className='userCardContainer'>
      <img className="AsabenehImage" src={AsabenehImage} alt='Asabeneh image' />
      <p className="userName">Asabeneh YETAYEH<img className="roundCheckMark" src={roundCheckMark} alt='round check Mark' /></p>
      <p className="title">Senior Developer, Finland</p>
      <p className="skills">SKILLS</p>
      <ul className="clearfix">{skillsFormatted}</ul>
      <p><img className="clockIcon" src={clockIcon} alt='clockIcon' />Joined on Aug 30, 2020</p>
    </div>
  );
};

const App = () => {
  return (
  <div className='app'>
    <HexaColorboxes />
    <UserCard />
  </div>
  );
};

const rootElement = document.getElementById('root');
// we render the App component using the ReactDOM package
ReactDOM.render(<App />, rootElement);