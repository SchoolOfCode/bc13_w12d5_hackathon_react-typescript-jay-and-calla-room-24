import React, {useState, useEffect} from 'react';
import './App.css';
import UserInput from './Components/UserInput';
import DisplayList from './Components/DisplayList';

function App() {
  
  const [input, setInput] = useState('')
  const [citiesMatch, setCitiesMatch] = useState([]);
  
    async function doFetch() {
      const results = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${input}?unitGroup=metric&key=Y2TR7R2AL9M9DDLZNTV7UPV67&contentType=json`)
      const data = await results.json();
      console.log(data);
    }
   //const results = fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m`)
  
  return (
    <div className="App">
      <UserInput setInput={setInput} citiesMatch={citiesMatch}/>
      <button onClick={doFetch}>Search</button>
    </div>
  );
}

export default App;
