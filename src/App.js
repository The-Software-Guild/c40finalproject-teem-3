import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage'
import { SearchPage } from './pages/SearchPage/SearchPage'
import { AboutUs }   from './pages/AboutUs'
import { NavBar } from './components/NavBar'


function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/home' component={HomePage} />
          <Route path='/search' component={SearchPage} />
          <Route path='/aboutus' component={AboutUs} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;