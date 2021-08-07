import React from 'react';
import ReactDOM from 'react-dom';

// Hexadecimal color generator
const hexaColor = () => {
  let str = '0123456789abcdef';
  let color = '';
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return '#' + color;
};

const HexaColor = () => <div>{hexaColor()}</div>;

const rootElement = document.getElementById('root');
// we render the App component using the ReactDOM package
ReactDOM.render(<HexaColor />, rootElement);


/* exercises: level1

What is the difference between a regular function and an arrow function?
 - for details, please refer https://dmitripavlutin.com/differences-between-arrow-and-regular-functions/

What is a React Component?
  - A React component is a small, reusable code, which is responsible for one part of the application UI. 

How do you make a React functional component?
  - Using a JavaScript function, we can make a functional React component.
      const jsx = <tag> Content </tag>;
      const ComponentName = () => {
        return jsx;
      };

What is the difference between a pure JavaScript function and a functional component?
  - Components in React are JavaScript functions or classes, that return a JSX. Component name must start with an uppercase, and if the name is two words, it should be CamelCase - a camel with two humps.

How small is a React component?
  - A component that returns only a single HTML as JSX is considered as a small component. 

Can we make a button or input field component?
  - const Button = () => <button>action</button>
  const Input = () => <input>text</input>

Make a reusable Button component.

  const buttonStyles = {
    width: 200,
    height: 45,
    padding: 5,
    background: 'lightblue',
    border: '1px solid blue',
    borderRadius: 10
  };
  const Button = () => <button style={buttonStyles}> push me </button>;


Make a reusable InputField component.
  const inputStyles = {
      width: 250,
      height: 30,
      padding: 5,
      background: 'white',
      border: '1px solid black'
    };
  const placeholder = "Enter any keywords";
    const Input = () => <input style={inputStyles} placeholder={placeholder}></input>;

Make a reusable alert box component with one div parent element and one p 
child element of the div(warning alert box, success alert box).
  const warningAlertBox = () => {
    return <div><p>Warning! Please check your code carefully.</p></div>
  }
  const successAlertBox = () => {
    return <div><p>Great! There are no problem after compiling the code.</p></div>
  }

*/