import React, { Component } from "react";

class Meal extends Component {
  render() {
    return (
      <li>
        <h2>{this.props.name}</h2>
        <ul className="ingredient-list">
          {this.props.ingredients.map(item => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
        <a href={this.props.url} target="_blank" className="view-recipe">
          View Recipe
        </a>
      </li>
    );
  }
}

export default Meal;
