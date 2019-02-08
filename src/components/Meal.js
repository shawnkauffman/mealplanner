import React, { Component } from "react";

class Meal extends Component {
  render() {
    return (
      <li>
        <div className="meta">
          <span>Monday</span>
          <a href={this.props.url} target="_blank">
            View Recipe
          </a>
        </div>
        <h2>{this.props.name}</h2>
        <ul className="recipe-list">
          {this.props.ingredients.map(item => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </li>
    );
  }
}

export default Meal;
