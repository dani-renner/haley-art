import React from 'react';
import NewArtForm from './NewArtForm';
import ArtList from './ArtList';
import ArtDetail from './ArtDetail';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from "./../actions";
import { withFirestore, isLoaded } from 'react-redux-firebase';

class ArtControl extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      selectedArt: null
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
        widthInches: art.get("widthInches"),
        heightInches: art.get("heightInches"),
        artImage: art.get("artImage"),
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
    const auth = this.props.firebase.auth();
    let currentlyVisibleState = <ArtList />;
    let buttonText = null;
    if ((isLoaded(auth)) && (auth.currentUser == null)){
      if (this.state.selectedArt != null){
        currentlyVisibleState = <ArtDetail art = {this.state.selectedArt} />
        buttonText = "Back to List";
      } else {
        currentlyVisibleState = <ArtList onArtSelection={this.handleChangingSelectedArt} />
      }
      return (
        <React.Fragment>
          {currentlyVisibleState}
          <button onClick={this.handleClick}>{buttonText}</button>
        </React.Fragment>
      );
    }
    else if ((isLoaded(auth)) && (auth.currentUser != null)){
      if (this.state.selectedArt != null){
        currentlyVisibleState = <ArtDetail art = {this.state.selectedArt} onClickingDelete = {this.handleDeletingArt} />
        buttonText = "Back to List";
      }else if (this.props.formVisibleOnPage) {
        currentlyVisibleState = <NewArtForm onNewArtCreation={this.handleAddingNewArtToList} onCheckingAuth={this.handleCheckingAuth} />
        buttonText = "Back to All Art";
      } else {
        currentlyVisibleState = <ArtList onArtSelection={this.handleChangingSelectedArt} />
        buttonText = "Add Art";
      }
      return (
        <React.Fragment>
          {currentlyVisibleState}
          <button onClick={this.handleClick}>{buttonText}</button>
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