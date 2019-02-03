import React, { Component } from "react";
import Meal from "./Meal";

class MealList extends Component {
  constructor() {
    super();
    this.state = {
      recipes: []
    };
  }

  componentDidMount() {
    this.setState({
      recipes: [
        {
          name: "Corned Beef & Cabbage",
          url: "http://www.google.com",
          ingredients: [
            "corned beef",
            "cabbage",
            "vegetable broth",
            "carrots",
            "potatoes"
          ]
        },
        {
          name: "Pesto Pasta",
          url: "http://www.apple.com",
          ingredients: ["Pasta", "Pesto", "Mozzarella", "Sun dried tomatoes"]
        }
      ]
    });
  }

  render() {
    return (
      <ul className="planner">
        {this.state.recipes.map(recipe => {
          return (
            <Meal
              name={recipe.name}
              ingredients={recipe.ingredients}
              url={recipe.url}
              key={recipe.name}
            />
          );
        })}
      </ul>
    );
  }
}

export default MealList;
