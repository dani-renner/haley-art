import React from 'react';
import PropTypes from "prop-types";
import NewArtForm from './NewArtForm';
import ArtList from './ArtList';
import { connect } from 'react-redux';
import * as c from "./../actions/ActionTypes";
import * as a from "./../actions";
import { withFirestore, isLoaded } from 'react-redux-firebase';

class ArtControl extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      selectedArt: null,
      editing: false
    };
  }

  handleAddingNewArtToList = () => {
    const { dispatch } = this.props;
    const action = a.toggleForm();
    dispatch(action);
  }
  
  handleClick = () => {
    if (this.state.selectedArt != null) {
      this.setState({
        selectedArt: null,
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }
  
  render() {
    let currentlyVisibleState = null;
    if (ArtList){
      currentlyVisibleState = <ArtList />;
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }
}

ArtControl.propTypes = {
  formVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    formVisibleOnPage: state.formVisibleOnPage
  }
}

ArtControl = connect(mapStateToProps)(ArtControl);

export default ArtControl;