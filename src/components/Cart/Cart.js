import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const country = props.country;
    console.log(country);
    let result = country.reduce((acc, country) => acc + country.population, 0)
    return (
        <div className="cart-container">
            <h2>Cart</h2>
            <h3>Country Added:{country.length}</h3>
            <h4>TOtal Population:{result}</h4>
        </div>
    );
};

export default Cart;