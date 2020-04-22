import React, { Fragment } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

const FormUserDetails = ({ nextStep, values, handleChange }) => {
  const continueProcess = (event) => {
    event.preventDefault();
    nextStep();
  };

  const styles = {
    button: {
      margin: 15,
    },
  };

  return (
    <MuiThemeProvider>
      <Fragment>
        <AppBar title="Enter User Details" />
        <TextField
          hintText="Enter your first name"
          floatingLabelText="first Name"
          onChange={handleChange("firstName")}
          defaultValue={values.firstName}
        />
        <br />
        <TextField
          hintText="Enter your last name"
          floatingLabelText="last Name"
          onChange={handleChange("lastName")}
          defaultValue={values.lastName}
        />
        <br />
        <TextField
          hintText="Enter your email"
          floatingLabelText="Email"
          onChange={handleChange("email")}
          defaultValue={values.email}
        />
        <br />
        <RaisedButton
          label="Continue"
          primary={true}
          style={styles.button}
          onClick={continueProcess}
        />
      </Fragment>
    </MuiThemeProvider>
  );
};

export default FormUserDetails;
