import { connect } from 'react-redux';
import LyricsFormContainer from '../containers/LyricsFormContainer'
import {searchLyrics} from '../action-creators/lyrics';

const mapStateToProps = function (store, ownProps) { //store is passed through Provider
  return {
    text: store.lyrics.text
  }
}

const mapDispatchToProps = function (dispatch) {
  return {
    dispatchSearch: function(artist, song) {
      dispatch(searchLyrics(artist, song))
    }
  }
}

const LyricsContainer = connect(mapStateToProps, mapDispatchToProps)(LyricsFormContainer)

export default LyricsContainer
