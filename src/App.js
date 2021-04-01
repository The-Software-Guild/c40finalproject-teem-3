import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage'
import { NavBar } from './components/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/home' component={HomePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
