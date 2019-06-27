import React from 'react';

interface FirstClassProps {
    stuffClassWants: string;
  };
  interface FirstClassState {
    stateMint: string;
  };

  class FirstClass extends React.Component<FirstClassProps, FirstClassState> {

    constructor( props: FirstClassProps ) {
        super( props );
        this.state = {
          stateMint: "state"
        };
      };

      render(){
          return(
              <div className="component-container-div">
                <h2>This is the First Class.  It has <span className="prop-span">{this.props.stuffClassWants}</span></h2>
                <h3>It also has a <span className="state-span">{this.state.stateMint}</span></h3>
                <p>aka FirstClass</p>
              </div>
          );
      };
  };

  export default FirstClass;