import './App.css';
import { useState } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import Textarea from './components/Textarea';
import Title from './components/Title';

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const clearInput = () => {
    setInputValue('');
  };

  const handleButtonClick = () => {
    const resultInput = inputValue.replace(/\s+/g, '')
    console.log(`html//swapi.dev/api/${resultInput}`);
    clearInput();
  };

  return (
    <div className="App">
      <Title />
      <div className="top-form">
        <label htmlFor="api-input">html//swapi.dev/api/</label>
        <Input id="api-input" type="text" value={inputValue} onInputChange={handleInputChange} />
        <Button onClick={handleButtonClick} disabled={!inputValue}/>
      </div>
      <Textarea />
    </div>
  );
}

export default App;
