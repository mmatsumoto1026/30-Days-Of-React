import React from 'react';

/* For reference to cope with props validation error.
https://reactjs.org/docs/typechecking-with-proptypes.html
https://wp-kyoto.net/refactor-react-componet-by-eslint/
*/
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import htmlLogo from './images/html5-logo-31813.png';
import cssLogo from './images/icons8-css3-480.png';
import javascriptLogo from './images/javascript-39397.png';
import reactLogo from './images/1174949_js_react js_logo_react_react native_icon.png';

const header = "Front End Technologies";

const FrontendTechs = ({ classNames }) => {
  const {htmlClass, cssClass, javascriptClass, reactClass} = {...classNames};
  return (
  <div className='frontendTechsContainer'>
    <h3 >{header}</h3>
    <img className={htmlClass} src={htmlLogo} alt='HTML Logo image' />
    <img className={cssClass} src={cssLogo} alt='CSS Logo image' />
    <img className={javascriptClass} src={javascriptLogo} alt='JavaScript Logo image' />
    <img className={reactClass} src={reactLogo} alt='React Logo image' />
  </div>
  );
};

FrontendTechs.propTypes = {
  classNames: PropTypes.object.isRequired 
};

const ApplySubscription = ({header, message, placeholders, buttonInnerText}) => {
  const {firstName, lastName, email} = {...placeholders};
  return (
  <div className="subscriptionContainer">
    <h1>{header}</h1>
    <p>{message}</p>
    <input placeholder={firstName}></input>
    <input placeholder={lastName}></input>
    <input placeholder={email}></input>
    <button>{buttonInnerText}</button>
  </div>
  );
};

ApplySubscription.propTypes = {
  header: PropTypes.string,
  message: PropTypes.string,
  placeholders: PropTypes.object,
  buttonInnerText: PropTypes.string
};

const App = () => {
  const classNames = {
    htmlClass: "htmlLogo",
    cssClass: "cssLogo",
    javascriptClass: "javascriptLogo",
    reactClass: "reactLogo"
  };
  const placeholders = {
    firstName: "First name",
    lastName: "Last name",
    email: "Email"
    };
  return (
  <div className='app'>
    <FrontendTechs classNames = {classNames} />
    <ApplySubscription 
    header = "SUBSCRIBE" 
    message = "Sign up with your Email address to receive news and updates." 
    placeholders = {placeholders}
    buttonInnerText = "Subscribe"
    />
  </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);