import React from "react";
import PropTypes from 'prop-types';

export const Message = ({ message }) => (
    <div>
      <h1>{message}</h1>
    </div>
);

Message.propTypes = {
    message: PropTypes.string
};