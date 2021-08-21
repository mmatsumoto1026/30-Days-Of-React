import React from "react";
import PropTypes from 'prop-types';

export const Message = ({ message }) => (
    <div>
      <h2>{message}</h2>
    </div>
);

Message.propTypes = {
    message: PropTypes.string
};