import React from "react";
import PropTypes from 'prop-types';

import { Avatar } from './avatar';

class Header extends React.Component {
    render() {
        console.log(this.props.data);
        const {
        welcome,
        title,
        subtitle,
        author: { firstName, lastName },
        date,
        } = this.props.data;

        return (
        <>
            <div className='header-wrapper'>
            <h1>{welcome}</h1>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <Avatar/>
            <p>
                {firstName} {lastName}
            </p>
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