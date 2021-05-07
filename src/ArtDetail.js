import React from "react";
import PropTypes from "prop-types";

function ArtDetail(props) {
  const { art } =props;

  return (
    <React.Fragment>
      <hr />
    </React.Fragment>
  );
}

ArtDetail.PropTypes = {
  art: PropTypes.object
}

export default ArtDetail;