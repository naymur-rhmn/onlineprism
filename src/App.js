import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route>
            <Banner></Banner>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
