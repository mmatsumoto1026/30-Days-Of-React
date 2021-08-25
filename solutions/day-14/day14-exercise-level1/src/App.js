import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('I am  the constructor and  I will be the first to run.');
    this.state = {
      day: 1,
      congratulate: '',
    };
    this.doChallenge = this.doChallenge.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState);
    console.log(nextState.day);
    if (nextState.day > 31) {
      return false;
    } else {
      return true;
    }
  }

  doChallenge() {
    this.setState({
      day: this.state.day + 1,
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.day == 30) {
      this.setState({
        congratulate: 'Congratulations,Challenge has been completed',
      });
    }
    console.log(prevState, prevProps);
  }

  render() {
    return (
      <div className='App'>
        <h1>React Component Life Cycle</h1>
        <h1>Calling API</h1>
        <button onClick={this.doChallenge}>Do Challenge</button>
        <p>Challenge: Day {this.state.day}</p>
        {this.state.congratulate && <h2>{this.state.congratulate}</h2>}
      </div>
    );
  }
}

export default App;

/* exercise level1

  What is component life cycles
    - Component life cycle is the process of mounting, updating and destroying(unmounting) a component in a React application.

  What is the purpose of life cycles?
    - The purpose of React componet life cycles is providing special methods to monitor and manipulate it during its three main phases. 

  What are the three stages of a component life cycle?
    - The three stages of a component life cycle are mounting, updating, and unmounting.

      https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

  What does mounting means?
    - Rendering or putting React component into the DOM is called mounting.

  What does updating means?
  - After a component has been mounted on the DOM, it can be updated when a state or props change. An update of a React component can be caused by changes to props or state.

  What does unmounting means?
    - The final phase in the lifecycle of a component is unmounting. The unmounting phase removes component from the DOM.

  What is the most common built-in mounting life cycle method?
    - I think it is render() method because the render method is a required method when we create a class-based component.

  What are the mounting life cycle methods?
    - React has four built-in methods that gets called, in this order, when mounting a component:

    > constructor()
    > getDerivedStateFromProps()
    > render()
    > componentDidMount()


  What are the updating life cycle methods?
    - React has five built-in methods that gets called, in this order, when a component is updated:

    > getDerivedStateFromProps()
    > shouldComponentUpdate()
    > render()
    > getSnapshotBeforeUpdate()
    > componentDidUpdate()


  What is the unmounting life cycle method?
    - React has only one built-in method that gets called when a component is unmounted:

    > componentWillUnmount()

    From the official tutorial:

    componentWillUnmount() is invoked immediately before a component is unmounted and destroyed. Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any DOM elements that were created in componentDidMount

      https://reactjs.org/docs/react-component.html#componentwillunmount

 */
