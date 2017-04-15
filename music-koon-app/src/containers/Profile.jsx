import * as React from 'react';

import { Profile } from '../components/Profile';

export class ProfileContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const defaultArtist = {
			name: '',
			followers: { total: 0 },
			images: [{ url: ''}],
			genres: [ '' ],
		}
		const artist = this.props.artist !== null ? 
									 this.props.artist : 
									 defaultArtist;
		return (
			<Profile
				{...artist}
			/>
		)
	}
}