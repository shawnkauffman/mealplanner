import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header>
        <a href="/" className="logo">
          meal planner
        </a>
        <nav>
          <ul>
            <li>
              <button type="button" onClick={this.props.openAddMealForm}>
                Add A Meal
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={this.props.generateNewMealPlan}
                className="generate-btn"
              >
                Generate
              </button>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
