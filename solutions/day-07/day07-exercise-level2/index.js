import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

class ColorfulDatenumBoxDeployer extends React.Component {
  /* arguments "props" in constructor and super are replaced with a object for destructuring */
  constructor({oddYellow, evenGreen, primeRed, isPrimeNumber}) {
    super({oddYellow, evenGreen, primeRed, isPrimeNumber});
    /* declare generateDateColorArr method instead of function and bind it to this object */
    this.generateDateColorArr = this. generateDateColorArr.bind(this);
  }
  generateDateColorArr() { /* method instead of function */
    let dateColorArr = [];
    for(let j = 0; j <= 31; j++) {
      j === 0 ? dateColorArr.push({index: j, color: this.props.evenGreen}) /* using props data with syntax this.props. */
        : this.props.isPrimeNumber(j) ? dateColorArr.push({index: j, color: this.props.primeRed})
        : j % 2 === 0 ? dateColorArr.push({index: j, color: this.props.evenGreen})
        : dateColorArr.push({index: j, color: this.props.oddYellow});
      }
    return dateColorArr;
  }

  render() { /* inside render method I declare a const dateColorBoxes and assign mapping data into it and render a unordered list element includes the mapping data */
    const dateColorBoxes = this.generateDateColorArr().map((dateColor, i) => 
    <li key={i} style={{backgroundColor: dateColor.color}} className="colorfulDatenumBox">{dateColor.index}</li>
    );

    return <ul>{dateColorBoxes}</ul>; 
  }
}

ColorfulDatenumBoxDeployer.propTypes = {
  oddYellow: PropTypes.string,
  evenGreen: PropTypes.string,
  primeRed: PropTypes.string,
  isPrimeNumber: PropTypes.func
};

class HexColorBoxDeployer extends React.Component {
  /* arguments "props" in constructor and super are replaced with a object for destructuring */
  constructor({hexaColor}) {
    super({hexaColor});
    /* declare generateHexColorArr method instead of function and bind it to this object */
    this.generateHexColorArr = this. generateHexColorArr.bind(this);
  }

  generateHexColorArr() { /* method instead of function */
    let hexColorArr = [];  
    for(let k = 0; k <= 31; k++) {
      hexColorArr.push({index: k, color: this.props.hexaColor()}); /* using props data with syntax this.props. */
    }
    return hexColorArr;
  }

  render() {
    const hexColorBoxes = this.generateHexColorArr().map((hexColor, i) => 
    <li key={i} style={{backgroundColor: hexColor.color}} className="hexColorBox">{hexColor.color}</li>
    );
    return <ul>{hexColorBoxes}</ul>;
  }
}

HexColorBoxDeployer.propTypes = {
  hexaColor: PropTypes.func
};

// App component
class App extends React.Component {
  constructor(props) {
    super(props);
    /* declare isPrimeNumber method and hexaColor method instead of function and bind it to this object */
    this.isPrimeNumber = this.isPrimeNumber.bind(this);
    this.hexaColor = this.hexaColor.bind(this);
  }

  isPrimeNumber(num) { /* method instead of function */
    if(num === 2) {
        return true;
    } else {
        for(let i = 2; i < num; i++) {
            if(num % i === 0) {
                return false;
            }
            if(i + 1 === num) {
                return true;
            }
        }
    }
  }

  hexaColor() { /* method instead of function */
    const str = '0123456789abcdef';
    let color = '';
      for (let j = 0; j < 6; j++) {
        let index = Math.floor(Math.random() * str.length);
        color += str[index];
      }
      return '#' + color;
  }
  render() {
    /* constants declaration have done in render method */
    const oddYellow = "#FDDB3A";
    const evenGreen =  "#21BF73";
    const primeRed = "#FD5E53";

    return (
      <div className='container'>
        <div>
          <h1>30 Days Of React</h1>
          <p>Number Generator</p>
          <ColorfulDatenumBoxDeployer oddYellow={oddYellow} evenGreen={evenGreen} primeRed={primeRed} isPrimeNumber={this.isPrimeNumber} />
          <h1>30 Days Of React</h1>
          <p>Hexadecimal Colors</p>
          <HexColorBoxDeployer hexaColor={this.hexaColor} />
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
