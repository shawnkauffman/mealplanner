import React, { Component } from "react";

class Recipe extends Component {
  render() {
    return (
      <div className="modal--inner">
        <h1>{this.props.name}</h1>
        <button
          type="button"
          className="modal-close-button"
          onClick={this.props.closeModal}
        >
          &times;
        </button>
        <div>
          {this.props.ingredients}
        </div>
        <div>
          {this.props.recipe}
        </div>
      </div>
    );
  }
}

export default Recipe;
