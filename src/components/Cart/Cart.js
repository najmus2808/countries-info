import React from 'react';

const Cart = (props) => {
    const country = props.country;
    console.log(country);
    let result = country.reduce((acc, country) => acc + country.population, 0)
    return (
        <div>
            <h3>Country Added:{country.length}</h3>
            <h4>TOtal Population:{result}</h4>
        </div>
    );
};

export default Cart;