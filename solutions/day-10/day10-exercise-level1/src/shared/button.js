import React from "react";
import PropTypes from 'prop-types';

// A button component
const Button = ({ text, onClick, style }) => (
    <button style={style} onClick={onClick}>
      {text}
    </button>
);

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.object
};

export default Button;