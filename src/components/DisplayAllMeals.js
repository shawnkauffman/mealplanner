import React, { Component } from "react";

class DisplayAllMeals extends Component {
  render() {
    return (
      <div>
        <h1>All Meals</h1>
        <ul className="all-meals">
          {this.props.meals.map(meal => {
            return (
              <li key={meal.id}>
                <div className="meta">
                  Monday <a href={meal.url}>View Recipe</a>
                </div>
                <h2>{meal.name}</h2>
                <ul className="recipe-list">
                  {meal.ingredients.map(item => {
                    return <li key={item}>{item}</li>;
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default DisplayAllMeals;
