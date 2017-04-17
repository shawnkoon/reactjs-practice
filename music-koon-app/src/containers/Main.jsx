import * as React from 'react';

// Styles
import '../styles/App.css';
import {
	FormGroup,
	FormControl,
	Glyphicon,
	InputGroup,
} from 'react-bootstrap';

// Components & Container.
import { Footer } from '../components/Footer';
import { Main } from '../components/Main';
import { ProfileContainer } from './Profile';
import { GalleryContainer } from './Gallery';

export class MainContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			artist: null,
			albums: null,
			query: '',
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.search = this.search.bind(this);
		this.enterPressed = this.enterPressed.bind(this);
	}

	render() {
		return (
			<div>
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
					{
						this.state.artist !== null
						? <div>
							<ProfileContainer
								artist={this.state.artist}
							/>
							{
								this.state.albums !== null
								? <GalleryContainer
									albums={this.state.albums}
								/>
								: <div></div>
							}
						</div>
						: <div></div>
					}
				</div>
				<Footer/>
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
		const BASE_PROF_URL = 'https://api.spotify.com/v1/search?';
		const FETCH_PROF_URL = `${BASE_PROF_URL}q=${this.state.query}&type=artist&limit=1`;
		const BASE_ALBUM_URL = 'https://api.spotify.com/v1/artists';
		fetch(FETCH_PROF_URL, {
			method: 'GET'
		}).then(response => (
			response.json()
		)).then(json => {
			const artist = json.artists.items[0];
			this.setState({artist});

			const FETCH_ALBUM_URL = `${BASE_ALBUM_URL}/${artist.id}/top-tracks?country=US`;
			fetch(FETCH_ALBUM_URL, {
				method: 'GET'
			}).then(response => (
				response.json()
			)).then(json => {
				this.setState({
					albums: json.tracks,
				});
			}).catch(error => {
				console.error(error);
			});
		}).catch(error => {
			alert('Error!, Please re-search artist');
			console.error(error);
			this.setState({artist: null});
		});
	}
}