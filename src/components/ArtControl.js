import React from 'react';
import PropTypes from "prop-types";
import ArtList from './ArtList';
import { connect } from 'react-redux';
import * as c from "./../actions/ActionTypes";
import * as a from "./../actions";

class ArtControl extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      selectedArt: null,
      editing: false
    };
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
  
  render() {
    currentlyVisibleState = <ArtList />;
    return (
      {currentlyVisibleState}
    );
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

export default ArtControl;