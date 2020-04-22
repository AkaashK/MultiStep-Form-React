import React, { Fragment } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

const Success = () => (
  <MuiThemeProvider>
    <Fragment>
      <AppBar title="Success" />
      <h1>Thank you for your Submission</h1>
      <h4>You will get am email with further instructions</h4>
    </Fragment>
  </MuiThemeProvider>
);

export default Success;
