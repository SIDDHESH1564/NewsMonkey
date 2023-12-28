import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "light",
    };
  }

  toggleMode = () => {
    if (this.state.mode === "light") {
      this.setState({ mode: "dark" });
      document.body.style.backgroundColor = "#1a2026";
      // this.showAlert("Dark mode has been enabled", "success");
    } else {
      this.setState({ mode: "light" });
      document.body.style.backgroundColor = "white";
      // this.showAlert("Light mode has been enabled", "success");
    }
  };
  render() {
    return (
      <div>
        <Navbar
          title="NewsMonkey"
          aboutText="About"
          mode={this.state.mode}
          toggleMode={this.toggleMode} 
        />
        <News/>
      </div>
    );
  }
}
