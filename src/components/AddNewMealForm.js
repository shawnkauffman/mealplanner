import React, { Component } from "react";
import ReactDOM from "react-dom";

class AddNewMealForm extends Component {
  closeAddNewMealForm() {
    const modal = document.getElementById("modal");
    ReactDOM.unmountComponentAtNode(modal);
    modal.classList.remove("active");
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
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="URL" />
          <input type="text" placeholder="Ingredients" />
          <button type="submit">Add Meal</button>
        </form>
      </div>
    );
  }
}

export default AddNewMealForm;
