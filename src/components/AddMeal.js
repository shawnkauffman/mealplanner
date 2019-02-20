import React, { Component } from "react";
import ReactDOM from "react-dom";

class AddNewMealForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      name: "",
      recipe: "",
      ingredients: ""
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    const modal = document.getElementById("modal");

    const newId = Math.random();
    const newName = this.state.name;
    const newRecipe = this.state.recipe;
    const newIngredients = this.state.ingredients.split(",");

    const meal = {
      id: newId,
      name: newName,
      recipe: newRecipe,
      ingredients: newIngredients
    };

    this.props.addMeal(meal);

    ReactDOM.unmountComponentAtNode(modal);
    modal.classList.remove("active");
  }

  render() {
    return (
      <div className="modal-inner">
        <h1>Add a Meal</h1>
        <button
          type="button"
          className="modal-close-button"
          onClick={this.props.closeModal}
        >
          &times;
        </button>
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={this.handleInputChange}
            value={this.state.name}
          />
          <input
            type="text"
            name="ingredients"
            placeholder="Ingredients (separated by comma)"
            onChange={this.handleInputChange}
            value={this.state.ingredients}
          />
          <textarea
            name="recipe"
            placeholder="Recipe"
            onChange={this.handleInputChange}
            value={this.state.recipe}
          />
          <button type="submit">Add Meal</button>
        </form>
      </div>
    );
  }
}

export default AddNewMealForm;
