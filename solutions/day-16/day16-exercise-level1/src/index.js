// src/index.js
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App  from './App';
import './styles/styles.scss';

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

/* exercise level 1

    What is higher order function
        - Higher order functions are functions which take other function as a parameter or return a function as a value. The function passed as a parameter is called callback.

    What is Higher Order Component
        - Similar to higher order function, a higher order component takes a component and return another component.

    What is the difference between higher order function and higher order component?
        - HOC takes a component as a parameter instead of function and returns another component instead of function.

    A higher order component can allow us to enhance a component. (T or F)
        - It's true so in App Component of example code , A simple button component was styled by "buttonWithStyles" HOC.

 */