import { connect } from 'react-redux';

import Stations from '../components/Stations'

function convertSongsToStation(songs) {
  const stationsObject = {};
  for (let songObj of songs) {
    if (!Object.keys(stationsObject).includes(songObj.genre)) stationsObject[songObj.genre] = [songObj]
    else stationsObject[songObj.genre].push(songObj)
  }
  return stationsObject;
}

//the state is the store
const mapStoreToProps = function (store, ownProps) { //store is passed through Provider
  return {
    stations: convertSongsToStation(store.songs)
  }
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return {} //no methods needed for the container (yet...)
}

const stationsContainerCreator = connect(mapStoreToProps, mapDispatchToProps)

const StationsContainer = stationsContainerCreator(Stations)

export default StationsContainer

//this is the long way; will refactor
