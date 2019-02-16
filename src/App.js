import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MealList from "./components/MealList";
import DisplayAllMeals from "./components/DisplayAllMeals";
import AddMeal from "./components/AddMeal";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meals: []
    };
    this.addMeal = this.addMeal.bind(this);
    this.openAddMealForm = this.openAddMealForm.bind(this);
    this.generateNewMealPlan = this.generateNewMealPlan.bind(this);
  }

  componentDidMount() {
    const meals =
      typeof localStorage["meals"] !== "undefined"
        ? JSON.parse(localStorage.getItem("meals"))
        : [
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
              ingredients: [
                "Pasta",
                "Pesto",
                "Mozzarella",
                "Sun dried tomatoes"
              ]
            },
            {
              id: 3,
              name: "Tacos",
              url: "http://www.apple.com",
              ingredients: ["Tortillas", "Beef", "Pico de gallo", "Onions"]
            },
            {
              id: 4,
              name: "Pizza",
              url: "http://www.apple.com",
              ingredients: [
                "Dough",
                "Sauce",
                "Cheese",
                "Pepperoni",
                "Mushrooms"
              ]
            },
            {
              id: 5,
              name: "Tofu, Rice & Broccoli",
              url: "http://www.apple.com",
              ingredients: ["Tofu", "Brown Rice", "Soy Sauce"]
            }
          ];

    this.setState({
      meals: meals
    });
  }

  addMeal(newMeal) {
    const meals = this.state.meals;

    meals.push(newMeal);
    localStorage.setItem("meals", JSON.stringify(meals));

    this.setState({
      meals: meals
    });
  }

  openAddMealForm() {
    document.getElementById("modal").classList.add("active");
    ReactDOM.render(
      <AddMeal addMeal={this.addMeal} meals={this.state.meals} />,
      document.getElementById("modal")
    );
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
    localStorage.setItem("meals", JSON.stringify(newMeals));
    this.setState({ meals: newMeals });
  }

  render() {
    return (
      <main>
        <div id="modal" className="modal" />
        <Header
          meals={this.state.meals}
          generateNewMealPlan={this.generateNewMealPlan}
          openAddMealForm={this.openAddMealForm}
        />
        <section>
          <Router>
            <MealList path="/" meals={this.state.meals} />
            <DisplayAllMeals path="/meals/" meals={this.state.meals} />
          </Router>
        </section>
        <Footer />
      </main>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
