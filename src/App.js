import logo from './logo.svg';
import './App.css';
import InputShorter from './InputShorter';
import Background from './Background';
import LinkResult from './LinkResult';
import { useState } from 'react';
function App() {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="container">
      <InputShorter setInputValue={setInputValue} />
      <Background />
      <LinkResult inputValue={inputValue} />
    </div>
  );
}

export default App;
