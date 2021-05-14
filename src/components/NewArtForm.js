import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import { useFirestore } from 'react-redux-firebase';

function NewArtForm(props){

  const firestore = useFirestore();

  function addArtToFirestore(event) {
    event.preventDefault();
    props.onNewArtCreation();
    return firestore.collection('art').add(
      {
        title: event.target.title.value,
        medium: event.target.medium.value,
        dateMate: event.target.dateMate.value
      }
    );
  }

  return (
    <React.Fragment>
        <ReusableForm
        formSubmissionHandler={addArtToFirestore}
        buttonText="Add to Gallery" />
    </React.Fragment>
  );
}

NewArtForm.propTypes = {
  onNewArtCreation: PropTypes.func
};

export default NewArtForm;