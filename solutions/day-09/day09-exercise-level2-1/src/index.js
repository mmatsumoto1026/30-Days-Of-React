// index.js
import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import springImg from './images/tulips-3339416_1280.jpg';
import summerImg from './images/seagull-3232350_1280.jpg';
import fallImg from './images/tree-99852_1280.jpg';
import winterImg from './images/tree-1959267_1280.jpg';

// class based component
class Header extends React.Component {
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

const Message = ({ message }) => (
  <div>
    <h1>{message}</h1>
  </div>
);

Message.propTypes = {
  message: PropTypes.string
};
const Login = () => (
  <div>
    <h3>Please Login</h3>
  </div>
);
const Welcome = () => (
  <div>
    <h1>Welcome to 30 Days Of React</h1>
  </div>
);

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

// TechList Component
// class base component
class TechList extends React.Component {
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
  render() {
    const {
      techs,
      greetPeople,
      handleTime,
      loggedIn,
      handleLogin,
      message,
    } = this.props;
    console.log(message);

    const status = loggedIn ? <Welcome /> : <Login />;
    return (
      <main>
        <div className='main-wrapper'>
          <p>Prerequisite to get started react.js:</p>
          <ul>
            <TechList techs={this.props.techs} />
          </ul>
          {techs.length === 3 && (
            <p>You have all the prerequisite courses to get started React</p>
          )}
          <div>
            <Button
              text='Show Time'
              onClick={handleTime}
              style={buttonStyles}
            />{' '}
            <Button
              text='Greet People'
              onClick={greetPeople}
              style={buttonStyles}
            />
            {!loggedIn && <p>Please login to access more information about 30 Days Of React challenge</p>}
          </div>
          <div style={{ margin: 30 }}>
            <Button
              text={loggedIn ? 'Logout' : 'Login'}
              style={buttonStyles}
              onClick={handleLogin}
            />
            <br />
            {status}
          </div>
          <Message message={message} />
        </div>
      </main>
    );
  }
}

Main.propTypes = {
  techs: PropTypes.array,
  greetPeople: PropTypes.func,
  handleTime: PropTypes.func,
  loggedIn: PropTypes.bool,
  handleLogin: PropTypes.func,
  message: PropTypes.string
};

// CSS styles in JavaScript Object
const buttonStyles = {
  backgroundColor: '#61dbfb',
  padding: 10,
  border: 'none',
  borderRadius: 5,
  margin: '3px auto',
  cursor: 'pointer',
  fontSize: 22,
  color: 'white',
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
    
    let backGroundImage = '';
    const date = new Date();
    if(date.getMonth() === 11 || date.getMonth() <= 1) {
      backGroundImage = winterImg;
    } else if (date.getMonth() >= 2 && date.getMonth() <= 4) {
      backGroundImage = springImg;
    } else if (date.getMonth() >= 5 && date.getMonth() <= 7) {
      backGroundImage = summerImg;
    } else {
      backGroundImage = fallImg;
    }

    this.state = {
      loggedIn: false,
      techs: ['HTML', 'CSS', 'JS'],
      message: 'Click show time or Greet people to change me',
      backgroundImage: backGroundImage,
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleTime = this.handleTime.bind(this);
    this.greetPeople = this.greetPeople.bind(this);
    this.setBackgroundImage = this.setBackgroundImage.bind(this);
  }
  
  handleLogin() {
    this.setState({
      loggedIn: !this.state.loggedIn,
    });
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
    return `${month} ${date}, ${year}`;
  }

  handleTime() {
    let message = this.showDate(new Date());
    this.setState({ message });
  }

  greetPeople() {
    let message = 'Welcome to 30 Days Of React Challenge, 2020';
    this.setState({ message });
  }

  setBackgroundImage() {
    let element = document.body;
    element.style.backgroundImage = `url(${this.state.backgroundImage})`; 
  }

  render() {
    const data = {
      welcome: '30 Days Of React',
      title: 'Getting Started React',
      subtitle: 'JavaScript Library',
      author: {
        firstName: 'Asabeneh',
        lastName: 'Yetayeh',
      },
      date: 'Oct 9, 2020',
    };

    this.setBackgroundImage();

    return (
      <div className='app'>
        <Header data={data} />

        <Main
          techs={this.state.techs}
          handleTime={this.handleTime}
          greetPeople={this.greetPeople}
          loggedIn={this.state.loggedIn}
          handleLogin={this.handleLogin}
          message={this.state.message}
        />

        <Footer date={new Date()} />
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);