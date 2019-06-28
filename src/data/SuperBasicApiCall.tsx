import React from 'react';

//super basic api call /////  DO NOT DO A REAL ONE THIS WAY
const SuperBasicApiCall = () => {

  fetch('https://jsonplaceholder.typicode.com/todos')
  .then(res => res.json())
  .then(res => console.log(res));
    return (
      <p>This is the bare essential elements of an api call. Check the console.</p>
    );
};

export default SuperBasicApiCall;

