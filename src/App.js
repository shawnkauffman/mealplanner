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
              name: "Vegetable Lasagna",
              recipe: "https://wendypolisi.com/veggie-lasagna/",
              ingredients: [
                "1 pound zucchini trimmed and sliced thin lengthwise",
                "9 ounces fresh spinach chopped",
                "24 ounces ricotta cheese",
                "3 ounces parmesan",
                "1 egg beaten",
                "2 teaspoons minced garlic",
                "1 / 4 cup fresh basil",
                "1 / 4 cup fresh parsley",
                "1 / 2 teaspoon crushed red pepper",
                "24 ounces marinara",
                "12 ounces part - skim mozzarella",
                "12 ounces lasagna noodles cooked according to package directions"
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
              name: "Lemon Garlic Butter Shrimp with Asparagus",
              recipe:
                "https://www.withpeanutbutterontop.com/lemon-garlic-butter-shrimp-with-asparagus/",
              ingredients: [
                "1.5 lbs medium raw shrimp(peeled and deveined",
                "2 tbsp butter",
                "1 tbsp minced garlic",
                "1 tsp italian seasoning",
                "1 / 4 tsp onion powder",
                "1 / 4 tsp paprika",
                "1 tbsp butter",
                "1 tbsp olive oil",
                "1 lb asparagus"
              ]
            },
            {
              id: 4,
              name: "Indian Butter Chicken",
              recipe:
                "https://www.savorytooth.com/butter-chicken/?utm_source=pinterest&utm_medium=social&utm_campaign=2",
              ingredients: [
                "1 1/2 pounds boneless skinless chicken breasts (about 3)",
                "7 ounces plain 2 % fat greek yogurt",
                "1 tablespoon lemon juice",
                "2 teaspoons garam masala",
                "15 ounces canned tomato sauce or puree",
                "2 cups heavy whipping cream",
                "5 cloves garlic minced",
                "4 tablespoons salted butter",
                "2 teaspoons garam masala",
                "1 teaspoon paprika",
                "1 / 8 teaspoon cayenne",
                "white rice"
              ]
            },
            {
              id: 5,
              name: "Tofu, Rice & Broccoli",
              recipe: "",
              ingredients: ["Tofu", "Brown Rice", "Soy Sauce", "broccoli"]
            },
            {
              id: 6,
              name: "Black Bean & Sweet Potato Tacos",
              recipe:
                "https://www.evolvingtable.com/black-bean-sweet-potato-tacos-vegetarian/",
              ingredients: [
                "4 cups sweet potatoes peeled, cut into 1/2-inch cubes",
                "2 - 3 tbsp olive oil",
                "1 small sweet onion finely diced",
                "2 cloves garlic crushed",
                "1/2 tsp salt",
                "1/4 tsp pepper",
                "1 cup refried black beans",
                "8 corn tortillas",
                "1/2 cup cheese"
              ]
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
