import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Drinks from "./components/drinks";
import DrinkForm from "./components/drinkForm";

import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="bodyImg">
        <style jsx>{`
          .bodyImg {
            background-position: center;
            background-size: 100%;
            height: 680px;

            background-image: url(https://www.millercoors.com/sites/millercoors/files/compelling-story/Beer_Bottles_2500x1250px.jpg);
          }
        `}</style>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/drinks/:id" component={DrinkForm} />
            <Route path="/drinks" component={Drinks} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/drinks" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
