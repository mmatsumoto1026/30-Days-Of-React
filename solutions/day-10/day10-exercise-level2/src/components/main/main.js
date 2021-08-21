import React from "react";
import PropTypes from 'prop-types';

import Welcome from './welcome';
import Login from './login';
import TechList from './techList';
import Button from '../../shared/button';
import { Message } from './message';

import darkStyle from "../../styles/darkStyle";
import lightStyle from "../../styles/lightStyle";

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
        console.log(message);

        const status = loggedIn ? <Welcome /> : <Login />;
        return (
        <main>
            <div className='main-wrapper'>
                <p>What I am playing with are:</p>
                <ul>
                    <TechList techs={techs} loggedIn={loggedIn} />
                </ul>
                <div>
                    <div className="message" style={loggedIn ? darkStyle.backgroundClock : lightStyle.backgroundClock}>
                        <Message message={message} />
                    </div>
                    {!loggedIn && <p className='guideMessage'>Please login to move into dark mode</p>}
                </div>
                <div style={{ margin: 30 }}>
                    <Button
                    text={loggedIn ? 'Logout' : 'Login'}
                    style={loggedIn? darkStyle.buttonStyles : lightStyle.buttonStyles}
                    onClick={handleLogin}
                    />
                    <br />
                    <Button
                    text={!message ? 'Show Time' : 'Hide Time'}
                    onClick={handleTime}
                    style={loggedIn? darkStyle.buttonStyles : lightStyle.buttonStyles}
                    />
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