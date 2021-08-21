import React, { Component } from 'react';

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
        this.showTime = this.showTime.bind(this);
        this.handleTime = this.handleTime.bind(this);
        this.setBackgroundStyle = this.setBackgroundStyle.bind(this);
    }
    handleLogin() {
        this.setState({
        loggedIn: !this.state.loggedIn,
        });
    }
    showTime(time) {
        const hour = ("0"+(time.getHours())).slice(-2);
        const min = ("0"+(time.getMinutes())).slice(-2);
        const sec = ("0"+(time.getSeconds())).slice(-2);
        return `${hour} : ${min} : ${sec}`;
    }
    handleTime() {
        if(!this.state.time) {
            let time = this.showTime(new Date());
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
        date: 'aug 18, 2021',
        };
        const techs = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'MongoDB', 'Heroku', 'Node'];

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