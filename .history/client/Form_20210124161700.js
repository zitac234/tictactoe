import React from "./react";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      chioce: "",
      showtable: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = (event) => {
    event.target.name = event.target.value;
    this.setState({ name });
  };
  handleSubmit = (event) => {
    this.setState({ showtable: true });
  };
}