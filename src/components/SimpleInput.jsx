import React from "react";
import { useState } from "react";

const SimpleInput = () => {
  const [enteredName, setEnteredName] = useState("");
  const [inputIsTouched, setInputIsTouched] = useState(false);
  const enteredInputIsValid = enteredName.trim() !== "";
  const inputInValid = !enteredInputIsValid && inputIsTouched;

  let formIsValid = false;

  if (enteredInputIsValid) {
    formIsValid = true;
  }

  const blurHandler = () => {
    setInputIsTouched(true);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setInputIsTouched(true);
    if (inputInValid) {
      return;
    }

    setEnteredName("");
    setInputIsTouched(false);
  };

  const EnteredNameHandlers = (event) => {
    const eventValue = event.target.value;
    setEnteredName(eventValue);
  };

  const inputclasses = inputInValid ? "form-control invalid" : "form-control ";
  return (
    <form onSubmit={onSubmitHandler}>
      <div className={inputclasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={EnteredNameHandlers}
          onBlur={blurHandler}
        />
      </div>
      {inputInValid && <p className="error-text">input is not valid</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
