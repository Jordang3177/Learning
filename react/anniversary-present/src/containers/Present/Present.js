import React, { Component } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import classes from "./Present.module.css";
import Timeline from "../Timeline/Timeline";
import Year1Timeline from "../Timeline/Year1Timeline";
import Year2Timeline from "../Timeline/Year2_Timeline";
import Year3Timeline from "../Timeline/Year3_Timeline";
import Year4Timeline from "../Timeline/Year4_Timeline";
import MainPage from "../../Components/MainPage/MainPage";
import Year1Text from "../../Assets/Text/Year1/Year1.txt";
import Year2Text from "../../Assets/Text/Year2/Year2.txt";
import Year3Text from "../../Assets/Text/Year3/Year3.txt";
import Year4Text from "../../Assets/Text/Year4/Year4.txt";

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
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route
            path="/Year1"
            render={(props) => <Year1Timeline {...props} key="Year1" text={Year1Text} />}
          />
          <Route
            path="/Year2"
            render={(props) => <Year2Timeline {...props} key="Year2" text={Year2Text} />}
          />
          <Route
            path="/Year3"
            render={(props) => <Year3Timeline {...props} key="Year3" text={Year3Text} />}
          />
          <Route
            path="/Year4"
            render={(props) => <Year4Timeline {...props} key="Year4" text={Year4Text} />}
          />
        </Switch>
      </div>
    );
  }
}

export default Present;
