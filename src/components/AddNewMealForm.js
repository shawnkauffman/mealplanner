import React, { Component } from "react";
import ReactDOM from "react-dom";

class AddNewMealForm extends Component {
  constructor() {
    super();
    this.state = {
      newMealName: "",
      newMealUrl: "",
      newMealIngredients: ""
    };
    this.handleNewMealName = this.handleNewMealName.bind(this);
    this.handleNewMealUrl = this.handleNewMealUrl.bind(this);
    this.handleNewMealIngredients = this.handleNewMealIngredients.bind(this);
  }

  closeAddNewMealForm() {
    const modal = document.getElementById("modal");
    ReactDOM.unmountComponentAtNode(modal);
    modal.classList.remove("active");
  }

  handleNewMealName(event) {
    this.setState({
      newMealName: event.target.value
    });
  }

  handleNewMealUrl(event) {
    this.setState({
      newMealUrl: event.target.value
    });
  }

  handleNewMealIngredients(event) {
    this.setState({
      newMealIngredients: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="modal--inner">
        <h1>Add a Meal</h1>
        <button
          type="button"
          className="modal--close-button"
          onClick={this.closeAddNewMealForm}
        >
          &times;
        </button>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            onChange={this.handleNewMealName}
            value={this.state.newMealName}
          />
          <input
            type="text"
            onChange={this.handleNewMealUrl}
            placeholder="Url"
            value={this.state.newMealUrl}
          />
          <textarea
            placeholder="Ingredients"
            onChange={this.handleNewMealIngredients}
            value={this.state.newMealIngredients}
          />
          <button type="submit">Add Meal</button>
        </form>
      </div>
    );
  }
}

export default AddNewMealForm;
