import * as React from 'react';
import './styles/App.css';

export class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			deadline: 'December 25, 2017',
			newDeadline: '',
		}
		this.changeDeadLine = this.changeDeadLine.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	render() {
		return (
			<div className="App">
				<div className="App-title">Countdown to {this.state.deadline}</div>
				<div>
					<div className="Clock-days">14 days</div>
					<div className="Clock-hours">30 hours</div>
					<div className="Clock-minutes">15 minutes</div>
					<div className="Clock-seconds">20 seconds</div>
				</div>
				<br/>
				<br/>
				<div>
					<input placeholder="new date" onChange={this.handleInputChange}/>
					<button onClick={this.changeDeadLine}>Submit</button>
				</div>
			</div>
		);
	}

	handleInputChange(event) {
		const input = {
			newDeadline : event.target.value,
		};
		this.setState(input);
	}

	changeDeadLine() {
		const newValue = {
			deadline: this.state.newDeadline,
		};
		this.setState(newValue);
	}
};