import Destinations from './components/Destinations'
import Home from './components/Home'
import About from './components/About'
import Partner from './components/Partner'
import Navigation from './components/Navigation'
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navigation/>
      <Switch>
        <Route path="/Home" exact>
          <Home />
        </Route>
        <Route path="/Destinations" exact>
          <Destinations />
        </Route>

        <Route path="/about" component={About} exact />

        <Route path="/partner" component={Partner} exact />
      </Switch>

    </ Router>
  );
}

export default App;
