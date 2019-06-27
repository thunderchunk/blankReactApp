import React from 'react';
import Button from '@material-ui/core/Button';

interface SecondClassProps {
    stuffClassWants: string;
  };
  interface SecondClassState {
    stateMint: string;
  };

  class SecondClass extends React.Component<SecondClassProps, SecondClassState> {

     buttonColor = "primary";
     buttonMessage = "I'm just a button.";

    constructor( props: SecondClassProps ) {
        super( props );
        this.state = {
          stateMint: "Damn Your Intuition"
        };
      };

      reveal = ( e: React.MouseEvent<HTMLButtonElement> ) => {
        console.log( 'You clicked on the secret button.', e.currentTarget.name );
        this.buttonMessage  = this.state.stateMint;
   
              this.setState( {
                stateMint: this.buttonMessage
              } );
};
      render(){
          return(
              <div className="component-container-div">
                <h2>This is the Second Class.  It has <span className="prop-span">{this.props.stuffClassWants}</span></h2>
                <h3>It also has a state, just like FirstClass, but it's secret.</h3>
                <h3>Ok, I hid it in the button.</h3>
                <Button variant="contained" color="primary" onClick={this.reveal}> {this.buttonMessage}</Button>
                <p>aka SecondClass</p>
              </div>
          );
      };
  };

  export default SecondClass;