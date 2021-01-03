import React from "react";

const Form = (props) => (
  <form id="todo-form" onSubmit={props.handleSubmit}>
    <label htmlFor="name">Name:</label>
    <input
      name="taskName"
      type="text"
      onChange={props.handleChange}
      value={props.name}
    />

    <label htmlFor="assignee">
      Assign To:
    </label>
    <input
      name="assignee"
      type="text"
      onChange={props.handleChange}
      value={props.assignee}
    />

    <button type="submit" disabled={!props.taskName || !props.assignee}>
      Submit
    </button>
    {props.errorMessage && <div className="error">{props.errorMessage}</div>}
  </form>
);
