import React, {Component} from 'react';
import LyricsForm from '../components/LyricsForm';


class LyricsContainer extends Component {

  constructor(props) {

    super(props);

    this.state = {
      artistQuery: '',
      songQuery: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleArtistInput = this.handleArtistInput.bind(this);
    this.handleSongInput = this.handleSongInput.bind(this);
  }

  handleArtistInput(artist) {
    this.setState({ artistQuery: artist });
  }

  handleSongInput(song) {
    this.setState({ songQuery: song });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.artistQuery && this.state.songQuery) {
      this.props.dispatchSearch(this.state.artistQuery, this.state.songQuery);
    }
  }

  render() {
    console.log(this.state)
    return (
      <LyricsForm
        {...this.state}
        text={this.props.text}
        setArtist={this.handleArtistInput}
        setSong={this.handleSongInput}
        handleSubmit={this.handleSubmit} />
    );
  }

}

export default LyricsContainer;

