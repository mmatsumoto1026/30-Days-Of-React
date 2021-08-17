import React, { Fragment, Component } from 'react';

import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            techs: ['HTML', 'CSS', 'JS'],
            message: 'Click show time or Greet people to change me',
        };
        this.handleLogin = this.handleLogin.bind(this);
        this.showDate = this.showDate.bind(this);
        this.handleTime = this.handleTime.bind(this);
        this.greetPeople = this.greetPeople.bind(this);
    }
    handleLogin() {
        this.setState({
        loggedIn: !this.state.loggedIn,
        });
    }
    showDate(time) {
        const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
        ];

        const month = months[time.getMonth()].slice(0, 3);
        const year = time.getFullYear();
        const date = time.getDate();
        return `${month} ${date}, ${year}`;
    }
    handleTime() {
        let message = this.showDate(new Date());
        this.setState({ message });
    }
    greetPeople() {
        let message = 'Welcome to 30 Days Of React Challenge, 2020';
        this.setState({ message });
    }

    render() {
        const data = {
        welcome: '30 Days Of React',
        title: 'Getting Started React',
        subtitle: 'JavaScript Library',
        author: {
            firstName: 'Asabeneh',
            lastName: 'Yetayeh',
        },
        date: 'Oct 9, 2020',
        };
        const techs = ['HTML', 'CSS', 'JavaScript'];

        return (
        <Fragment>
            <Header data={data} />

            <Main
            techs={techs}
            handleTime={this.handleTime}
            greetPeople={this.greetPeople}
            loggedIn={this.state.loggedIn}
            handleLogin={this.handleLogin}
            message={this.state.message}
            />

            <Footer date={new Date()} />
        </Fragment>
        );
    }
}

export default App;