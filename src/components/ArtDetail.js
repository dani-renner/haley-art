import React from "react";
import PropTypes from "prop-types";

function ArtDetail(props) {
  const { art, onClickingDelete }= props;

  return (
    <React.Fragment>
      <hr />
      <h3>{art.title}</h3>
      <img src={art.artImage} width="max-width" height="500"/>
      <h3>{art.widthInches}" x {art.heightInches}"</h3>
      <button onClick={()=> onClickingDelete(art.id) }>Remove</button>
    </React.Fragment>
  );
}

ArtDetail.propTypes = {
  art: PropTypes.object,
  onClickingDelete: PropTypes.func
}

export default ArtDetail;