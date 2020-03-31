import React , { Component } from 'react';

class Equation extends Component {
  
  constructor(props) {
    super(props);
  	const equationArray = this.formEquation();
  	this.state = {
      value1: equationArray[0],
      value2: equationArray[1],
      value3: equationArray[2],
      proposedAnswer: equationArray[3]
    }
  }

	updateState = newEquationArray => {
      this.setState(currentState => ({
        value1: newEquationArray[0],
        value2: newEquationArray[1],
        value3: newEquationArray[2],
        proposedAnswer: newEquationArray[3]
      }))
    }
    
    formEquation = () => {
    	const value1 = Math.floor(Math.random() * 100);
    	const value2 = Math.floor(Math.random() * 100);
    	const value3 = Math.floor(Math.random() * 100);
    	const proposedAnswer = Math.floor(Math.random() * 3) + (value1 + value2 + value3);
    	return [value1, value2, value3, proposedAnswer];
  	};

	answer = event => {
    	const newEquationArray = this.formEquation();
    	this.updateState(newEquationArray);
        console.log(event.target.name)
    	const answerWasCorrect = this.evaluateAnswer(event.target.name);
      	console.log(answerWasCorrect)
    	this.props.handleAnswer(answerWasCorrect);
    };

evaluateAnswer(givenAnswer) {
    const { value1, value2, value3, proposedAnswer } = this.state;
    const corrAnswer = value1 + value2 + value3;

    return (
      (corrAnswer === proposedAnswer && givenAnswer === 'true') ||
      (corrAnswer !== proposedAnswer && givenAnswer === 'false')
    );
  }

	render() {
      const { value1, value2, value3, proposedAnswer } = this.state;
      return (
        	<div>
             <div className="equation">
            <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
          </div>
          <button onClick={this.answer} name="true">True</button>
          <button onClick={this.answer} name="false">False</button>
             </div>
        ) 
    }
}

export default Equation
