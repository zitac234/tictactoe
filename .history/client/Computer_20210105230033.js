import React, { Component } from "react";
import Board from "./Board";

export default class Computer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Computermark: this.props.ComputerMark,
      Playermark: this.props.Playermark,
      grid: this.props.grid,
    };
  }
  componentDidMount() {
    // console.log("this isi grid from Computer", this.props.win);
    // console.log("this is evalutewin", this.evaluateWin());
    console.log("emptycell", this.props.emptyCell());
  }

  evaluateWin() {
    let ComputerWins = this.props.win(this.state.Computermark);
    let PlayerWins = this.props.win(this.state.Playermark);
    return ComputerWins ? 10 : PlayerWins ? -10 : 0;
  }

  minimax(grid, depth, isMax) {
    let score = this.evaluateWin();
    // console.log("this is score ", score);

    if (score === 10) return score;
    if (score === -10) return score;

    if (!this.props.emptyCell()) return 0;
    if (isMax) {
      let best = -1000;
      for (let i = 0; i < 3; i++) {
        for (let n = 0; n < 3; n++) {
          if (this.props.emptyCell([i, n])) {
            let cell = grid.rows[i].cells[n];
            cell.innerHTML = this.state.ComputerMark;
            best = Math.max(best, this.minimax(grid, depth + 1, !isMax));
            cell.innerHTML = "";
          }
        }
      }
      // console.log("IF Mini", best);
      return best;
    } else {
      let best = 1000;
      for (let i = 0; i < 3; i++) {
        for (let n = 0; n < 3; n++) {
          if (this.props.emptyCell([i, n])) {
            let cell = grid.rows[i].cells[n];
            cell.innerHTML = this.state.P;
            best = Math.min(best, this.minimax(grid, depth + 1, !isMax));
            cell.innerHTML = "";
          }
        }
      }
      // console.log("tELSE Mini", best);
      return best;
    }
  }
  findBestMove() {
    let bestMove = 1000;
    let moveIndex = 1;
    for (let i = 0; i < 3; i++) {
      for (let n = 0; n < 3; n++) {
        if (this.props.emptyCell([i, n])) {
          let cell = this.state.grid.rows[i].cells[n];
          cell.innerHTML = this.state.Computermark;
          let moveEval = this.minimax(this.state.grid, 0, true);
          cell.innerHTML = "";

          if (moveEval < bestMove) {
            moveIndex = [i, n];
            bestMove = moveEval;
          }
        }
      }
    }
    console.log("this isbestMove", bestMove);
    console.log("this is moveIndex", moveIndex);
    return moveIndex;
  }
  render() {
    console.log("this is grid", this.state.grid);
    console.log("this findbest move", this.findBestMove());
    return null;
  }
}
