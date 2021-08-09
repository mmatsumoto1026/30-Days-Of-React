import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import asabenehImage from './images/Asabeneh-Yetayeh-3.jpg';

// Fuction to show month date year

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

// class based component
class Header extends React.Component {
  constructor(props) {
    super(props);
    // the code inside the constructor run before any other code
  }
  render() {
    console.log(this.props.data);
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
    } = this.props.data;

    return (
      <header>
        <div className='header-wrapper'>
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>
            {firstName} {lastName}
          </p>
          <small>{date}</small>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  data: PropTypes.object
};

// TechList Component
// class base component
class TechList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { techs } = this.props;
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>);
    return techsFormatted;
  }
}

TechList.propTypes = {
  techs: PropTypes.array
};

// Main Component
// Class Component
class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main>
        <div className='main-wrapper'>
          <p>Prerequisite to get started react.js:</p>
          <ul>
            <TechList techs={this.props.techs} />
          </ul>
          <UserCard user={this.props.user} />
          <Button
            text='Greet People'
            onClick={this.props.greetPeople}
            style={buttonStyles}
          />
          <Button
            text='Show Time'
            onClick={this.props.handleTime}
            style={buttonStyles}
          />
        </div>
      </main>
    );
  }
}

Main.propTypes = {
  techs: PropTypes.array,
  user: PropTypes.object,
  greetPeople: PropTypes.func,
  handleTime: PropTypes.func
};

// Footer Component
// Class component
class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <footer>
        <div className='footer-wrapper'>
          <p>Copyright {this.props.date.getFullYear()}</p>
        </div>
      </footer>
    );
  }
}

Footer.propTypes = {
  date: PropTypes.object
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.showDate = this.showDate.bind(this);
    this.handleTime = this.handleTime.bind(this);
    this.greetPeople = this.greetPeople.bind(this);
  }
  showDate(time) {
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
  }
  handleTime() {
    alert(this.showDate(new Date()));
  }
  greetPeople() {
    alert('Welcome to 30 Days Of React Challenge, 2020');
  }
  render() {
    const data = {
      welcome: 'Welcome to 30 Days Of React',
      title: 'Getting Started React',
      subtitle: 'JavaScript Library',
      author: {
        firstName: 'Asabeneh',
        lastName: 'Yetayeh',
      },
      date: 'Oct 7, 2020',
    };
    const techs = ['HTML', 'CSS', 'JavaScript'];

    // copying the author from data object to user variable using spread operator
    const user = { ...data.author, image: asabenehImage };

    return (
      <div className='app'>
        <Header data={data} />
        <Main
          user={user}
          techs={techs}
          handleTime={this.handleTime}
          greetPeople={this.greetPeople}
        />

        <Footer date={new Date()} />
      </div>
    );
  }
}

App.propTypes = {
  this: PropTypes.object
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

/* Exercises: Level 1

How do you write a pure JavaScript function
  - //declaring a function without a parameter
    function functionName() {
      // code goes here
    }
    functionName() // calling function by its name and with parentheses

What is inheritance and how do you make a child from a parent class?
  - Using inheritance we can access all the properties and the methods of the parent class. This reduces repetition of code.
    // syntax
    class ChildClassName extends ParentClassName{
    // code goes here
    }

What is class based React component ?
  - Class based component is made using JavaScript class and it inherits from react Component. Only class based components used to have state and life cycle methods. However, after React version 16.8.0 functional components can have state and life cycle using React Hooks. Class based React component is a child of React.Component and it has a built-in render method and it may have a constructor.

What is the difference between functional React component and class based React component ?
  - A functional component is just a plain JavaScript function which accepts props as an argument and returns a React element. A class component requires you to extend from React.Component and create a render function which returns a React element.

When do we need to use class based components instead of functional components?
 - When we need a state in our component we will need to create a class component. However, the latest version of react can allow us to write every component in our application only with functional components. This was impossible in previous versions.

What is the use cases of class based component ?
  - Please see above code. there is a class based component Header that is used to render some JSX elements and destructure a props data.
    There also is a class based TechList component, it destruct  props to tech array and create formatted JSX element mapping data from the array, then return mapping data to its parents component Main. A class based component Main render a text and a unordered list created in TechList component, a UserCard, and two buttons. Footer class based component render a copyright. and finaly, There is an App class based component that provides method which we can access and pass to the component's child component, and render three components.

Which type of component do use most frequently ? functional or class-based component?
  - So far, I used functional component for stateless component usage, and class-based for statefull one and App component that render all UI components.

What is React life cycle ? (not covered yet) ?
  - Each component in React has a lifecycle which you can monitor and manipulate during its three main phases. The three phases are: Mounting, Updating, and Unmounting.
What is state in React ? (not covered yet)
  - React components has a built-in state object. The state object is where you store property values that belongs to the component. When the state object changes, the component re-renders.
*/