// index.js
import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

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
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
      message,
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
          <p>{message}</p>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  data: PropTypes.object,
  styles: PropTypes.object
};

// Main Component
class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      image,
      countryName,
      capitalName,
      language,
      population,
      currency,
      changeCountry,
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
          <div className='countryPaper'>
            <div className='countryFlag'>
              <img src={image} alt="country flag" />
            </div>
              <h2><strong>{countryName}</strong></h2>
            <div className="countryInfo">
              <h3><strong>Capital: </strong>{capitalName}</h3>
              <h3><strong>Language: </strong>{language}</h3>
              <h3><strong>population: </strong>{population.toLocaleString()}</h3>
              <h3><strong>Currency: </strong>{currency}</h3>
            </div>
          </div>
          <Button
            text='Select Country'
            onClick={changeCountry}
            style={buttonStyles}
          />
        </div>
      </main>
    );
  }
}

Main.propTypes = {
  image: PropTypes.string,
  countryName: PropTypes.string,
  capitalName: PropTypes.string,
  language: PropTypes.string,
  population: PropTypes.number,
  currency: PropTypes.string,
  changeCountry: PropTypes.func,
  styles: PropTypes.object,
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
      styles: {
        backgroundColorHeader: "#61dbfb",
        borderBottomHeader: "2px solid #61dbfb",
        backgroundColorMain: "#eeeeee",
        backgroundColorFooter: "#6cf",
        borderTopFooter: "2px solid #6cf",
        color: 'black',
      },
      
      image: "https://restcountries.eu/data/jpn.svg",
      countryName: 'Japan',
      capitalName: 'Tokyo',
      language: "Japanese",
      population: 126960000,
      currency: "Japanese yen"
    };

    this.changeCountry = this.changeCountry.bind(this);
  }

  changeCountry() {
    let url = 'https://restcountries.eu/rest/v2/all';

    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'json';
    request.send();
    request.onload = () => {
      const data = request.response;
      let countryData = data;
      let randomNum = Math.floor(Math.random() * countryData.length);
      this.setState({ 
        image: countryData[randomNum].flag,
        countryName: countryData[randomNum].name,
        capitalName: countryData[randomNum].capital,
        language: countryData[randomNum].languages[0].name,
        population: countryData[randomNum].population,
        currency: countryData[randomNum].currencies[0].name});
    };
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
      message: 'Select a country for your next holiday'
    };

    return (
      <div className='app' >
        <Header data={data} styles={this.state.styles}/>
        <Main
          image={this.state.image}
          countryName={this.state.countryName}
          capitalName={this.state.capitalName}
          language={this.state.language}
          population={this.state.population}
          currency={this.state.currency}
          changeCountry={this.changeCountry}
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