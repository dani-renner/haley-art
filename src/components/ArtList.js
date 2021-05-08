import React from "react";
import Art from "./Art";
import PropTypes from "prop-types";

function ArtList(props) {
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
          key={art.id}
        />
      )}
    </React.Fragment>
  );
}

ArtList.propTypes = {
  artList: PropTypes.object,
  onArtSelection: PropTypes.func
};

export default ArtList;