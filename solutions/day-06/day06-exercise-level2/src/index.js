import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

const ColorfulDatenumBoxDeployer = ({oddYellow, evenGreen, primeRed, isPrimeNumber}) => {
  const generateDateColorArr = () => {
    let dateColorArr = [];
    for(let j = 0; j <= 31; j++) {
      j === 0 ? dateColorArr.push({index: j, color: evenGreen})
        : isPrimeNumber(j) ? dateColorArr.push({index: j, color: primeRed})
        : j % 2 === 0 ? dateColorArr.push({index: j, color: evenGreen})
        : dateColorArr.push({index: j, color: oddYellow});
      }
    return dateColorArr;
  };

  const dateColorBoxes = generateDateColorArr().map((dateColor, i) => 
    <li key={i} style={{backgroundColor: dateColor.color}} className="colorfulDatenumBox">{dateColor.index}</li>
  );
  return <ul>{dateColorBoxes}</ul>;
};

ColorfulDatenumBoxDeployer.propTypes = {
  oddYellow: PropTypes.string,
  evenGreen: PropTypes.string,
  primeRed: PropTypes.string,
  isPrimeNumber: PropTypes.func
};


const HexColorBoxDeployer = ({hexaColor}) => {
  const generateHexColorArr = () => {
    let hexColorArr = [];  
    for(let k = 0; k <= 31; k++) {
      hexColorArr.push({index: k, color: hexaColor()});
    }
  
    return hexColorArr;
  };

  const hexColorBoxes = generateHexColorArr().map((hexColor, i) => 
    <li key={i} style={{backgroundColor: hexColor.color}} className="hexColorBox">{hexColor.color}</li>
  );
  return <ul>{hexColorBoxes}</ul>;
};

HexColorBoxDeployer.propTypes = {
  hexaColor: PropTypes.func
};

// App component
const App = () => {

  const isPrimeNumber = (num) => {
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
  };

  const oddYellow = "#FDDB3A";
  const evenGreen =  "#21BF73";
  const primeRed = "#FD5E53";

  const hexaColor = () => {
    const str = '0123456789abcdef';
    let color = '';
      for (let j = 0; j < 6; j++) {
        let index = Math.floor(Math.random() * str.length);
        color += str[index];
      }
      return '#' + color;
  };

  return (
  <div className='container'>
    <div>
      <h1>30 Days Of React</h1>
      <p>Number Generator</p>
      <ColorfulDatenumBoxDeployer oddYellow={oddYellow} evenGreen={evenGreen} primeRed={primeRed} isPrimeNumber={isPrimeNumber} />
      <h1>30 Days Of React</h1>
      <p>Hexadecimal Colors</p>
      <HexColorBoxDeployer hexaColor={hexaColor} />
    </div>
  </div>
);
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
