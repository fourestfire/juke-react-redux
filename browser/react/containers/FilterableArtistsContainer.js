import {connect} from 'react-redux';
import FilterInputContainer from './FilterInputContainer'

function mapStateToProps(store, ownProps) {
  return {
    artists: store.artists
  }
}

function mapMethodsToProps(dispatch, ownProps) {
  return {

  }
}

export default connect(mapStateToProps, mapMethodsToProps)(FilterInputContainer);
