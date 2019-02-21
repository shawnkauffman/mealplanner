import React, { Component } from "react";

class Recipe extends Component {
  render() {
    return (
      <div className="modal-content">
        <h1>{this.props.name}</h1>
        <button
          type="button"
          className="modal-close-button"
          onClick={this.props.closeModal}
        >
          &times;
        </button>
        <ul className="ingredient-list">
          {this.props.ingredients.map(item => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
        <p>{this.props.recipe}</p>
      </div>
    );
  }
}

export default Recipe;
