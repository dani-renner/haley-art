import React from "react";
import PropTypes from "prop-types";

function ArtDetail(props) {
  const { art, onClickingDelete } =props;

  return (
    <React.Fragment>
      <hr />
      <h3>{art.title}</h3>
    </React.Fragment>
  );
}

ArtDetail.PropTypes = {
  art: PropTypes.object,
  onClickingDelete: PropTypes.func
}

export default ArtDetail;