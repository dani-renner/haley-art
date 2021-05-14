import React from "react";
import Art from "./Art";
import PropTypes from "prop-types";
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';

function ArtList(props) {
  useFirestoreConnect([
    { collection: 'art' }
  ]);
  const art = useSelector(state => state.firestore.ordered.art);
  if (isLoaded(art)) {
    return (
      <React.Fragment>
        {/* <hr /> */}
        <h1><i>POST LIST</i></h1>
        <hr></hr>
        {Object.values(props.artList).map((art) =>
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
  } else {
    return (
      <React.Fragment>
      <h3>Loading...</h3>
    </React.Fragment>
    )
  }
}

ArtList.propTypes = {
  onArtSelection: PropTypes.func
};

export default ArtList;