import React, { Component } from "react";
import { win } from "./Board";
export default class Computer extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      Computermark: 'X',
      Playermark: 'O'
    }
  }
  evaluateWin(){
    let Computerwinner = win(this.state.Computermark)
    if(winner === this.)
  }
}