import * as React from 'react';

// Styles
import '../styles/App.css';
import {
	Button,
	FormGroup,
	FormControl,
	Glyphicon,
	InputGroup,
} from 'react-bootstrap';

// Components & Container.
import { Main } from '../components/Main';
import { ProfileContainer } from './Profile';
import { GalleryContainer } from './Gallery';

export class MainContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			artist: null,
			query: '',
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.search = this.search.bind(this);
		this.enterPressed = this.enterPressed.bind(this);
	}

	render() {
		return (
			<div className="App">
				<Main/>
				<div>
					<FormGroup>
						<InputGroup>
							<FormControl
								type="text"
								placeholder="Search for an Artist..."
								value={this.state.query}
								onChange={this.handleInputChange}
								onKeyPress={this.enterPressed}
							/>
							<InputGroup.Addon onClick={this.search}>
								<Glyphicon glyph="search"/>
							</InputGroup.Addon>
						</InputGroup>
					</FormGroup>
				</div>
				<ProfileContainer
					artist={this.state.artist}
				/>
				<GalleryContainer/>
			</div>
		)
	}

	handleInputChange(event) {
		this.setState({
			query: event.target.value,
		});
	}

	enterPressed(event) {
		if(event.key === 'Enter') {
			this.search();
		}
	}

	search() {
		const BASE_URL = 'https://api.spotify.com/v1/search?'
		const FETCH_URL = `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;
		fetch(FETCH_URL, {
			method: 'GET'
		}).then(response => (
			response.json()
		)).then(json => {
			const artist = json.artists.items[0];
			this.setState({artist});
		}).catch(error => alert('Error!, Please re-search artist'));
	}
}