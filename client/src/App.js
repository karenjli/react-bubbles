import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";
import BubblePage from "./components/BubblePage";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [colorList, setColorList] = useState([]);
  return (
    <Router>
      <div className="App">
        <Route exact path="/" render={props => <Login {...props} />} />
        <Switch>
          <PrivateRoute exact path="/bubble-page" component={BubblePage} />} />
          <Route
            path="/bubble-page/:id"
            render={props => <BubblePage {...props} colorList={colorList} />}
          />
          <Route
            path="/login"
            render={props => <Login {...props} colorList={colorList} />}
          />
        </Switch>
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
      </div>
    </Router>
  );
}

export default App;
