import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
    </div>
  );
}

function LoadCountries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, []);
  return (
    <div>
      <h2>Tour Agency!</h2>
      <p>You can travel {countries.length} total countries.</p>
      {
        countries.map(country => <Country name={country.name.common}></Country>)
      }
    </div>
  )
};


function Country(props) {
  return (
    <div>
      <h3>Name: {props.name}</h3>
      <h4>ksndkadn</h4>
    </div>
  );
};



export default App;
