import * as React from 'react';

// Container
import { ClockContainer } from './Clock';

// Styles
import {
	Button,
	ControlLabel,
	Form,
	FormControl,
	FormGroup,
	Jumbotron,
} from 'react-bootstrap';

export class AppContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			deadline: 'December 25, 2017',
			newDeadline: '',
			reasonText: 'Christmas!',
			newReasonText: '',
		}
		this.changeDeadLine = this.changeDeadLine.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleReasonInputChange = this.handleReasonInputChange.bind(this);
	}

	render() {
		return (
			<div className="App">
				<Jumbotron className="App-title">
					Countdown to {this.state.deadline}
					<p><strong>Reason : </strong>{this.state.reasonText}</p>
				</Jumbotron>
				<ClockContainer
					deadline={this.state.deadline}
				/>
				<Form inline>
					<FormGroup>
						<ControlLabel className="Input-label">Date :</ControlLabel>
						<FormControl
							className="Deadline-input"
							placeholder="Ex) December 25, 2017"
							onChange={this.handleInputChange}
						/>
					</FormGroup>
					<br/>
					<FormGroup>
						<ControlLabel className="Input-label">Reason :</ControlLabel>
						<FormControl
							className="Reason-input"
							placeholder="Ex) Christmas!"
							onChange={this.handleReasonInputChange}
						/>
					</FormGroup>
					<br/>
					<Button
						className="Submit-button"
						bsStyle="success"
						onClick={this.changeDeadLine}
					>Submit</Button>
				</Form>
			</div>
		);
	}

	handleInputChange(event) {
		const input = {
			newDeadline : event.target.value,
		};
		this.setState(input);
	}

	handleReasonInputChange(event) {
		const input = {
			newReasonText : event.target.value,
		};
		this.setState(input);
	}

	changeDeadLine() {
		const newValue = {
			deadline: this.state.newDeadline,
			reasonText: this.state.newReasonText,
		};
		this.setState(newValue);
	}
}