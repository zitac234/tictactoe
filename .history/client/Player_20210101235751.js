import React, { Component } from "react";
export default class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      mark: "",
    };
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event){
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  componentDidMount() {}
   myForm(){
    <form onSubmit ={this.handleChange}>
        <label htmlFor
    </form>
   }
}