import React, { Component } from "react";
import Meal from "./Meal";

class MealList extends Component {
  render() {
    return (
      <div>
        <ul className="meal-list">
          {this.props.meals.map(meal => {
            return (
              <Meal
                name={meal.name}
                ingredients={meal.ingredients}
                recipe={meal.recipe}
                key={meal.id}
                closeModal={this.props.closeModal}
                removeMeal={this.props.removeMeal}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default MealList;
