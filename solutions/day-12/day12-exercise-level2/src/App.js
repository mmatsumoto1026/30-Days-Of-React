// index.js
import React, { Component } from 'react';

const validate = window.validator;

const options = [
  {
    value: '',
    label: '-- Select Country--',
  },
  {
    value: 'Japan',
    label: 'Japan',
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
      favoriteColor: '#515151',
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
        email: false,
        tel: false,
        date: false,
        weight: false,
        country:false,
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
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
    const element = document.getElementById(e.target.id);
    element.placeholder = '';
    this.setState({ touched: { ...this.state.touched, [element.id]: true }});
  }
  handleSubmit(e) {
    /*
    e.preventDefault()
    stops the default behavior of form element
    specifically refreshing of page
    */
    e.preventDefault();

    let errorFlag = false;

    for(let i = 0; i < 8; i++) {
      const element = document.getElementById(e.target[i].id);
      const elementValue = element.value;

      if(this.state.touched[element.id]){
        if(element.id !== 'date' && element.id !== 'weight' && element.id !== 'country' && elementValue === '') {
          setErrorFor(element, `${element.id} cannot be blank`);
        } else if ((element.id === 'firstName' || element.id ==='lastName') && (elementValue.length < 2 || elementValue.length > 12)) {
          setErrorFor(element, `${element.id} must be between 2 and 12`);
        } else if (element.id === 'email' && !validate.isEmail(element.value)){
          setErrorFor(element, `invalid email address`);
        } else if (element.id === 'tel' && !isTelNum(element.value)){
          setErrorFor(element, `invalid telephone number`);
        } else if (element.id === 'date' && elementValue === ''){
          setErrorFor(element, `date of birth is not selected`);
        } else if (element.id === 'date' && !validate.isDate(element.value)){
          setErrorFor(element, `invalid date of birth`);
        } else if (element.id === 'weight' && elementValue === ''){
          setErrorFor(element, `invalid weight value`);
        } else if (element.id === 'country' && elementValue === ''){
          setErrorFor(element, `country is not selected`);
        } else {
          setSuccessFor(element);
        }
      }
    }

    const element = document.getElementById("gender");
    if(this.state.gender === '') {
      setErrorFor(element, `gender is not selected`);
    } else {
      setSuccessFor(element);
    }

    if(!errorFlag) {
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

    function setErrorFor(input, message) {
      errorFlag = true;
      const formControl = input.parentElement; // <div classname='form-group'>
      const small = formControl.querySelector('small');

      // add error message inside small
      small.innerText = message;

      // add error class
      formControl.className = 'form-group error';
    }
    function setSuccessFor(input) {
      const formControl = input.parentElement; // <div classname='form-group'>
      formControl.className = 'form-group';
    }
    /*function isEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }*/
    function isTelNum(tel) {
      const re = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;
      return re.test(tel);
    }
    /*function isDateOfBirth(date) {
      const re = /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;
      return re.test(date);
    }*/
  }

  render() {
    // accessing the state value by destrutcturing the state
    // the noValidate attribute on the form is to stop the HTML5 built-in validation

    return (
      <div className='App'>
        <h3>Add Student</h3>
        <form onSubmit={this.handleSubmit} noValidate>
          <div className='row'>
            <div className='form-group'>
              <label htmlFor='firstName'>First Name </label>
              <input
                type='text'
                id='firstName'
                name='firstName'
                value={this.state.firstName}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                placeholder='First Name'
              />
              <small>Error message</small>
            </div>
            <div className='form-group'>
              <label htmlFor='lastName'>Last Name </label>
              <input
                type='text'
                id='lastName'
                name='lastName'
                value={this.state.lastName}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                placeholder='Last Name'
              />
              <small>Error message</small>
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email </label>
              <input
                type='email'
                id='email'
                name='email'
                value={this.state.email}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                placeholder='Email'
              />
              <small>Error message</small>
            </div>
          </div>

          <div className='form-group'>
            <label htmlFor='tel'>Telephone </label>
            <input
              type='tel'
              id='tel'
              name='tel'
              value={this.state.tel}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              placeholder='Tel'
            />
            <small>Error message</small>
          </div>

          <div className='form-group'>
            <label htmlFor='dateOfBirth'>Date of birth </label>
            <input
              type='date'
              id='date'
              name='dateOfBirth'
              value={this.state.dateOfBirth}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              placeholder='Date of Birth'
            />
            <small>Error message</small>
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
              onBlur={this.handleBlur}
              placeholder='Weight in Kg'
            />
            <small>Error message</small>
          </div>
          <div>
            <label htmlFor='country'>Country</label> <br />
            <select name='country' onChange={this.handleChange} onBlur={this.handleBlur} id='country'>
              {selectOptions}
            </select>
            <small>Error message</small>
          </div>

          <div>
            <p id="gender">Gender <small>Error message</small></p>
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
              onBlur={this.handleBlur}
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