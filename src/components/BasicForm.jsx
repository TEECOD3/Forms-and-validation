import React from "react";
import useinputs from "../hooks/useinputs";
const BasicForm = (props) => {
  const {} = props;
  const {
    error: firstnameerror,
    valueHandler: firstnamehandler,
    isvalid: firstnameisvalid,
    enteredValue: firstnamevalue,
    blurHandler: firstnameblurhandler,
    resetEverything: resetfirstname,
  } = useinputs((value) => value.trim() !== "");

  const {
    error: lastnameerror,
    valueHandler: lastNameHandler,
    isvalid: lastnameisvalid,
    enteredValue: lastnamevalue,
    blurHandler: lastNameBlurHandler,
    resetEverything: resetlastname,
  } = useinputs((value) => value.trim() !== "");

  const submithandler = (event) => {
    event.preventDefault();
    resetfirstname();
    resetlastname();
  };

  const firstnameclasses = firstnameerror
    ? "form-control invalid "
    : "form-control";
  const lastnameclasses = lastnameerror
    ? "form-control invalid "
    : "form-control";
  return (
    <form onSubmit={submithandler}>
      <div className="control-group">
        <div className={firstnameclasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={firstnamevalue}
            onChange={firstnamehandler}
            onBlur={firstnameblurhandler}
          />
          {firstnameerror && (
            <p className="error-text">please enter your first name</p>
          )}
        </div>
        <div className={lastnameclasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lastnamevalue}
            onChange={lastNameHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastnameerror && (
            <p className="error-text">please enter your last name</p>
          )}
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          //   onChange={EmailHandler}
          //   onBlur={EmailBlurhandler}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
