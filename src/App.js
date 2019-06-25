import React from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Shop from './components/Shop';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Item from './components/Item';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={Item} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <h1>Home</h1>
);

export default App;
