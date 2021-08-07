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
/*const numOne = 3;
const numTwo = 2;

const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
);

const yearBorn = 1820;
const currentYear = new Date().getFullYear();
const age = currentYear - yearBorn;
const personAge = (
  <p>
    {' '}
    {author.firstName} {author.lastName} is {age} years old
  </p>
);


const techs = ['HTML', 'CSS', 'JavaScript'];
const techsFormatted = techs.map((tech, i) => <li key={i}>{tech}</li>);


const main = (
  <main  style= {}>
    <div className='main-wrapper'>
      <p>
        Prerequisite to get started{' '}
        <strong>
          <em>react.js</em>
        </strong>
        :
      </p>
      <ul>{techsFormatted}</ul>
      {result}
      {personAge}
      {user}
    </div>
  </main>
);

const copyRight = 'Copyright 2020';

const footer = (
  <footer>
    <div className='footer-wrapper'>
      <p>{copyRight}</p>
    </div>
  </footer>
);
*/

const app = (
  <div className='app'>
    {frontendTechs}
    {applySubscription}
  </div>
);

const rootElement = document.getElementById('root');
ReactDOM.render(app, rootElement);


/* Excercises: Level1

What is a module?
  - A single or multiple functions, that can be exported and imported when needed, can be included in a project. In React we do not use link to access modules or packages, instead we import the module.

What is package?
  - A Package is a module or a collection of modules. For instance, React, ReactDOM are packages.

What is the difference between a module and a package.
  - module is multiple functions or components. pakage is a collection of modules.

What is NPM?
  - NPM is a default package manager for Node.js. It allows users to consume and distribute JavaScript modules that are available in the registry. NPM allows to create packages, use packages and distribute packages. NMP also played quite a big role in the growth of JavaScript.

What is Webpack?
  - Webpack is a module bundler that is a tool for putting together multiple modules.

How do you create a new React project?
  - 1. install create-react-app
    2. install node
    3. make sure installation of node and its version
    4. run the command "npx create-react-app name-of-your-project" 

What are the files and folders inside a project folder(package.json, package-lock.json or yarn.lock, .gitignore,node_modules and public)?
  - 1. When used as a dependency manager for a local project, npm can install, in one command, all the dependencies of a project through the package.json file.
    2. npm provides the package-lock.json file which has the entry of the exact version used by the project after evaluating semantic versioning in package.json. 
    3. yarn.lock stores exactly the version of each installed dependencies.
    4. React boilerplate comes with git initiated, and the .gitingore allows files and folders not to be pushed to GitHub.
    5. node_modules stores all the necessary node packages of the React applications.
    6. 
      index.html - the only HTML file we have in the entire application

      favicon.ico - an icon file

      manifest.json - is used to make the application a progressive web app

      other images - open graph images(open graph images are images which are visible when a link share on social media)

      robots.txt - information, if the website allows web scraping

What is your favorite code editor (I believe that it is Visual Studio Code)?
  - I'm now using Visual Studio Code heavily and it is exactly useful.

Add different Visual Studio Code extensions to improve your productivity(eg. prettier, ESLint etc).
  - I've installed some extensions like Colonize, Material Icon Theme, Prettier, ESLint, Bracket Pair Colorizer, ES7 React/Redux/GraphQL/React-Native snippets and so on. I also configured ESLint for 3d-Days-Of-React with refering https://qiita.com/Mount/items/5f8196b891444575b7db.

Try to make a different custom module in a different file and import it to index.js.
  - I've created customModule.js and import a function from it to index.js.
*/