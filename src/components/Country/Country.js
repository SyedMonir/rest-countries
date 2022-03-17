import React from 'react';
import './Country.css';

const Country = (props) => {
    // console.log(props);
    const {name, area, flags} = props.country;
    return (
        <div className='country'>
          <h3>{name.common}</h3>
          <p>Area:{area} </p>
          <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;