import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setOutputValue(inputValue);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">String Input & Output</h1>
      <form className="input-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter a string"
          className="input-field"
        />
        <button type="submit" className="submit-button">Submit</button>
      </form>
      <div className="output-container">
        <h2 className="output-title">Output:</h2>
        <p className="output-text">{outputValue}</p>
      </div>
    </div>
  );
}

export default App;
