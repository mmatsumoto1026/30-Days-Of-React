import React from 'react';
import ReactDOM from 'react-dom';

import htmlLogo from './images/html5-logo-31813.png';
import cssLogo from './images/icons8-css3-480.png';
import javascriptLogo from './images/javascript-39397.png';
import reactLogo from './images/1174949_js_react js_logo_react_react native_icon.png';

const header = "Front End Technologies";

const frontendTechs = (
  <div className='frontendTechsContainer'>
    <h3 >{header}</h3>
    <img className="htmlLogo" src={htmlLogo} alt='HTML Logo image' />
    <img className="cssLogo" src={cssLogo} alt='CSS Logo image' />
    <img className="javascriptLogo" src={javascriptLogo} alt='JavaScript Logo image' />
    <img className="reactLogo" src={reactLogo} alt='React Logo image' />
  </div>
);

const applySubscription = (
  <div className="subscriptionContainer">
    <h1>SUBSCRIBE</h1>
    <p>Sign up with your Email address to receive news and updates.</p>
    <input placeholder="First name"></input>
    <input placeholder="Last name"></input>
    <input placeholder="Email"></input>
    <button>Subscribe</button>
  </div>
);

const app = (
  <div className='app'>
    {frontendTechs}
    {applySubscription}
  </div>
);

const rootElement = document.getElementById('root');
ReactDOM.render(app, rootElement);