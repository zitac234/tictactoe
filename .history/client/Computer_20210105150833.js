import React, { Component } from "react";
import { win } from "./Board";
export default class Computer extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      Computermark = 'x'
      Playermark = ''
    }
  }
  evaluateWin(){
    let winner = win(this.state.mark)
    if(winner === this.)
  }
}