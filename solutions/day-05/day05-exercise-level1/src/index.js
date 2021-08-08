import React from 'react';

/* For reference to cope with props validation error.
https://reactjs.org/docs/typechecking-with-proptypes.html
https://wp-kyoto.net/refactor-react-componet-by-eslint/
*/
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import asabenehImage from './images/Asabeneh-Yetayeh-3.jpg';

// Fuction to show month date year

const showDate = (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const month = months[time.getMonth()].slice(0, 3);
  const year = time.getFullYear();
  const date = time.getDate();
  return ` ${month} ${date}, ${year}`;
};

// Header Component
const Header = ({
  data: {
    welcome,
    title,
    subtitle,
    author: { firstName, lastName },
    date,
  },
}) => {
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {firstName} {lastName}
        </p>
        <small>{showDate(date)}</small>
      </div>
    </header>
  );
};

Header.propTypes = {
  data: PropTypes.object
};
// TechList Component
const TechList = ({ techs }) => {
  const techList = techs.map((tech) => <li key={tech}>{tech}</li>);
  return techList;
};

TechList.propTypes = {
  techs: PropTypes.array
};

// User Card Component
const UserCard = ({ user: { firstName, lastName, image } }) => (
  <div className='user-card'>
    <img src={image} alt={firstName} />
    <h2>
      {firstName}
      {lastName}
    </h2>
  </div>
);

UserCard.propTypes = {
  user: PropTypes.object
};

// A button component

const Button = ({ text, onClick, style }) => (
  <button style={style} onClick={onClick}>
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.object
};

// CSS styles in JavaScript Object
const buttonStyles = {
  backgroundColor: '#61dbfb',
  padding: 10,
  border: 'none',
  borderRadius: 5,
  margin: 3,
  cursor: 'pointer',
  fontSize: 18,
  color: 'white',
};

// Main Component
const Main = ({ user, techs, greetPeople, handleTime }) => (
  <main>
    <div className='main-wrapper'>
      <p>Prerequisite to get started react.js:</p>
      <ul>
        <TechList techs={techs} />
      </ul>
      <UserCard user={user} />
      <Button text='Greet People' onClick={greetPeople} style={buttonStyles} />
      <Button text='Show Time' onClick={handleTime} style={buttonStyles} />
    </div>
  </main>
);

Main.propTypes = {
  user: PropTypes.object,
  techs: PropTypes.array,
  greetPeople: PropTypes.func,
  handleTime: PropTypes.func
};

// Footer Component
const Footer = ({ copyRight }) => (
  <footer>
    <div className='footer-wrapper'>
      <p>Copyright {copyRight.getFullYear()}</p>
    </div>
  </footer>
);

Footer.propTypes = {
  copyRight: PropTypes.object
};

// The App, or the parent or the container component
// Functional Component
const App = () => {
  const data = {
    welcome: 'Welcome to 30 Days Of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
    },
    date: new Date(), // date needs to be formatted to a human readable format
  };
  const date = new Date();
  const techs = ['HTML', 'CSS', 'JavaScript'];
  // copying the author from data object to user variable using spread operator
  const user = { ...data.author, image: asabenehImage };

  const handleTime = () => {
    alert(showDate(new Date()));
  };
  const greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge, 2020');
  };

  return (
    <div className='app'>
      <Header data={data} />
      <Main
        user={user}
        techs={techs}
        handleTime={handleTime}
        greetPeople={greetPeople}
      />
      <Footer copyRight={date} />
    </div>
  );
};
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

/*
Exercises: Level 1

What is props in a React component ?
  - Props is a special keyword in React that stands for properties and is being used to pass data from one component to another and mostly from parent component to child component. We can say props is a data carrier or a means to transport data.

How do you access props in a React component ?
  - props is an object and it will be populated with the data we passed as attributes and the proper name of these attributes are props. so we can access props in a React component by "props.dataName".

What data types can we pass as props to components ?
  - for instans, string, number, boolean, array, object, function, and so on. Please refer https://reactjs.org/docs/typechecking-with-proptypes.html

What is a propTypes?
  - The propTypes package helps us to assign the data types of the props we passed to a component.

What is a default propTypes?
  - The defaultProps can be used when we want to have some default prop types for a component.
*/
