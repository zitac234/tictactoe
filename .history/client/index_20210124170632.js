import React from "react";
import ReactDOM from "react-dom";
import Form from "./Form";

ReactDOM.render(
  <div>{<Board />}</div>,
  document.getElementById("app") // make sure this is the same as the id of the div in your index.html
);