import React from "react";
import { useState } from "react";

const useinputs = (validationfunction) => {
  //   const { validationfunction } = props;
  const [enteredValue, SetEnteredValue] = useState("");
  const [inputIsTouched, SetInputIsTouched] = useState(false);

  const validInput = validationfunction(enteredValue);
  const hasError = !validInput && inputIsTouched;

  const valueHandler = (event) => {
    SetEnteredValue(event.target.value);
  };

  const blurHandler = () => {
    SetInputIsTouched(true);
  };

  const resetEverything = () => {
    SetInputIsTouched(false);
    SetEnteredValue("");
  };

  return {
    error: hasError,
    valueHandler,
    isvalid: validInput,
    blurHandler,
    resetEverything,
    enteredValue,
  };
};

export default useinputs;

// useinputs( anAugument:which is a function);
// now this function uses these augment to return lot of values
// basically the function returns three other functions :methods defined within it
//i.e the valuehandler , blur handler , and  the reset everthing
//now this functions are not called they are triggered by events,
//now this is a function that basically returns an object of functions and values.
//recall a function is also an object it has its properties and some of these properties can be a methods
//this funtions and values can be distructured from the function when it is called , object like behaviour ,
//and this funtions are ready to be used.
//once the useinput is called it is executed
