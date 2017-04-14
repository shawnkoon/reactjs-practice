import * as React from 'react';
import '../styles/App.css';

// Component
import { Clock } from '../components/Clock';

export class ClockContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0,
		};
	}

	componentWillMount() {
		this.getTimeUntil(this.props.deadline);
	}

	componentDidMount() {
		setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
	}

	render() {
		return (
			<Clock
				days={this.state.days}
				hours={this.state.hours}
				minutes={this.state.minutes}
				seconds={this.state.seconds}
			/>
		);
	}

	getTimeUntil(deadline) {
		const time = Date.parse(deadline) - Date.parse(new Date());
		const seconds = this.appendZero(Math.floor((time/1000) % 60));
		const minutes = this.appendZero(Math.floor((time/1000/60) % 60));
		const hours = this.appendZero(Math.floor((time/1000/60/60) % 24));
		const days = Math.floor((time/1000/60/60/24));

		this.setState({
			days,
			hours,
			minutes,
			seconds,
		});
	}

	appendZero(number) {
		return number < 10 && number >= 0 ? '0' + number : number;
	}
}