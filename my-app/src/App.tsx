import React, {useState} from 'react';
import './App.css';
import cities from './cities.json'
import UserInput from './Components/UserInput';
import DisplayList from './Components/DisplayList';

function App() {
  
  const [input, setInput] = useState('')
  
  
  return (
    <div className="App">
      <UserInput setInput={setInput}/>
    </div>
  );
}

export default App;
