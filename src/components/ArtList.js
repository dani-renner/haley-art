import React from "react";
import Art from "./Art";
import PropTypes from "prop-types";
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';

function ArtList(props) {
  useFirestoreConnect([
    { collection: 'art' }
  ]);
  const artCollection = useSelector(state => state.firestore.ordered.art);
  if (isLoaded(artCollection)) {
    return (
      <React.Fragment>
        <hr />
        {artCollection.map((art) =>
          <Art
            whenArtClicked={props.onArtSelection}
            title={art.title}
            medium={art.medium}
            dateMade={art.dateMade}
            id={art.id}
            key={art.id}/>
        )}
      </React.Fragment>
    );
  } else if (isEmpty(artCollection)) {
    return (
    <React.Fragment>
      <h3>No Art Available</h3>
    </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    );
  }
}

ArtList.propTypes = {
  onArtSelection: PropTypes.func
};

export default ArtList;