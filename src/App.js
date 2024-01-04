import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pageSize = 8;
  apikey = process.env.REACT_APP_NEWS_API
  constructor(props) {
    super(props);
    this.state = {
      mode: "light",
    };
  }
  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

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
        <BrowserRouter>
          <Navbar
            title="NewsMonkey"
            aboutText="About"
            mode={this.state.mode}
            toggleMode={this.toggleMode}
          />
          <LoadingBar
            height={3}
            color="#f11946"
            progress={this.state.progress}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="general"
                  pageSize={this.pageSize}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="business"
                  pageSize={this.pageSize}
                  country="in"
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="entertainment"
                  pageSize={this.pageSize}
                  country="in"
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/general"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="general"
                  pageSize={this.pageSize}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="health"
                  pageSize={this.pageSize}
                  country="in"
                  category="health"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="science"
                  pageSize={this.pageSize}
                  country="in"
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="sports"
                  pageSize={this.pageSize}
                  country="in"
                  category="sports"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="technology"
                  pageSize={this.pageSize}
                  country="in"
                  category="technology"
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
