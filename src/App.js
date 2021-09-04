import React, { useState } from 'react';
import logo from './assets/img/My Logo.png';
import axios from 'axios';

function App() {

  const [countryName, setCountryName] = useState('')

  const getUniversityList = () => { 
    axios.get(`http://universities.hipolabs.com/search?country=${countryName}`)
    .then(response => {
      console.log('response: ', response.data)
    }) 
    .catch(error => {
      console.log('error: ', error)
    })
  }

  const getCountryName = (element) => {
    console.log('ele: ', element.target.value)
    const findCountry = element.target.value
    setCountryName(findCountry)
  }
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Amir Logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        Find your University
        </a>

        <input type="text" onChange={getCountryName}></input>

        <button onClick={getUniversityList}>
          Get University List
        </button>
      </header>
    </div>
  );
}

export default App;
