import React from "react";
import PropTypes from 'prop-types';

import Welcome from './welcome';
import Login from './login';
import TechList from './techList';
//import Button from '../../shared/button';
import { Button } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Message } from './message';
import classNames from 'classnames';

import darkStyle from "../../styles/darkStyle";
import lightStyle from "../../styles/lightStyle";

import {
    FaGithubSquare
} from 'react-icons/fa';

// Main Component
// Class Component
class Main extends React.Component {
    render() {
        const {
        techs,
        handleTime,
        loggedIn,
        handleLogin,
        message,
        } = this.props;

        const status = loggedIn ? <Welcome /> : <Login />;
        const clockClassName = classNames("message", { "mt-3": message });
        return (
        <main>
            <div className='main-wrapper'>
                <p className='my-3'>What I am playing with are:</p>
                <ul>
                    <TechList techs={techs} loggedIn={loggedIn} />
                </ul>
                <FaGithubSquare size={30}/>
                <a 
                    href="https://github.com/mmatsumoto1026" 
                    rel='noreferrer noopener' 
                    target="_blank"
                    style={loggedIn? darkStyle.anchorStyles : lightStyle.anchorStyles}
                >
                    Come on my Github profile!
                </a>
                <div>
                    <div className={clockClassName} style={loggedIn ? darkStyle.backgroundClock : lightStyle.backgroundClock}>
                        <Message message={message} />
                    </div>
                    {!loggedIn && <p className='guideMessage mt-3'>Please login to move into dark mode</p>}
                </div>
                <div style={{ margin: 30 }}>
                    <Button
                    className='mb-2'
                    color={loggedIn ? 'secondary' : 'primary'}
                    onClick={handleLogin}
                    >
                        {loggedIn ? 'Logout' : 'Login'}
                    </Button>
                    <br />
                    <Button
                    className='mb-2'
                    color={loggedIn ? 'secondary' : 'primary'}
                    onClick={handleTime}
                    >
                        {!message ? 'Show Time' : 'Hide Time'}
                    </Button>
                    {status}
                </div>
            </div>
        </main>
        );
    }
}

Main.propTypes = {
    techs: PropTypes.array,
    handleTime: PropTypes.func,
    loggedIn: PropTypes.bool,
    handleLogin: PropTypes.func,
    message: PropTypes.string
};

export default Main;