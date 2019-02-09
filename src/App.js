import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MealList from "./components/MealList";
import DisplayAllMeals from "./components/DisplayAllMeals";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meals: []
    };
    this.generateNewMealPlan = this.generateNewMealPlan.bind(this);
  }

  componentDidMount() {
    this.setState({
      meals: [
        {
          id: 1,
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
          id: 2,
          name: "Pesto Pasta",
          url: "http://www.apple.com",
          ingredients: ["Pasta", "Pesto", "Mozzarella", "Sun dried tomatoes"]
        },
        {
          id: 3,
          name: "Pizza",
          url: "http://www.apple.com",
          ingredients: ["Pasta", "Pesto", "Mozzarella", "Sun dried tomatoes"]
        },
        {
          id: 4,
          name: "Sweet Potato Tacos",
          url: "http://www.apple.com",
          ingredients: ["Pasta", "Pesto", "Mozzarella", "Sun dried tomatoes"]
        },
        {
          id: 5,
          name: "Tofu and Rice",
          url: "http://www.apple.com",
          ingredients: ["Pasta", "Pesto", "Mozzarella", "Sun dried tomatoes"]
        },
        {
          id: 6,
          name: "Enchiladas",
          url: "http://www.apple.com",
          ingredients: ["Pasta", "Pesto", "Mozzarella", "Sun dried tomatoes"]
        }
      ]
    });
  }

  shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  generateNewMealPlan() {
    const newMeals = this.shuffle(this.state.meals);
    this.setState({ meals: newMeals });
  }

  render() {
    return (
      <main>
        <div id="modal" className="modal" />
        <Header
          meals={this.state.meals}
          generateNewMealPlan={this.generateNewMealPlan}
        />
        <Router>
          <MealList path="/" meals={this.state.meals} />
          <DisplayAllMeals path="/meals/" meals={this.state.meals} />
        </Router>
        <Footer />
      </main>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
