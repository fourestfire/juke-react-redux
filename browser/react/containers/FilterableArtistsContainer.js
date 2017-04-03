import {connect} from 'react-redux';
import FilterInputContainer from './FilterInputContainer'

function mapStateToProps(store) {
  return {
    artists: store.artists
  }
}

function mapMethodsToProps() {
  return {

  }
}

export default connect(mapStateToProps, mapMethodsToProps)(FilterInputContainer);
