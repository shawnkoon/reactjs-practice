import * as React from 'react';

import { Profile } from '../components/Profile';

export class ProfileContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Profile/>
		)
	}
}