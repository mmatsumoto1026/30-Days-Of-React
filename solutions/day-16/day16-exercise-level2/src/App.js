import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import smile from './assets/emoticon-2120024_640.png';

const StyledInput = styled.input`
  margin: 0 5px 20px 40px;
  padding: 5px 10px;
`;

const Input = ({ src, value, defaultValue, id, placeholder, width, alt, type }) => {
  return (
    <>
      <StyledInput src={src} value={value} defaultValue={defaultValue} id={id} placeholder={placeholder} width={width} alt={alt} type={type} />
    </>
  );
};

Input.propTypes = {
  src: PropTypes.string,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  width: PropTypes.string,
  alt: PropTypes.string,
  type: PropTypes.string,
};

// HOC: higher order component takes a Input component and return type enhanced input component.
const handleTypeInput = (CompParam, typeName) => {
  return class ReturnInput extends Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <CompParam {...this.props} type={typeName} />;
    }
  };
};

// Enhanced components
const InputButton = handleTypeInput(Input, 'button');
const InputCheckbox = handleTypeInput(Input, 'checkbox');
const InputRadio = handleTypeInput(Input, 'radio');
const InputColor = handleTypeInput(Input, 'color');
const InputDate = handleTypeInput(Input, 'date');
const InputDatetimeLocal = handleTypeInput(Input, 'datetime-local');
const InputEmail = handleTypeInput(Input, 'email');
const InputFile = handleTypeInput(Input, 'file');
const InputHidden = handleTypeInput(Input, 'hidden');
const InputImage = handleTypeInput(Input, 'image');
const InputMonth = handleTypeInput(Input, 'month');
const InputNumber = handleTypeInput(Input, 'number');
const InputPassword = handleTypeInput(Input, 'password');
const InputRange = handleTypeInput(Input, 'range');
const InputReset = handleTypeInput(Input, 'reset');
const InputSearch = handleTypeInput(Input, 'search');
const InputSubmit = handleTypeInput(Input, 'submit');
const InputTel = handleTypeInput(Input, 'tel');
const InputText = handleTypeInput(Input, 'text');
const InputTime = handleTypeInput(Input, 'time');
const InputUrl = handleTypeInput(Input, 'url');


class App extends Component {
  render() {
    return (
      <div className='App'>
        <Input placeholder="no type applyed input" />
        <div/>
        <InputButton value='type: button' />
        <div/>
        <InputCheckbox value='type: checkbox' id='checkboxInput' />
        <label htmlFor="checkboxInput">type: checkbox</label>
        <div/>
        <InputRadio value='type: radio' id='radioInput' />
        <label htmlFor="radioInput">type: radio</label>
        <div/>
        <InputColor value='type: color' id='colorInput' />
        <label htmlFor="colorInput">type: color</label>
        <div/>
        <InputDate id='dateInput' />
        <label htmlFor="dateInput">type: date</label>
        <div/>
        <InputDatetimeLocal defaultValue='2021-08-30T08:30' id='datetimeLocalInput' />
        <label htmlFor="datetimeLocalInput">type: datetime-local</label>
        <div/>
        <InputEmail id='emailInput' placeholder='email@email.com' />
        <label htmlFor="emailInput">type: email</label>
        <div/>
        <InputFile id='fileInput' />
        <label htmlFor="fileInput">type: file</label>
        <div/>
        <InputHidden id='hiddenInput' />
        <label htmlFor="hiddenInput" style={{ marginLeft: 50 }}>type: hidden</label>
        <div/>
        <InputImage src={smile} id='imageInput' width="40px" alt="smile" />
        <label htmlFor="imageInput" style={{ position: "relative", top: -40}}>type: image</label>
        <div/>
        <InputMonth defaultValue='2021-08' id='monthInput' />
        <label htmlFor="monthInput">type: month</label>
        <div/>
        <InputNumber defaultValue='123456789' id='numberInput' />
        <label htmlFor="numberInput">type: number</label>
        <div/>
        <InputPassword id='passwordInput' />
        <label htmlFor="passwordInput">type: password</label>
        <div/>
        <InputRange id='rangeInput' />
        <label htmlFor="rangeInput" style={{ position: "relative", top: -32}}>type: range</label>
        <div/>
        <InputReset  value='type: reset' id='resetInput' />
        <div/>
        <InputSearch id='searchInput' />
        <label htmlFor="searchInput" >type: search</label>
        <div/>
        <InputSubmit value='submit' id='submitInput' />
        <label htmlFor="submitInput" >type: submit</label>
        <div/>
        <InputTel defaultValue='(555) 555-5555' id='telInput' />
        <label htmlFor="telInput" >type: tel</label>
        <div/>
        <InputText defaultValue='text input' id='textInput' />
        <label htmlFor="textInput" >type: text</label>
        <div/>
        <InputTime id='timeInput' />
        <label htmlFor="timeInput" >type: time</label>
        <div/>
        <InputUrl defaultValue='https://urlinput.com' id='urlInput' />
        <label htmlFor="urlInput" >type: url</label>
        <div/>
      </div>
    );
  }
}

export default App;