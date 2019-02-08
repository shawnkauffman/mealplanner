import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MealList from "./components/MealList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      meals: []
    };
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

  render() {
    return (
      <main>
        <div id="modal" className="modal" />
        <Header meals={this.state.meals} />
        <MealList meals={this.state.meals} />
        <Footer />
      </main>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
