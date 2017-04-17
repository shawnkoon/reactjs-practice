import * as React from 'react';

import { Gallery } from '../components/Gallery';

export class GalleryContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			audio: null,
			playing: false,
			playingUrl: '',
		};
		this.playSoundClip = this.playSoundClip.bind(this);
	}

	render() {
		return (
			<Gallery
				{...this.props}
				playSoundClip={this.playSoundClip}
			/>
		)
	}

	playSoundClip(soundURL) {
		const audio = new Audio(soundURL);
		if(!this.state.playing) {
			audio.play();
			this.setState({
				audio,
				playing: true,
				playingUrl: soundURL,
			});
		} else {
			if(soundURL === this.state.playingUrl) {
				this.state.audio.pause();
				this.setState({
					playing: false,
				});
			} else {
				this.state.audio.pause();
				audio.play();
				this.setState({
					audio,
					playing: true,
					playingUrl: soundURL,
				});
			}
		}
	}
}