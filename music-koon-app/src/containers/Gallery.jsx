import * as React from 'react';

import { Gallery } from '../components/Gallery';

export class GalleryContainer extends React.Component {
	render() {
		console.log(this.props);
		return (
			<Gallery
				{...this.props}
			/>
		)
	}
}