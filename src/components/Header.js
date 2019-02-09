import React, { Component } from "react";
import { render } from "react-dom";
import AddNewMealForm from "./AddNewMealForm";

class Header extends Component {
  openAddNewMealForm() {
    document.getElementById("modal").classList.add("active");
    render(<AddNewMealForm />, document.getElementById("modal"));
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
              <button type="button" onClick={this.openAddNewMealForm}>
                Create New Meal
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={this.props.generateNewMealPlan}
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
