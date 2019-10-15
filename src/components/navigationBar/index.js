import React from 'react'
import {Switch, Route, BrowserRouter as Router, Link} from "react-router-dom";
import PersonPage from "../personsPage";
import TimeTable from "../timeTable";

const NavigationBar = () => {
  return(
      <Router>
        <>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/persons'>Persons</Link>
                </li>
                <li>
                    <Link to='/timetable'>Timetable</Link>
                </li>
            </ul>

            <Switch>
                <Route exact path='/'>

                </Route>
                <Route path='/persons'>
                    <PersonPage />
                </Route>
                <Route path='/timetable'>

                </Route>
            </Switch>
        </>
      </Router>
  );
};

export default NavigationBar;