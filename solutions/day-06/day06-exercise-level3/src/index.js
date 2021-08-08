import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

const HorizontalBarGraphDeployer = ({tenHighestPopulation}) => {
  
  const horizontalBarGraph = tenHighestPopulation.map((populationData, i) => {
    const barGraphlength = "" + Math.round(populationData.population / tenHighestPopulation[0].population * 100) + "%";
    const populationWithComma = populationData.population.toLocaleString();
    
    return (
      <div key={i} className="populationData">
        <span className="countryName">{populationData.country.toUpperCase()}</span>
        <div className="barGraphContainer">
          <div 
            className="barGraph" 
            style={{width: barGraphlength}}>
          </div>
        </div>
        <span className="populationNum">{populationWithComma}</span>
      </div>
    );
  });
  return horizontalBarGraph;
};
    
HorizontalBarGraphDeployer.propTypes = {
  tenHighestPopulation: PropTypes.array
};

// App component
const App = () => {
  const tenHighestPopulation = [
    { country: 'World', population: 7693165599 },
    { country: 'China', population: 1377422166 },
    { country: 'India', population: 1295210000 },
    { country: 'USA', population: 323947000 },
    { country: 'Indonesia', population: 258705000 },
    { country: 'Brazil', population: 206135893 },
    { country: 'Pakistan', population: 194125062 },
    { country: 'Nigeria', population: 186988000 },
    { country: 'Bangladesh', population: 161006790 },
    { country: 'Russia', population: 146599183 },
    { country: 'Japan', population: 126960000 },
  ];
  return (
  <div className='container'>
    <h1>30 Days Of React</h1>
    <h2>World Population</h2>
    <p>Ten most populated countries</p>
    <HorizontalBarGraphDeployer tenHighestPopulation={tenHighestPopulation} />
  </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
