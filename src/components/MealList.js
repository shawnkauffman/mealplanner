import React, { Component } from "react";
import Meal from "./Meal";

class MealList extends Component {
  render() {
    return (
      <ul className="meal-list">
        {this.props.meals.slice(0, 5).map(meal => {
          return (
            <Meal
              name={meal.name}
              ingredients={meal.ingredients}
              url={meal.url}
              key={meal.id}
            />
          );
        })}
      </ul>
    );
  }
}

export default MealList;
