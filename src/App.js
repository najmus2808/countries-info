import React, { useEffect, useState } from 'react';
import './App.css'
import Cart from './components/Cart/Cart';
import Country from './components/Country/Country';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(res => res.json())
      .then(data => setCountries(data));
  }, [])

  const handleCart =(addCountry)=>{
    let newCountry = [...country, addCountry];
    setCountry(newCountry);
  }
  return (
    <div className="container">
     <div>
     {
       countries.map(country => <Country country={country} key={country.alpha2Code} handleCart={handleCart}></Country>)
     }
     </div>
     <div className="cart"> 
     <Cart country={country}></Cart>
     </div>
    </div>
  );
};

export default App;