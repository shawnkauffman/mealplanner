import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MealList from "./components/MealList";
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
    this.closeModal = this.closeModal.bind(this);
    this.removeMeal = this.removeMeal.bind(this);
  }

  componentDidMount() {
    const meals =
      typeof localStorage["meals"] !== "undefined"
        ? JSON.parse(localStorage.getItem("meals"))
        : [
            {
              id: 1,
              name: "Corned Beef & Cabbage",
              recipe: "Step 1: Boil potatoes, Step 2: ",
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
              recipe: "",
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
              recipe: "",
              ingredients: ["Tortillas", "Beef", "Pico de gallo", "Onions"]
            },
            {
              id: 4,
              name: "Pizza",
              recipe: "",
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
              recipe: "",
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
      <AddMeal
        addMeal={this.addMeal}
        meals={this.state.meals}
        closeModal={this.closeModal}
      />,
      document.getElementById("modal")
    );
  }

  closeModal() {
    const modal = document.getElementById("modal");
    ReactDOM.unmountComponentAtNode(modal);
    modal.classList.remove("active");
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

  removeMeal(name) {
    const meals = this.state.meals.filter(meal => meal.name !== name);
    localStorage.setItem("meals", JSON.stringify(meals));
    this.setState({
      meals: meals
    });
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
            <MealList
              path="/"
              meals={this.state.meals}
              closeModal={this.closeModal}
              removeMeal={this.removeMeal}
            />
          </Router>
        </section>
        <Footer />
      </main>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
