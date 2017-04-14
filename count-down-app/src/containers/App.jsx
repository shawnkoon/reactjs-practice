import * as React from 'react';

// Container
import { ClockContainer } from './Clock';

export class AppContainer extends React.Component {
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
				<ClockContainer
					deadline={this.state.deadline}
				/>
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
}