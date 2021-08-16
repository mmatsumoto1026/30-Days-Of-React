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
class Header extends React.Component {
  constructor(props) {
    super(props);
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
      <header 
      style={{
        backgroundColor: this.props.styles.backgroundColorHeader, 
        color: this.props.styles.color, 
        borderBottom: this.props.styles.borderBottomHeader
        }}
      >
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

// TechList Component
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
class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      techs,
      user,
      greetPeople,
      handleTime,
      changeBackground,
      styles,
    } = this.props;
    return (
      <main 
        style={{
          backgroundColor: styles.backgroundColorMain, 
          color: styles.color
          }}
      >
        <div className='main-wrapper'>
          <p>Prerequisite to get started react.js:</p>
          <ul>
            <TechList techs={techs} />
          </ul>
          <UserCard user={user}/>
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
        </div>
      </main>
    );
  }
}

Main.propTypes = {
  techs: PropTypes.array,
  user: PropTypes.object,
  greetPeople: PropTypes.func,
  styles: PropTypes.object,
  handleTime: PropTypes.func,
  changeBackground: PropTypes.func,
  count: PropTypes.number,
  addOne: PropTypes.func,
  minusOne: PropTypes.func
};

// Footer Component
class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <footer>
        <div 
          className='footer-wrapper' 
          style={{
            backgroundColor: this.props.styles.backgroundColorFooter, 
            color: this.props.styles.color,
            borderTop: this.props.styles.borderTopFooter
          }}
        >
          <p>Copyright {this.props.date.getFullYear()}</p>
        </div>
      </footer>
    );
  }
}

Footer.propTypes = {
  date: PropTypes.object,
  styles: PropTypes.object
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      styles: {
        backgroundColorHeader: "#61dbfb",
        borderBottomHeader: "2px solid #61dbfb",
        backgroundColorMain: "white",
        backgroundColorFooter: "#6cf",
        borderTopFooter: "2px solid #6cf",
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
    const dark = {
      backgroundColorHeader: "black", 
      borderBottomHeader: "2px solid #515151", 
      backgroundColorMain: "black", 
      backgroundColorFooter: "black",
      borderTopFooter: "2px solid #515151", 
      color: "white"
    };
    const light = {
      backgroundColorHeader: "#61dbfb", 
      borderBottomHeader: "2px solid #61dbfb", 
      backgroundColorMain: "white", 
      backgroundColorFooter: "#6cf", 
      borderTopFooter: "2px solid #6cf", 
      color: "black"
    };
    let backgroundColorMode = this.state.styles.color === "black" ? dark : light;
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
      <div className='app' >
        <Header data={data} styles={this.state.styles}/>
        <Main
          user={user}
          date={date}
          techs={techs}
          handleTime={this.handleTime}
          greetPeople={this.greetPeople}
          changeBackground={this.changeBackground}
          styles={this.state.styles}
        />
        <Footer date={new Date()} styles={this.state.styles} />
      </div>
    );
  }
}

App.propTypes = {
  date: PropTypes.object
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);