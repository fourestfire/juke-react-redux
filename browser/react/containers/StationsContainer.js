import { connect } from 'react-redux';

import Stations from '../components/Stations'

function convertSongsToStation(songs) {
  const stationsObject = {};
  for (let songObj of songs) {
    let genre = songObj.genre
    if (!Object.keys(stationsObject).includes(genre)) stationsObject[genre] = [songObj]
    else stationsObject[genre].push(songObj)
  }
  return stationsObject;
}

const mapStoreToProps = function (store) {
  return {
    stations: convertSongsToStation(store.songs)
  }
}

const mapDispatchToProps = function (dispatch) {
  return {} //no methods needed for the container
}

const stationsContainerCreator = connect(mapStoreToProps, mapDispatchToProps)

const StationsContainer = stationsContainerCreator(Stations)

export default StationsContainer

//this is the long way; will refactor
