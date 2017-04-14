import * as React from 'react';

// Styles
import '../styles/App.css';
import { PageHeader } from 'react-bootstrap';

export const Clock = props => (
	<PageHeader>
		<div className="Clock-days">{props.days} days</div>
		<div className="Clock-hours">{props.hours} hours</div>
		<div className="Clock-minutes">{props.minutes} minutes</div>
		<div className="Clock-seconds">{props.seconds} seconds</div>
	</PageHeader>
);