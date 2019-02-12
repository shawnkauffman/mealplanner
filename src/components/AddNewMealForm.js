import React, { Component } from "react";
import ReactDOM from "react-dom";

class AddNewMealForm extends Component {
  closeAddNewMealForm() {
    const modal = document.getElementById("modal");
    ReactDOM.unmountComponentAtNode(modal);
    modal.classList.remove("active");
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
        <form onSubmit={this.props.handleSubmit}>
          <input type="text" name="name" placeholder="Name" />
          <input type="text" name="url" placeholder="Url (http://)" />
          <textarea
            name="ingredients"
            placeholder="Ingredients (separated by comma)"
          />
          <button type="submit">Add Meal</button>
        </form>
      </div>
    );
  }
}

export default AddNewMealForm;
