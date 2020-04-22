import React, { Fragment } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

const FormPersonalDetails = (props) => {
  const continueProcess = (event) => {
    event.preventDefault();
    props.nextStep();
  };

  const goBack = (event) => {
    event.preventDefault();
    props.prevStep();
  };

  const styles = {
    button: {
      margin: 15,
    },
  };

  return (
    <MuiThemeProvider>
      <Fragment>
        <AppBar title="Enter Personal Details" />
        <TextField
          hintText="Enter your occupation"
          floatingLabelText="Occupation"
          onChange={props.handleChange("occupation")}
          defaultValue={props.values.occupation}
        />
        <br />
        <TextField
          hintText="Enter your city"
          floatingLabelText="City"
          onChange={props.handleChange("city")}
          defaultValue={props.values.city}
        />
        <br />
        <TextField
          hintText="Enter your bio"
          floatingLabelText="Bio"
          onChange={props.handleChange("bio")}
          defaultValue={props.values.bio}
        />
        <br />
        <RaisedButton
          label="Continue"
          primary={true}
          style={styles.button}
          onClick={continueProcess}
        />
        <RaisedButton
          label="Back"
          primary={false}
          style={styles.button}
          onClick={goBack}
        />
      </Fragment>
    </MuiThemeProvider>
  );
};

export default FormPersonalDetails;
