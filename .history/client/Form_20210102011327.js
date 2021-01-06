import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));
export default function Form(props) {
  const classes = useStyles();
  return (
    <form
      id="myform"
      onSubmit={props.handleSubmit}
      className={classes.root}
      noValidate
      autoComplete="off"
    >
      <TextField
        required
        id="standard-required"
        label="Required"
        defaultValue="Name"
      />
      <TextField
        required
        id="outlined-required"
        label="Required"
        defaultValue="Name"
        variant="outlined"
        name="name"
        type="text"
        onChange={props.handleChange}
        value={props.name}
      />
      {/* <label htmlFor="name">Name:</label> */}
      {/* <input
        name="name"
        type="text"
        onChange={props.handleChange}
        value={props.name}
      /> */}

      {/* <label htmlFor="mark">Mark:</label>
      <input
        name="name"
        type="text"
        onChange={props.handleChange}
        value={props.mark}
      /> */}
      <button type="submit">Submit</button>
    </form>
  );
}