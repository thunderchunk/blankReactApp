import React from 'react';
import FirstFunction from './basicComponents/FirstFunction';
import SecondFunction from './basicComponents/SecondFunction';
import FirstClass from './basicComponents/FirstClass';
import SecondClass from './basicComponents/SecondClass';
import './App.css'; 


const App: React.FC = () => {
  return (
    <div className="App">
      <FirstFunction  functionType="Arrow"/>
      <SecondFunction  functionType="built-in Export"/>
      <FirstClass stuffClassWants="Props"/>
      <SecondClass stuffClassWants="More Props"/>
    </div>
  );
}

export default App;
