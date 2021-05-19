import React, { useState } from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";
import { storage } from "./../firebase";

function ReusableForm(props) {

  const ReactFirebaseFileUpload = () => {
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);
    
    const handleChange = event => {
      if (event.target.files[0]) {
        setImage(event.target.files[0]);
      }
    };
    
    const handleUpload = () => {
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        snapshot => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        error => {
          console.log(error);
        },
        () => {
          storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then(url => {
              setUrl(url);
            });
        }
      );
    };
  return (
    <React.Fragment>
      <progress value={progress} max="100" />
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='title'
          placeholder='Title of Piece:' />
        <input
          type='text'
          name='medium'
          placeholder='Medium(s) used:' />
        <input
          type='text'
          name='dateMade'
          placeholder='Year Completed:' />
        <input type="file" onChange={handleChange} />
        <button onClick={handleUpload}>Upload</button>
        <img src={url || "https://forum.affinity.serif.com/uploads/monthly_2018_12/29978488_exampleofillysagligndashedlines.png.e3bbf2f0aa2cc4c3725e4087b5653b79.png"} alt="user's photo" />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}
render(<ReactFirebaseFileUpload />, document.querySelector("#root"));
};


ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;