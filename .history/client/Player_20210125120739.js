const readline = require("readline-sync");
export default class Player {
  constructor() {
    this.name = Player1;
    this.mark = "O";
  }
  getPosistion() {
    function validateInput() {
      const answer = readline.question(
        "Please enter your next position(two numbers only)." + "\n"
      );
      return answer;
    }
    let position = validateInput();
    while (isNaN(position[0]) || isNaN(position[1])) {
      console.log(`${this.name}, please enter two numbers.`);
      position = validateInput();
    }
    return position;
  }
  render() {
    console.log("this is name", this.getPosistion());
    return null;
  }
}
