import React, { Component } from "react";
import Meal from "./Meal";

class MealList extends Component {
  render() {
    return (
      <ul className="planner">
        {this.props.meals.slice(0, 5).map(recipe => {
          return (
            <Meal
              name={recipe.name}
              ingredients={recipe.ingredients}
              url={recipe.url}
              key={recipe.id}
            />
          );
        })}
      </ul>
    );
  }
}

export default MealList;
