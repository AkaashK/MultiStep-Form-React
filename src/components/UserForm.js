/* eslint-disable default-case */
import React, { useState } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";

const UserForm = () => {
  const [values, setValues] = useState({
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: "",
  });

  const nextStep = () => {
    const { step } = values;
    setValues({
      ...values,
      step: step + 1,
    });
  };

  const prevStep = () => {
    const { step } = values;
    setValues({
      ...values,
      step: step - 1,
    });
  };

  const handleChange = (input) => (event) => {
    setValues({
      ...values,
      [input]: event.target.value,
    });
  };

  const { step, firstName, lastName, email, occupation, city, bio } = values;

  const userValues = { firstName, lastName, email, occupation, city, bio };

  switch (step) {
    case 1:
      return (
        <FormUserDetails
          nextStep={nextStep}
          handleChange={handleChange}
          values={userValues}
        />
      );
    case 2:
      return (
        <FormPersonalDetails
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={userValues}
        />
      );
    case 3:
      return (
        <Confirm nextStep={nextStep} prevStep={prevStep} values={userValues} />
      );
    case 4:
      return <Success />;
  }
};

export default UserForm;
