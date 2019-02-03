import React, { Component } from "react";

class Meal extends Component {
  render() {
    return (
      <li>
        <div className="meta">
          Monday <a href={this.props.url}>View Recipe</a>
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
