import React from 'react';
import { useHistory, BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage'
import { SearchPage } from './pages/SearchPage/SearchPage'
import { AboutUs }   from './pages/AboutUs'
import { NavBar } from './components/NavBar'

const App = () => {
  let history = useHistory();

  const search = (category, location) =>{ 
      const urlEncodedCategory = encodeURI(category);
      const urlEncodedLocation = encodeURI(location);
      console.log(urlEncodedCategory, urlEncodedLocation);
      let path = '/search?find_desc=' + urlEncodedCategory + '&find_loc=' + urlEncodedLocation;
      history.push(path);
      history.go(0);
  }


  return (
    <div className="App">
      <NavBar search={search}/>
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