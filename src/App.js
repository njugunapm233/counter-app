import React, { Component } from "react";
import Movies from "./components/movies";
import {
  Route,
  Redirect,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notfound";
import NavBar from "./components/navBar";
import MovieForm from "./components/movieForm";
import "./App.css";

class App extends Component {
  render() {
    return (
      <main className="container">
        {/* <Movies /> */}
        <NavBar />
        <Switch>
          <Route path="/movies/:id" component={MovieForm} />
          <Route path="/movies" component={Movies} />
          <Route path="/customers" component={Customers}></Route>
          <Route path="/rentals" component={Rentals}></Route>
          <Route path="/notfound" component={NotFound}></Route>
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/movies" />
        </Switch>
      </main>
    );
  }
}

export default App;
