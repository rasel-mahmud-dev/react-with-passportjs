import React from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCurrentUser } from "./actions/index";

import Header from "./components/Header/Header";
import Login from "./components/Auth/Login";
import Landing from "./components/Landing/Landing";
import Dashboard from './components/Dashboard/Dashboard'

class App extends React.Component {
  componentDidMount() {
    this.props.fetchCurrentUser()
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <span className="h-39" />
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/surveys" exact component={Dashboard} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    );
  }
}

export default connect(
  null,
  { fetchCurrentUser }
)(App);

