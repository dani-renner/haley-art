import React from 'react';
import NewArtForm from './NewArtForm';
import ArtList from './ArtList';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
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

  handleChangingSelectedArt = (id) => {
    this.props.firestore.get({collection: 'art', doc: id}).then((art) => {
      const firestoreArt = {
        title: art.get("title"),
        medium: art.get("medium"),
        dateMade: art.get("dateMade"),
        id: art.id
      }
      this.setState({selectedArt: firestoreArt});
    });
  }

  handleDeletingArt = (id) => {
    this.props.firestore.delete({collection: 'art', doc: id});
    this.setState({selectedArt: null});
  }
  
  render() {
    let currentlyVisibleState = <ArtList />;
    if (isLoaded){
      return (
        <React.Fragment>
          {currentlyVisibleState}
        </React.Fragment>
      );
    }
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

export default withFirestore(ArtControl);