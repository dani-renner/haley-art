import React from "react";
import PropTypes from "prop-types";

function Art(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenArtClicked(props.id)}>
        <h3><em><u>{props.title}</u></em></h3>
        <h3><em>{props.medium}</em></h3>
      </div>
    </React.Fragment>
  );
}

Art.propTypes = {
  title: PropTypes.string.isRequired,
  medium: PropTypes.string.isRequired,
  dateMade: PropTypes.string.isRequired,
  widthInches: PropTypes.number.isRequired,
  heightInches: PropTypes.number.isRequired,
  artImage: PropTypes.string,
  id: PropTypes.string.isRequired,
  whenArtClicked: PropTypes.func.isRequired
}

export default Art;