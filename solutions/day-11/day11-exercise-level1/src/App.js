// index.js
import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          firstName: '',
          message: '',
          key: '',
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleCopy = this.handleCopy.bind(this);
    }

  handleClick() {
    // e gives an event object
    // check the value of e using console.log(e)
    this.setState({
      message: 'Welcome to the world of events',
    });
  }
  // triggered whenever the mouse moves
  handleMouseMove(e) {
    this.setState({ message: `${e.screenX}, ${e.screenY}` });
  }
  // to get value when an input field changes a value
  handleChange(e) {
    this.setState({
      firstName: e.target.value,
      message: e.target.value,
    });
  }

  // to get keyboard key code when an input field is pressed
  // it works with input and textarea
  handleKeyPress(e) {
    this.setState({
      message:
        `${e.key} has been pressed and the keycode is` + e.charCode,
    });
  }
  // Blurring happens when a mouse leave an input field
  handleBlur() {
    this.setState({ message: 'Input field has been blurred' });
  }
  // This event triggers during a text copy
  handleCopy() {
    this.setState({
      message: 'Using 30 Days Of React for commercial purpose is not allowed',
    });
  }
  componentDidMount(){
    document.body.addEventListener('mousemove', this.handleMouseMove);
  }
  componentWillUnmount(){
    document.body.removeEventListener('mousemove', this.handleMouseMove);
  }
  

  render() {
    return (
      <div>
        <h1>Welcome to the World of Events</h1>

        <button onClick={this.handleClick}>Click Me</button>
        <button onMouseMove={this.handleMouseMove}>Move mouse on me</button>
        <p onCopy={this.handleCopy}>
          Check copy right permission by copying this text
        </p>

        <p>{this.state.message}</p>
        <label htmlFor=''> Test for onKeyPress Event: </label>
        <input type='text' onKeyPress={this.handleKeyPress} />
        <br />

        <label htmlFor=''> Test for onBlur Event: </label>
        <input type='text' onBlur={this.handleBlur} />

        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor='firstName'>First Name: </label>
            <input
              onInput={this.handleChange}
              name='firstName'
              value={this.state.value}
            />
          </div>

          <div>
            <input type='submit' value='Submit' />
          </div>
        </form>
      </div>
    );
  }
}

export default App;

/*
    What is an event?
        - An event is an action or occurrence recognized by a software such as  clicking on a button, hover on an image, pressing a keyboard, scrolling the mouse wheel and etc.

    What is the different between an HTML element event and React event?
        - Handling events in React is very similar to handling elements on DOM elements using pure JavaScript. Some of the syntax difference between handling event in React and pure JavaScript:

            >React events are named using camelCase, rather than lowercase.
            >With JSX you pass a function as the event handler, rather than a string.

    Write at least 4 keyboard events?
        -I could only find 3 keyboard event on React document, onKeyPress, onKeyDown, onKeyUp. 
            
            https://reactjs.org/docs/events.html#keyboard-events
        
    Write at least 8 mouse events?
        - Mouse events are onClick, onDoubleClick, onDrag, onDrop, onMouseDown, onMouseEnter, onMouseLeave, onMouseMove, onMouseOut, onMouseOver, onMouseUp and so on.

            https://reactjs.org/docs/events.html#mouse-events

    What are the most common mouse and keyboard events?
        - The most common mouse and keybord event types are onMouseMove, onMouseEnter, onMouseLeave, onMouseOut, onClick, onDrag, onKeyDown, onKeyPress, onKeyUp, onCopy, onCut, onChange, onBlur, onSubmit.

    Write an event specific to input element?
        - It is onChange event.

    Write an event specific to form element?
        - It is onSubmit.

    Display the coordinate of the view port when a mouse is moving on the body?
        - please refer the above code. I used two lifecycle method 'componentDidMount' and 'componentWillUnmount' for adding eventlistener to body element and removing it from the element. The eventlistener detects mousemove in body and invoke handleMouseMove method to set message state the coordinate of the view port. Then App component re-rendered so the coordinate will be displayed. When a component is unmounted and destroyed, the eventlistener will be removed.

    What is the difference between onInput, onChange and onBlur?
        - Between onInput and onChange, there is no behavior difference. in above code, I tried each event and confirmed that I entered a text in input field then handleChange method was invoked, so firstname and message state was set to texts of input field.
        Besides, onBlur event will occur when a focus of element that include the event has left.

            https://github.com/facebook/react/issues/9567

    Where do we put the onSubmit event ?
        - I once put the onSubmit event on Form element that wrapped input text field and submit button which has type attribute set "submit".

 */