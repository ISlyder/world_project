import React from 'react';

const Card = (props) => {
    const {country} = props;
    const numberFormat = (x) => {
        return x.toString().replace(/(.)(?=(\d{3})+$)/g,'$1,')
    }
    return (
        <li className="card">
            <img src={country.flag} alt='flag'/>
            <div className="data-container">
                <ul>
                    <li>{country.name} </li>
                    <li>{country.capital} </li>
                    <li>Population : {numberFormat(country.population)} </li> 
                </ul>
            </div>
            
        </li>
    );
};

export default Card;