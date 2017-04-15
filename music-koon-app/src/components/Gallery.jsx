import * as React from 'react';

export const Gallery = props => (
	<div className="Gallery">
		{
			props.albums.map((track, index) => (
				<div
					key={index}
					className="Track"
				>
					<img
						src={track.album.images[0].url}
						className="Track-image"
						alt="track"
					/>
					<p className="Track-text">
						{track.name}
					</p>
				</div>
			))
		}
	</div>
);