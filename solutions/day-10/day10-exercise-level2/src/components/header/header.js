import React from "react";
import PropTypes from 'prop-types';

import { Avatar } from './avatar';

class Header extends React.Component {
    render() {
        console.log(this.props.data);
        const {
        welcome,
        author: { firstName, lastName },
        date,
        } = this.props.data;

        return (
        <>
            <div className='header-wrapper'>
            <h1>{welcome}</h1>
            <Avatar/>
            <p>
                {firstName} {lastName}
            </p>
            <small>created at</small>
            <small>{date}</small>
            </div>
        </>
        );
    }
}

Header.propTypes = {
    data: PropTypes.object
};

export default Header;