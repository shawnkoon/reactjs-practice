import * as React from 'react';

// Styles
import '../styles/App.css';

export const Profile = props => (
	<div className="Profile">
		<img
			alt="Profile"
			className="Profile-img"
			src={props.images[0].url}
		/>
		<div classNmae="Profile-info">
			<div className="Profile-name">{props.name}</div>
			<div className="Profile-followers">{props.followers.total}</div>
			<div className="Profile-genres">
				{
					props.genres.map((genre, index) => {
						genre = genre !== props.genres[props.genres.length - 1] ? `${genre}, ` : `${genre}`;
						return (
							<span key={index}>{genre}</span>
						);
					})
				}
			</div>
		</div>
	</div>
);