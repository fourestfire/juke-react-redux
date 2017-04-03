import Album from '../components/Album';
import {toggleSong} from '../action-creators/player';
import {connect} from 'react-redux';

const mapStateToProps = (store) => {
  return {
    selectedAlbum: store.albums.selected,
    currentSong: store.player.currentSong,
    isPlaying: store.player.isPlaying
  }
}

const mapMethodsToProps = dispatch => {
  return {
    toggle: (song, list) => dispatch(toggleSong(song, list))
  }
}

export default connect(mapStateToProps, mapMethodsToProps)(Album);
