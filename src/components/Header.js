import React, { Component } from "react";
import { render } from "react-dom";
import AddNewMealForm from "./AddNewMealForm";

class Header extends Component {
  constructor(props) {
    super(props);
    this.openAddNewMealForm = this.openAddNewMealForm.bind(this);
    this.shuffle = this.shuffle.bind(this);
  }

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

  openAddNewMealForm() {
    document.getElementById("modal").classList.add("active");
    render(<AddNewMealForm />, document.getElementById("modal"));

    const newMeals = this.shuffle(this.props.meals);
  }

  render() {
    return (
      <header>
        <a href="/" className="logo">
          meal planner
        </a>
        <nav>
          <ul>
            <li>
              <a href="/meals/">Meals</a>
            </li>
            <li>
              <a href="#">Create New Meal</a>
            </li>
            <li>
              <button
                type="button"
                onClick={this.openAddNewMealForm}
                className="generate-btn"
              >
                Generate Meal Plan
              </button>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
