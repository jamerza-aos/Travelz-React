import Destinations from './components/Destinations'
import Home from './components/Home'
import About from './components/About'
import Partner from './components/Partner'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Header from './components/Header'
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
      <Header />
      <Switch>
        <Route path="/Home" exact>
          <Home />
        </Route>
        <Route path="/Destinations" >
          <Destinations />
        </Route>

        <Route path="/about" component={About}  />

        <Route path="/partner" component={Partner}  />
      </Switch>
    <Footer />
    </ Router>
  );
}

export default App;
