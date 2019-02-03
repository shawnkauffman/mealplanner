import React, { Component } from "react";

class Header extends Component {
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
              <a href="#" className="generate-btn">
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
