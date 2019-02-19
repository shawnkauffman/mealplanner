import React, { Component } from "react";

class Meal extends Component {
  constructor() {
    super();
    this.openRecipeModal = this.openRecipeModal.bind(this);
  }

  openRecipeModal(e) {
    e.preventDefault();
  }

  render() {
    return (
      <li>
        <h2>{this.props.name}</h2>
        <ul className="ingredient-list">
          {this.props.ingredients.map(item => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
        <button type="button" onClick={this.openRecipeModal}>
          View Recipe
        </button>
      </li>
    );
  }
}

export default Meal;
