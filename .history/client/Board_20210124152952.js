import React from "react";

export default class Board extends React.Component {

  
  //check all 3 win conditions
  win(mark) {
    if (this.diagWin(mark) || this.colWin(mark) || this.rowWin(mark)) {
      return true;
    }
  }
  //change mark signaling alternating turns
  switchTurn(mark) {
    if (mark === this.state.PlayerMark) {
      return this.state.ComputerMark;
    } else {
      return this.state.PlayerMark;
    }
  }
  //each time I place a mark, i add a click event listener to the table that will trigger later
  //the trigger is:
  // change the cells innerHTML to the mark
  // check the win condition
  // if no win, switch turns
  // forceUpdate()
  placeMark() {
    let mark = this.state.PlayerMark;
    table.addEventListener("click", (event) => {
      const cellId = event.target.id;
      const cell = document.getElementById(cellId);
      if (!cell.innerHTML) {
        cell.innerHTML = mark;
        if (this.win(mark)) console.log("You Won!!!!!!!!");
        mark = this.switchTurn(mark);
        this.forceUpdate();
      }
    });
  }
  // create table, triggered everytime the page renders
  myTable() {
    for (let row = 0; row < 3; row++) {
      let tr = document.createElement("tr");
      tr.setAttribute("id", row);
      for (let col = 0; col < 3; col++) {
        let td = document.createElement("td");
        td.setAttribute("id", `[${row}, ${col}]`);
        tr.appendChild(td);
      }
      table.appendChild(tr);
    }
    document.body.appendChild(table);
  }
  render() {
    return (
      <div>
        {/* {this.myTable()} */}
        {this.state.mounted && (
          <Computer
            win={this.win}
            diagWin={this.diagWin}
            colWin={this.colWin}
            rowWin={this.rowWin}
            grid={this.state.grid}
            emptyCell={this.emptyCell}
            PlayerMark={this.state.PlayerMark}
            ComputerMark={this.state.ComputerMark}
          />
        )}
      </div>
    );
  }
}