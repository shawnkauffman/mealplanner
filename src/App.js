import React, { Component } from "react";
import { render } from "react-dom";
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
        }
      ]
    });
  }

  render() {
    return (
      <main>
        <Header meals={this.state.meals} />
        <MealList meals={this.state.meals} />
        <Footer />
      </main>
    );
  }
}

render(<App />, document.getElementById("root"));
