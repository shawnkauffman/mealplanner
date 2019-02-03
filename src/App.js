import React, { Component } from "react";
import { render } from "react-dom";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MealList from "./components/MealList";

class App extends Component {
  render() {
    return (
      <main>
        <Header />
        <MealList />
        <Footer />
      </main>
    );
  }
}

render(<App />, document.getElementById("root"));
