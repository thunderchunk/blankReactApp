import React from 'react';

interface FirstFunctionProps {
    functionType: string;
  }

const FirstFunction = ( props: FirstFunctionProps ) => {
    return (
      <div className="component-container-div">
          <h2>This is a basic <span className="prop-span">{props.functionType} </span> Function</h2>
          <p>aka FirstFunction</p>
      </div>
    );
  };
  
  export default FirstFunction;