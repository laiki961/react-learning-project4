import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
    //   <div
    //    className={`${classes.control} ${
    //      props.password.isValid === false ? classes.invalid : ""
    //    }`}
    //  >
    //    <label htmlFor="password">Password</label>
    //    <input
    //      type="password"
    //      id="password"
    //      value={props.email.value}
    //      onChange={props.onPasswordChange}
    //      onBlur={props.validatePasswordHandler}
    //    />
    //  </div>
  );
};

export default Input;
