// index.js
import React from 'react';
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

// User Card Component
const UserCard = ({ user: { firstName, lastName, image } }) => (
  <div className='user-card'>
    <img src={image} alt={firstName} />
    <h2>
      {firstName}
      {lastName}
    </h2>
    <h3>Joined in {showDate}</h3>
  </div>
);

UserCard.propTypes = {
  user: PropTypes.object,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
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
      <header style={this.props.styles}>
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
  data: PropTypes.object,
  styles: PropTypes.object
};

const Count = ({ count, addOne, minusOne }) => (
  <div>
    <h1>{count} </h1>
    <div>
      <Button text='+1' onClick={addOne} style={buttonStyles} />
      <Button text='-1' onClick={minusOne} style={buttonStyles} />
    </div>
  </div>
);

Count.propTypes = {
  count: PropTypes.number,
  addOne: PropTypes.func,
  minusOne: PropTypes.func
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
    const {
      techs,
      user,
      date,
      greetPeople,
      handleTime,
      changeBackground,
      count,
      addOne,
      minusOne,
    } = this.props;
    return (
      <main>
        <div className='main-wrapper'>
          <p>Prerequisite to get started react.js:</p>
          <ul>
            <TechList techs={techs} />
          </ul>
          <UserCard user={user} date={date}/>
          <Button
            text='Greet People'
            onClick={greetPeople}
            style={buttonStyles}
          />
          <Button text='Show Time' onClick={handleTime} style={buttonStyles} />
          <Button
            text='Change Background'
            onClick={changeBackground}
            style={buttonStyles}
          />
          <Count count={count} addOne={addOne} minusOne={minusOne} />
        </div>
      </main>
    );
  }
}

Main.propTypes = {
  techs: PropTypes.array,
  user: PropTypes.object,
  date: PropTypes.object,
  greetPeople: PropTypes.func,
  handleTime: PropTypes.func,
  changeBackground: PropTypes.func,
  count: PropTypes.number,
  addOne: PropTypes.func,
  minusOne: PropTypes.func
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
    this.state = {
      count: 0,
      styles: {
        backgroundColor: 'silver',
        color: 'black',
      },
    };
    this.addOne = this.addOne.bind(this);
    this.minusOne = this.minusOne.bind(this);
    this.changeBackground = this.changeBackground.bind(this);
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
  addOne() {
    this.setState({ count: this.state.count + 1 });
  }

  // method which subtract one to the state
  minusOne() {
    this.setState({ count: this.state.count - 1 });
  }
  handleTime() {
    alert(showDate(new Date()));
  }
  greetPeople() {
    alert('Welcome to 30 Days Of React Challenge, 2020');
  }
  changeBackground() {
    const dark = {backgroundColor: "black", color: "white"};
    const light = {backgroundColor: "silver", color: "black"};
    let backgroundColorMode = this.state.styles.backgroundColor === "silver" ? dark : light;
    this.setState({ styles: backgroundColorMode});
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
    const date = new Date();
    // copying the author from data object to user variable using spread operator
    const user = { ...data.author, image: asabenehImage };

    return (
      <div className='app' style={this.state.styles}>
        {"backGroundColor is " + this.state.styles.backgroundColor}
        <Header data={data} />
        <Main
          user={user}
          date={date}
          techs={techs}
          handleTime={this.handleTime}
          greetPeople={this.greetPeople}
          changeBackground={this.changeBackground}
          addOne={this.addOne}
          minusOne={this.minusOne}
          count={this.state.count}
        />
        <Footer date={new Date()} />
      </div>
    );
  }
}

App.propTypes = {
  date: PropTypes.object
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

/* Exercises: Level 1

  What was your state today? Are you happy? I hope so. If you manage to make it this far you should be happy.
    - Yeah My 'state' became happy because I understood how and where state should be declared and then how I use and reset (by setState method) it in React component so I could manage component's 'state'.

  What is state in React ?
    - State is an object in react which let the component re-render when state data changes.
  
  What is the difference between props and state in React ?
    - Props is being used to pass data from one component to another and mostly from parent component to child component. State is an object that is held by React component locally and it can be passed from parent component to child one as Props. We can only read Props in component that received Props, on the other hand, we can read and reset State in component that holds the one.

  How do you access state in a React component ?
    - please see above code. We declared state object in App component constructor. It holds two properties count and styles. then, we accessed them by 'this.state.count' or 'this.state.styles.backgroundColor' locally.

  
  How do you set a set in a React component ?
    - In the code showed above, we declared state object in App component constructor, then we reset the state's properties by setState method like 'this.setState({ count: this.state.count + 1 })' or 'this.setState({ styles: backgroundColorMode})'.
 */