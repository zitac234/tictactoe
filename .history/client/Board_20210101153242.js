import React, { Component } from "react";
export default class Board extends React.Component {
    let table = document.createElement("table");
    table.setAttribute("id", "mytable");
  myTable() {}
  render() {
    return <div>{this.myTable()}</div>;
  }
}