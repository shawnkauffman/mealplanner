import React, { Component } from "react";
import Meal from "./Meal";

class DisplayAllMeals extends Component {
  render() {
    return (
      <div>
        <h1>My Meals</h1>
        <ul className="my-meals-list">
          {this.props.meals.map(meal => {
            return (
              <Meal
                name={meal.name}
                ingredients={meal.ingredients}
                recipe={meal.recipe}
                key={meal.id}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default DisplayAllMeals;
