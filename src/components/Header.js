import React, { Component } from "react";

class Header extends Component {
  handleGenerateMealsButton(e) {
    e.preventDefault();
    if (this.props.meals.length > 1) {
      alert("Are you sure you want to generate a new meal plan?");
    } else {
      alert("Generating new meal plan...");
    }
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
                onClick={this.handleGenerateMealsButton.bind(this)}
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
