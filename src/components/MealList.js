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
                url={meal.url}
                key={meal.id}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default MealList;
