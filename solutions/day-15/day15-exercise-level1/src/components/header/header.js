import React from "react";

import axios from 'axios';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Avatar } from './avatar';


const WelcomeMsg = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin: 40px 0;
`;

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: "",
        };
    }
    componentDidMount() {
        const API_URL = 'https://restcountries.eu/rest/v2/all';
        axios
          .get(API_URL)
          .then((response) => {
            const japanData = response.data.filter(function(countryData){
                if (countryData.name == "Japan") return true;
              });
            this.setState({
              flag: japanData[0].flag,
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    render() {
        const {
        welcome,
        author: { firstName, lastName },
        date,
        } = this.props.data;

        return (
        <>
            <div className='header-wrapper'>
            <WelcomeMsg>{welcome}</WelcomeMsg>
            <Avatar/><img src={this.state.flag} style={{ width: 160 , marginLeft: 20}}/>
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