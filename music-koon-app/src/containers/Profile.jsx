import * as React from 'react';

import { Profile } from '../components/Profile';

export class ProfileContainer extends React.Component {
	render() {
		return (
			<Profile
				{...this.props.artist}
			/>
		)
	}
}