import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.firstName = React.createRef();
    this.lastName = React.createRef();
    this.country = React.createRef();
    this.title = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    // stops the default behavior of form element specifically refreshing of page
    e.preventDefault();

    console.log(this.firstName.current.value);
    console.log(this.lastName.current.value);
    console.log(this.title.current.value);
    console.log(this.country.current.value);

    const data = {
      firstName: this.firstName.current.value,
      lastName: this.lastName.current.value,
      title: this.title.current.value,
      country: this.country.current.value,
    };
    // the is the place we connect backend api to send the data to the database
    console.log(data);
  }

  render() {
    return (
      <div className='App'>
        <h3>Add Student</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type='text'
              name='firstName'
              placeholder='First Name'
              ref={this.firstName}
              //onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type='text'
              name='lastName'
              placeholder='Last Name'
              ref={this.lastName}
              //onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type='text'
              name='country'
              placeholder='Country'
              ref={this.country}
              //onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type='text'
              name='title'
              placeholder='Title'
              ref={this.title}
              //onChange={this.handleChange}
            />
          </div>

          <button className='btn btn-success'>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;

/*
  What is a controlled input?
    - A controlled input has a value which is assigned the state that will be updated by event listener. In react most of the time we use controlled inputs as recommended on the official documentation of React.

  What is an uncontrolled input
    - In uncontrolled input, we can use a ref to get form values from the DOM so we get data from input fields like traditional HTML form data handling.

  How do you get a content of a certain HTML element in React ?
    - If we want to target some element on the DOM we will use ref to get the content of that element.

  Why it is not a good idea to touch the DOM directly in React ?
    - Because React has its own way of handling the DOM manipulation.

  What is most frequently used in React ? Controlled or Uncontrolled input.
    - Most of the time we use controlled input instead of uncontrolled input.

  What do you need to write uncontrolled input?
    - To write an uncontrolled component, instead of writing an event handler for every state update, we need a ref to get form values from the DOM.

  Does state require to write uncontrolled input?
    - We need ref instead of state to write uncontrolled input. ref was created by React.createRef() in the above example code;

      https://reactjs.org/docs/refs-and-the-dom.html

  When do you use uncontrolled input?
    - In the reactjs.org document, we can see There are a few good use cases for refs:

      > Managing focus, text selection, or media playback.
      > Triggering imperative animations.
      > Integrating with third-party DOM libraries.

  When do you use controlled input?
    - Controlled input can respond to input changes immediately; for example, by:

    > in-place feedback, like validations
    > disabling the button unless all fields have valid data
    > enforcing a specific input format, like credit card numbers

    And in the reactjs.org document, In most cases they recommend using controlled components to implement forms.

      https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/


  Do you use a controlled or uncontrolled input to validate form input fields?
    - I would use controlled input because by event handler and this.setState method, we will handle user's data more consciously.  
 */