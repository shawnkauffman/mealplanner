import React, { Component } from "react";

class AddNewMealForm extends Component {
  render() {
    return (
      <div className="modal">
        <h1>Add a Meal</h1>
        <form>
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
