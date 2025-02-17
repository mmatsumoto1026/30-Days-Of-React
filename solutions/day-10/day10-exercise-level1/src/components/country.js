import React from "react";
import PropTypes from 'prop-types';

const Country = ({
    country: { name, capital, flag, languages, population, currency },
  }) => {
    const formatedCapital =
      capital.length > 0 ? (
        <>
          <span>Capital: </span>
          {capital}
        </>
      ) : (
        ''
      );
    const formatLanguage = languages.length > 1 ? `Languages` : `Language`;
    return (
      <div className='country'>
        <div className='country_flag'>
          <img src={flag} alt={name} />
        </div>
        <h3 className='country_name'>{name.toUpperCase()}</h3>
        <div className='country_text'>
          <p>{formatedCapital}</p>
          <p>
            <span>{formatLanguage}: </span>
            {languages.join(', ')}
          </p>
          <p>
            <span>Population: </span>
            {population.toLocaleString()}
          </p>
          <p>
            <span>Currency: </span>
            {currency}
          </p>
        </div>
      </div>
    );
};

Country.propTypes = {
    country: PropTypes.object
};

export default Country;