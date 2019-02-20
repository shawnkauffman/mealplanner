import React, { Component } from "react";
import Meal from "./Meal";

class MealList extends Component {
  render() {
    return (
      <div>
        <ul className="weekdays">
          <li>Monday</li>
          <li>Tuesday</li>
          <li>Wednesday</li>
          <li>Thursday</li>
          <li>Friday</li>
        </ul>
        <ul className="meal-list">
          {this.props.meals.slice(0, 5).map(meal => {
            return (
              <Meal
                name={meal.name}
                ingredients={meal.ingredients}
                recipe={meal.recipe}
                key={meal.id}
                closeModal={this.props.closeModal}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default MealList;
