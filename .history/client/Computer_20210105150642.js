import React, { Component } from "react";
import { win } from "./Board";
export default class Computer extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      mark = 'AI'
    }
  }
  evaluateWin(){
    let winner = win()
    if(winner === )
  }
}