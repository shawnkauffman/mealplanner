import React, { Component } from "react";
import ReactDOM from "react-dom";
import RecipeModal from "./RecipeModal";

class Meal extends Component {
  constructor() {
    super();
    this.openRecipeModal = this.openRecipeModal.bind(this);
  }

  openRecipeModal(e) {
    e.preventDefault();
    document.getElementById("modal").classList.add("active");

    ReactDOM.render(
      <RecipeModal
        name={this.props.name}
        ingredients={this.props.ingredients}
        recipe={this.props.recipe}
        closeModal={this.props.closeModal}
      />,
      document.getElementById("modal")
    );
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
        <button
          type="button"
          className="view-recipe"
          onClick={this.openRecipeModal}
        >
          View Recipe
        </button>
        <button
          type="button"
          className="remove-recipe"
          onClick={() => this.props.removeMeal(this.props.name)}
        >
          &times;
        </button>
      </li>
    );
  }
}

export default Meal;
