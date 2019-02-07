import React, { Component } from "react";
import { render } from "react-dom";
import AddNewMealForm from "./AddNewMealForm";

class Header extends Component {
  shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  handleGenerateMealsButton(e) {
    e.preventDefault();

    const newMeals = this.shuffle(this.props.meals);
  }

  openAddNewMealForm() {
    render(<AddNewMealForm />, document.getElementById("modal"));
  }

  render() {
    return (
      <header>
        <h1>meal planner</h1>
        <nav>
          <ul>
            <li>
              <a href="#">Meals</a>
            </li>
            <li>
              <a href="#">Create New Meal</a>
            </li>
            <li>
              <a
                href="#"
                onClick={this.openAddNewMealForm}
                className="generate-btn"
              >
                Generate Meal Plan
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
