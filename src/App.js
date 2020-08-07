import React from 'react';

/**
 * Pages
 * They are still 'components', but primarly the top-most component in such a way
 * that we normies think of as "pages"
 */
import Home from './pages/Home/index.jsx';
import Contact from './pages/Contact/index.jsx';

import MenuSystem from './components/Menu';


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';


function App() {
  return (
    <Router>
      <MenuSystem />
      <Switch>
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
