import React from 'react';

/* For reference to cope with props validation error.
https://reactjs.org/docs/typechecking-with-proptypes.html
https://wp-kyoto.net/refactor-react-componet-by-eslint/
*/
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import AsabenehImage from './images/Asabeneh-Yetayeh-3.jpg';
import roundCheckMark from './images/roundCheckMark.jpg';
import clockIcon from './images/icons8-clock-48.png';

const HexaColorboxes = ({str, colorBoxStyle}) => {
    // Hexadecimal color generator
  const hexaColor = () => {
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
      style={{...colorBoxStyle, backgroundColor: color}} 
      key={i}
    >
      {color}
    </div>
  );

  return <div style={{padding: "15px 30px"}}>{colorsFormatted}</div>;
};

HexaColorboxes.propTypes = {
  str: PropTypes.string,
  colorBoxStyle: PropTypes.object
};

const UserCard = ({skills, elementsInnerText}) =>{
  const {firstName, lastName, title, skillsHeader, joinDate} = elementsInnerText;
  const skillsFormatted = skills.map((skill, i) => <li key={i}>{skill}</li>);
  return (
    <div className='userCardContainer'>
      <img className="AsabenehImage" src={AsabenehImage} alt='Asabeneh image' />
      <p className="userName">{firstName} {lastName}<img className="roundCheckMark" src={roundCheckMark} alt='round check Mark' /></p>
      <p className="title">{title}</p>
      <p className="skills">{skillsHeader}</p>
      <ul className="clearfix">{skillsFormatted}</ul>
      <p><img className="clockIcon" src={clockIcon} alt='clockIcon' />{joinDate}</p>
    </div>
  );
};

UserCard.propTypes = {
  skills: PropTypes.array,
  elementsInnerText: PropTypes.object
};

const App = () => {
  const str = '0123456789abcdef';

  const colorBoxStyle = {
    width: "100%",
    height: 68,
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    lineHeight: "68px",
    borderRadius: "5px",
    marginBottom: 2,
  };

  const skills = ["HTML", "CSS", "Sass", "JS", "React", "Redux", "MongoDB", "Python", "Flask", "Django", "NumPy", "Pandas", "Data Analysis", "MYSQL", "GraphQL", "D3.js", "Gatsby", "Docker", "Heroku", "Git"];

  const elementsInnerText = {
    firstName: "Asabeneh",
    lastName: "YETAYEH",
    title: "Senior Developer, Finland",
    skillsHeader: "SKILLS",
    joinDate: "Joined on Aug 30, 2020"
  };
  return (
  <div className='app'>
    <HexaColorboxes 
      str = {str}
      colorBoxStyle = {colorBoxStyle}
    />
    <UserCard 
      skills = {skills}
      elementsInnerText = {elementsInnerText}
    />
  </div>
  );
};

const rootElement = document.getElementById('root');
// we render the App component using the ReactDOM package
ReactDOM.render(<App />, rootElement);