import React, { Component } from "react";
import ReactDOM from "react-dom";

class EditMeal extends Component {
  constructor(props) {
    super(props);

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      id: "",
      name: "",
      recipe: "",
      ingredients: ""
    };
  }

  handleInputChange(e) {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    const modal = document.getElementById("modal");

    const meal = {
      id: this.props.id,
      name: this.props.name,
      recipe: this.props.recipe,
      ingredients: this.props.ingredients
    };

    this.props.editMeal(meal);

    ReactDOM.unmountComponentAtNode(modal);
    modal.classList.remove("active");
  }

  render() {
    return (
      <div className="modal-inner">
        <h1>Edit Meal</h1>
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
          <button type="submit">Edit Meal</button>
        </form>
      </div>
    );
  }
}

export default EditMeal;
