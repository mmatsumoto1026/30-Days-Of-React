// index.js
import React, { Component } from 'react';

const options = [
  {
    value: '',
    label: '-- Select Country--',
  },
  {
    value: 'Finland',
    label: 'Finland',
  },
  {
    value: 'Sweden',
    label: 'Sweden',
  },
  {
    value: 'Norway',
    label: 'Norway',
  },
  {
    value: 'Denmark',
    label: 'Denmark',
  },
];

// mapping the options to list(array) of JSX options

const selectOptions = options.map(({ value, label }) => (
  <option key={label} value={value}> {label}</option>
));

class App extends Component {
  constructor(props) {
    super(props);
    // declaring state
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      country: '',
      tel: '',
      dateOfBirth: '',
      favoriteColor: '',
      weight: '',
      gender: '',
      file: '',
      bio: '',
      skills: {
        html: false,
        css: false,
        javascript: false,
      },
      touched: {
        firstName: false,
        lastName: false,
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.validate = this.validate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    /*
     we can get the name and value like: e.target.name, e.target.value
    Wwe can also destructure name and value from e.target
    const name = e.target.name
    const value = e.target.value
    */
    const { name, value, type, checked } = e.target;
    /*
    [variablename] we can make a value stored in a certain variable could be a key for an object, in this case a key for the state
    */

    if (type === 'checkbox') {
      this.setState({
        skills: { ...this.state.skills, [name]: checked },
      });
    } else if (type === 'file') {
      console.log(type, 'check here');
      this.setState({ [name]: e.target.files[0] });
    } else {
      this.setState({ [name]: value });
    }
  }
  handleBlur(e) {
    const { name } = e.target;
    this.setState({ touched: { ...this.state.touched, [name]: true } });
  }
  validate() {
    // Object to collect error feedback and to display on the form
    const errors = {
      firstName: '',
    };

    if (
      (this.state.touched.firstName && this.state.firstName.length < 2) ||
      (this.state.touched.firstName && this.state.firstName.length > 12)
    ) {
      errors.firstName = 'First name must be between 2 and 12';
    }
    return errors;
  }
  handleSubmit(e) {
    /*
     e.preventDefault()
     stops the default behavior of form element
     specifically refreshing of page
    */
    e.preventDefault();
    const {
      firstName,
      lastName,
      email,
      tel,
      dateOfBirth,
      favoriteColor,
      weight,
      country,
      gender,
      bio,
      file,
      skills,
    } = this.state;

    const formattedSkills = [];
    for (const key in skills) {
      console.log(key);
      if (skills[key]) {
        formattedSkills.push(key.toUpperCase());
      }
    }
    const data = {
      firstName,
      lastName,
      email,
      tel,
      dateOfBirth,
      favoriteColor,
      weight,
      country,
      gender,
      bio,
      file,
      skills: formattedSkills,
    };
    /*
     the is the place where we connect backend api 
     to send the data to the database
     */
    console.log(data);
  }

  render() {
    // accessing the state value by destrutcturing the state
    // the noValidate attribute on the form is to stop the HTML5 built-in validation

    const { firstName } = this.validate();
    return (
      <div className='App'>
        <h3>Add Student</h3>
        <form onSubmit={this.handleSubmit} noValidate>
          <div className='row'>
            <div className='form-group'>
              <label htmlFor='firstName'>First Name </label>
              <input
                type='text'
                name='firstName'
                value={this.state.firstName}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                placeholder='First Name'
              /> <br />
              <small>{firstName}</small>
            </div>
            <div className='form-group'>
              <label htmlFor='lastName'>Last Name </label>
              <input
                type='text'
                name='lastName'
                value={this.state.lastName}
                onChange={this.handleChange}
                placeholder='Last Name'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email </label>
              <input
                type='email'
                name='email'
                value={this.state.email}
                onChange={this.handleChange}
                placeholder='Email'
              />
            </div>
          </div>

          <div className='form-group'>
            <label htmlFor='tel'>Telephone </label>
            <input
              type='tel'
              name='tel'
              value={this.state.tel}
              onChange={this.handleChange}
              placeholder='Tel'
            />
          </div>

          <div className='form-group'>
            <label htmlFor='dateOfBirth'>Date of birth </label>
            <input
              type='date'
              name='dateOfBirth'
              value={this.state.dateOfBirth}
              onChange={this.handleChange}
              placeholder='Date of Birth'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='favoriteColor'>Favorite Color</label>
            <input
              type='color'
              id='favoriteColor'
              name='favoriteColor'
              value={this.state.favoriteColor}
              onChange={this.handleChange}
              placeholder='Favorite Color'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='weight'>Weight </label>
            <input
              type='number'
              id='weight'
              name='weight'
              value={this.state.weight}
              onChange={this.handleChange}
              placeholder='Weight in Kg'
            />
          </div>
          <div>
            <label htmlFor='country'>Country</label> <br />
            <select name='country' onChange={this.handleChange} id='country'>
              {selectOptions}
            </select>
          </div>

          <div>
            <p>Gender</p>
            <div>
              <input
                type='radio'
                id='female'
                name='gender'
                value='Female'
                onChange={this.handleChange}
                checked={this.state.gender === 'Female'}
              />
              <label htmlFor='female'>Female</label>
            </div>
            <div>
              <input
                id='male'
                type='radio'
                name='gender'
                value='Male'
                onChange={this.handleChange}
                checked={this.state.gender === 'Male'}
              />
              <label htmlFor='male'>Male</label>
            </div>
            <div>
              <input
                id='other'
                type='radio'
                name='gender'
                value='Other'
                onChange={this.handleChange}
                checked={this.state.gender === 'Other'}
              />
              <label htmlFor='other'>Other</label>
            </div>
          </div>

          <div>
            <p>Select your skills</p>
            <div>
              <input
                type='checkbox'
                id='html'
                name='html'
                onChange={this.handleChange}
              />
              <label htmlFor='html'>HTML</label>
            </div>
            <div>
              <input
                type='checkbox'
                id='css'
                name='css'
                onChange={this.handleChange}
              />
              <label htmlFor='css'>CSS</label>
            </div>
            <div>
              <input
                type='checkbox'
                id='javascript'
                name='javascript'
                onChange={this.handleChange}
              />
              <label htmlFor='javascript'>JavaScript</label>
            </div>
          </div>
          <div>
            <label htmlFor='bio'>Bio</label> <br />
            <textarea
              id='bio'
              name='bio'
              value={this.state.bio}
              onChange={this.handleChange}
              cols='120'
              rows='10'
              placeholder='Write about yourself ...'
            />
          </div>

          <div>
            <input type='file' name='file' onChange={this.handleChange} />
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;

/*

What is the importance of form?
  - Form has inportant role to collect data from a user. Once in a while we use form to fill our information on a paper or on a website. Either to sign up, sign in or to apply for a job we fill different form fields to submit our data to remote database.

How many input types do you know?
  - I know 22 input types. There are input types of text, number, range, email, password, tel, checkbox, radio, color, url, image, file, hidden, date, datetime-local, month, week, time, reset, search, submit, button.

Mention at least four attributes of an input element
  - Please refer the above code. There are attributes of id, name, type, className, onChange, onBlur, checked, placeholder, and value.

What is the importance of htmlFor?
  - we can link a label and an input field using an id of input field and htmlFor of the label. If label and input are linked it will focus the input when we click on label.

Write an input type which is not given in the example if there is?
  - there is a input type button which is not given in the example.

    https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input

What is a controlled input?
  - A controlled input has a value which is assigned the state that will be updated by event listener.

What do you need to write a controlled input?
  - We need an input field, event listener (onChange) and state to get data from a controlled input.

What event type do you use to listen changes on an input field?
  - We can use onChange event type to listen changes on an input field.

What is the value of a checked checkbox?
  - The value of a checked checkbox is the string to use as the value of the checkbox when submitting the form, if the checkbox is currently toggled on.

    https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox

When do you use onChange, onBlur, onSubmit?
  - Please refer the above code for instance. We use onChange attribute in input tag to listen to event and then invoke a method handleChange which destructure event.target for updating states. The onBlur event has been used to update touched state and then check validity of firstname when the input loses focus. And onSubmit event is used when submit button is pressed and then invoke handleSubmit which destructure the state and arrange formatted skills array and then log all user data(maybe we can send the data to our database).

What is the purpose of writing e.preventDefault() inside the submit handler method?
  - As a default, form submits data to designated URL when button is pressed. In above example, this is not designated so data will be submitted to current page then page will be reloaded. e.preventDefault() cancels this behavior.

How do you bind data in React? The first input field example is data binding in React.
  - Data binding in React can be achieved by using a controlled input . A controlled input is achieved by binding the value to a state variable and a onChange event to change the state as the input value changes.

What is validation?
  - The action or process of checking or proving the validity or accuracy of something in this case data.

What is the event type you use to listen when an input changes?
  - We can use onChange event type to listen to an input changes.

What are event types do you use to validate an input?
  - We can use onBlur to validate an input when the one loses focus.

*/