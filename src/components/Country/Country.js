import React from 'react';
import './Country.css'

const Country = (props) => {
    const { flag, name, population, capital } = props.country;
    return (
        <div className="country">
            <div className="img-section">
                <img src={flag} alt="flag" />
            </div>
            <div className="description">
                <h3>Name: {name}</h3>
                <h4>Capital: {capital}</h4>
                <h5>Population: {population}</h5>
                <button onClick={() => props.handleCart(props.country)} className="btn-main">Add Country</button>
            </div>
        </div>
    );
};

export default Country;