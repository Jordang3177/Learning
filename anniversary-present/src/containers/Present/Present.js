import React, { Component } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import classes from "./Present.module.css";
import Timeline from "../Timeline/Timeline";
import MainPage from "../../Components/MainPage/MainPage";

class Present extends Component {
  render() {
    return (
      <div>
        <header>
          <nav className={classes.NavBar}>
            <ul>
              <li>
                <NavLink to="/" exact>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/Year1" exact>
                  Year 1
                </NavLink>
              </li>
              <li>
                <NavLink to="/Year2" exact>
                  Year 2
                </NavLink>
              </li>
              <li>
                <NavLink to="/Year3" exact>
                  Year 3
                </NavLink>
              </li>
              <li>
                <NavLink to="/Year4" exact>
                  Year 4
                </NavLink>
              </li>
              <li>
                <NavLink to="/Year5" exact>
                  Year 5
                </NavLink>
              </li>
              <li>
                <NavLink to="/Year6" exact>
                  Year 6
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/Year1" exact component={Timeline} />
          <Route path="/Year2" exact component={Timeline} />
          <Route path="/Year3" exact component={Timeline} />
          <Route path="/Year4" exact component={Timeline} />
          <Route path="/Year5" exact component={Timeline} />
          <Route path="/Year6" exact component={Timeline} />
        </Switch>
      </div>
    );
  }
}

export default Present;
