// src/index.js
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App  from './App';
import './styles/styles.scss';

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

/* exercise level1

    What is a package?
        - Package is something like directory/folder that contains many codes.

    What is a third party package ?
        - third party libraries are packages adding more useful functionality and simpler code we requires to our project.

    Do you have to use third party packages?
        - We don't have to use third party packages but to avoid creating the wheel instead we have to know how to use the wheel, we use ones. We have to consider that the package we've found is really needed for our projet or not, there will be no security issues, and so on.

        https://medium.com/@PepsRyuu/why-you-should-reconsider-using-third-party-javascript-libraries-fc9787b3fb44

    How do you know the popularity and stability of a third party package?
        - In npm registry for instance, we can see the popularity of third party package as the number of weekly downloads and stability as version and last published timing.

    How many JavaScript packages are there on the npm registry?
        - There are 1,716,591 packages on the npm registry today.

    How do you install a third party package?
        - Once we have installed a package in node_modules by the command 'npm install packageName' then import them into our js file, we can use it.

    What packages do you use most frequently?
        - Of course, react package.

    What package do you use to fetch data?
        - in the example code, I used axios package to fetch country data from an URL.

    What is the purpose of classnames package?
        - The purpose of classnames package is for conditionally joining classNames together.

        https://www.npmjs.com/package/classnames

    What is the pupose validator package?
        - The purpose of validator package is validating and sanitizing strings.

        https://www.npmjs.com/package/validator

 */