import React, { Component } from 'react';
import moment from 'moment';

import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';
import darkStyle from './styles/darkStyle';
import lightStyle from './styles/lightStyle';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            time: '',
        };
        this.handleLogin = this.handleLogin.bind(this);
        this.handleTime = this.handleTime.bind(this);
        this.setBackgroundStyle = this.setBackgroundStyle.bind(this);
    }
    handleLogin() {
        this.setState({
        loggedIn: !this.state.loggedIn,
        });
    }
    handleTime() {
        if(!this.state.time) {
            let time = moment(new Date()).format('HH : mm : ss');
            this.setState({ time });
        } else {
            this.setState({ time: ''});
        }
    }
    setBackgroundStyle() {
        let element = document.body;
        element.style.background = this.state.loggedIn ? darkStyle.body.background : lightStyle.body.background;
        element.style.color = this.state.loggedIn ? darkStyle.body.color : lightStyle.body.color;
    }

    render() {
        const data = {
        welcome: 'Welcome To My Simple Portfolio',
        author: {
            firstName: 'Manabu',
            lastName: 'Matsumoto',
        },
        date: 'aug 26, 2021',
        };
        const techs = ['HTML', 'Sass', 'JavaScript', 'React', 'Redux', 'MongoDB', 'express', 'Heroku', 'Node'];

        this.setBackgroundStyle();

        return (
        <div className="app">
            <Header data={data} />

            <Main
                techs={techs}
                handleTime={this.handleTime}
                loggedIn={this.state.loggedIn}
                handleLogin={this.handleLogin}
                message={this.state.time}
            />

            <Footer date={new Date()} />
        </div>
        );
    }
}

export default App;