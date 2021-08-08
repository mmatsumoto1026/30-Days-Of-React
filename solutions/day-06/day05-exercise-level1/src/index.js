import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

const countries = [
  { name: 'Finland', city: 'Helsinki' },
  { name: 'Sweden', city: 'Stockholm' },
  { name: 'Denmark', city: 'Copenhagen' },
  { name: 'Norway', city: 'Oslo' },
  { name: 'Iceland', city: 'Reykjavík' },
];

// Country component
const Country = ({ country: { name, city } }) => {
  return (
    <div>
      <h1>{name}</h1>
      <small>{city}</small>
    </div>
  );
};

Country.propTypes = {
  country: PropTypes.object,
  name: PropTypes.string,
  city: PropTypes.string
};

// countries component
const Countries = ({ countries }) => {
  const countryList = countries.map((country, i) => <Country key={i} country={country} />);
  return <div>{countryList}</div>;
};

Countries.propTypes = {
  countries: PropTypes.array,
};

// App component
const App = () => (
  <div className='container'>
    <div>
      <h1>Countries List</h1>
      <Countries countries={countries} />
    </div>
  </div>
);

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

/* Exercises: Level 1

Why you need to map an array ?
  - In React, we use map to modify an array to list of JSX by adding a certain HTML elements to each element of an array.

Why we need keys during mapping an array ?
  - If we do not pass key to React during mapping it raises a warning on the browser. 

What is the importance of destructuring your code ?
  - Destructuring code makes it simple so the code is readable and understandable, easy to make correction and find bugs in it.

Does destructuring make your code clean and easy to read ?
  - destructuring makes your code concise and readable by eliminating the need to look around the data and processes that you place around in your code and by clarifying the data flow between components and functions.
  
*/
