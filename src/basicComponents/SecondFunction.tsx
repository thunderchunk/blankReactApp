import React from 'react';

interface SecondFunctionProps {
    functionType: string;
  }

export default function SecondFunction ( props: SecondFunctionProps ){
    return (
      <div className="component-container-div">
          <h2>This is a basic <span className="prop-span">{props.functionType} </span> Function</h2>
          <p>aka SecondFunction</p>
      </div>
    );
  };
  