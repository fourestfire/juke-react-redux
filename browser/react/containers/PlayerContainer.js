import {connect} from 'react-redux';
import Player from '../components/Player';

import {previous, next, setProgress, toggleSong} from '../action-creators/player';

const mapStateToProps = (store) => {
  return {
    currentSong: store.player.currentSong,
    currentSongList: store.player.currentSongList,
    isPlaying: store.player.isPlaying,
    progress: store.player.progress
  }
}

const mapMethodsToProps = (dispatch, ownProps) => {
  console.log('PlayerContainer ownProps', ownProps);
  return {
    toggle: (song, list) => dispatch(toggleSong(song, list)),
    prev: () => dispatch(previous()),
    next: () => dispatch(next()),
    dispatchSetProgress: (currentTime, duration) => {
      dispatch(setProgress(currentTime / duration))
    }
  }
}

export default connect(mapStateToProps, mapMethodsToProps)(Player)
