import { connect } from 'react-redux';
import { convertSong } from '../utils'
import { toggleSong } from '../action-creators/player';
import Station from '../components/Station'


function filterSongs(songs, genre) {
  return songs.filter(song => genre === song.genre).map(convertSong)
}

//the state is the store
const mapStoreToProps = function (store, ownProps) { //store is passed through Provider
  console.log("store", store, "ownProps", ownProps)
  let genre = ownProps.routeParams.genreName
  return {
    genreName: genre,
    songs: filterSongs(store.songs, genre), //can do axios request
    currentSong: store.player.currentSong,
    isPlaying: store.player.isPlaying,
  }
}

const mapDispatchToProps = function (dispatch) {
  return {
    toggleOne: function(song, list) {
      dispatch(toggleSong(song, list))
    }
  }
}

const StationContainer = connect(mapStoreToProps, mapDispatchToProps)(Station)

export default StationContainer
