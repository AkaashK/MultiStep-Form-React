import React, { Fragment } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";

const Confirm = (props) => {
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

  const {
    values: { firstName, lastName, email, occupation, city, bio },
  } = props;

  return (
    <MuiThemeProvider>
      <Fragment>
        <AppBar title="Confirmation Page" />
        <List>
          <ListItem primaryText="First Name" secondaryText={firstName} />
          <ListItem primaryText="Last Name" secondaryText={lastName} />
          <ListItem primaryText="Email" secondaryText={email} />
          <ListItem primaryText="Occupation" secondaryText={occupation} />
          <ListItem primaryText="City" secondaryText={city} />
          <ListItem primaryText="Bio" secondaryText={bio} />
        </List>
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

export default Confirm;
