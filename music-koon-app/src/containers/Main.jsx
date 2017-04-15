import * as React from 'react';

// Components & Container.
import { Main } from '../components/Main';
import { ProfileContainer } from './Profile';
import { GalleryContainer } from './Gallery';

export class MainContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Main/>
				<div>
					<input placeholder="Search for an artist..."/>
					<button>button</button>
				</div>
				<ProfileContainer/>
				<GalleryContainer/>
			</div>
		)
	}
}