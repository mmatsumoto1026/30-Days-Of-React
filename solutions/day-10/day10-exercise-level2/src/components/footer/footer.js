import React from "react";
import PropTypes from 'prop-types';

// Footer Component
// Class component
class Footer extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <footer>
          <div className='footer-wrapper'>
            <p>Copyright {this.props.date.getFullYear()}</p>
          </div>
        </footer>
      );
    }
}

Footer.propTypes = {
    date: PropTypes.object
};

export default Footer  ;