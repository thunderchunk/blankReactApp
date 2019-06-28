import React from 'react';

import SuperBasicApiCall from './data/SuperBasicApiCall';

import FirstFunction from './basicComponents/FirstFunction';
import SecondFunction from './basicComponents/SecondFunction';
import FirstClass from './basicComponents/FirstClass';
import SecondClass from './basicComponents/SecondClass';

import './App.css'; 


const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <SuperBasicApiCall/>
      <FirstFunction  functionType="Arrow"/>
      <SecondFunction  functionType="built-in Export"/>
      <FirstClass stuffClassWants="Props"/>
      <SecondClass stuffClassWants="More Props"/>
    </div>
  );
}

export default App;
