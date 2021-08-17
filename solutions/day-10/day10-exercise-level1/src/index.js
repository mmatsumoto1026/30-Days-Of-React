// src/index.js
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App  from './App';

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

/*
    What is the importance of React Folder Structure and File Naming

        - A react project structure or architecture plays an important role in project maintenance. A good folder structure will help developers in the team easy to locate and easy to relate (ELER). Some structures are better than the others for scalability,maintainability, ease of working on files and easy to understand structure.

    How do you export file

        - We can export it as a default or named export  In one file, we can make one default export and many named exports. 

    How do you import file

        - We can import files that exported as a default or named export. If a component is exported as default we do not need curly bracket during importing.

    Make a component of module and export it as named or default export

        - Please refer components directory in src directory. I created a Avatar component in avater.js and export it as named export. I also created avatarStyles module in avatarStyles.js and export it as default export.

    Make a component or module and import it

        - Then, I imported Avater component and avatarStyles module in header.js.

    Change all the components you have to different folder structure

        - Please refer my src directory structure showed below.

        - src/
        --- assets/
        ----- Asabeneh-Yetayeh-3.jpg
        --- components/
        ----- header/
        ------- avatar.js
        ------- header.js
        ----- main/
        ------- main.js
        ------- welcome.js
        ------- techList.js
        ------- login.js
        ------- message.js
        ----- footer/
        ------- footer.js
        ----- country.js
        ----- hexColor.js
        --- shared/
        ----- button.js
        --- styles/
        ----- avatarStyles.js
        ----- buttonStyles.js
        --- App.js
        --- index.js

*/