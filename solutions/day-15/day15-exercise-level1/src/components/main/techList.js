import React from "react";
import PropTypes from 'prop-types';
import darkStyle from "../../styles/darkStyle";
import lightStyle from "../../styles/lightStyle";

// TechList Component
// class base component
class TechList extends React.Component {
    render() {
      const { techs, loggedIn } = this.props;
      const techsFormatted = techs.map((tech) => <li  key={tech} style={ loggedIn? darkStyle.li : lightStyle.li }>{tech}</li>);
      return techsFormatted;
    }
}

TechList.propTypes = {
    techs: PropTypes.array,
    loggedIn: PropTypes.bool
};

export default TechList;