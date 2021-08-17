import React from "react";
import PropTypes from 'prop-types';

// TechList Component
// class base component
class TechList extends React.Component {
    render() {
      const { techs } = this.props;
      const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>);
      return techsFormatted;
    }
}

TechList.propTypes = {
    techs: PropTypes.array
};

export default TechList;