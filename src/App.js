import React, { useState } from 'react';
import './University.css';
import axios from 'axios';

function App() {

  const [countryName, setCountryName] = useState('')
  const [universities, setUniversities] = useState([])


  const getUniversityList = () => { 
    axios.get(`http://universities.hipolabs.com/search?country=${countryName}`)
    .then(response => {
      console.log('response: ', response.data)
      setUniversities(response.data)
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
    <div className="main-container">
        <input type="text" onChange={getCountryName} className="search-box"></input>

        <button onClick={getUniversityList} className="search-btn">
          Get University List
        </button>

        <div className="unilist-container-style">
          <div>
            {/* loop the result */}
            { universities.map((eachUni, key) => ( 
              <div key={key}>
                {/* University Name */}
                <span>{key+1}</span>
                <p>{eachUni.name}</p>
                {
                  eachUni.web_pages.map((eachWebPage, key) => (
                    <a href={eachWebPage} target="_blank" rel="noreferrer">{eachUni.web_pages}</a>
                  ))
                }
              </div>
              ))
            }
          </div>
        </div>
          
    </div>
  );
}

export default App;
