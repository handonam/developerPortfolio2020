import React from 'react';

/**
 * Pages
 * They are still 'components', but primarly the top-most component in such a way
 * that we normies think of as "pages"
 */
import Home from './pages/Home/index.jsx';
import Contact from './pages/Contact/index.jsx';

/**
 * Components
 */
import MenuSystem from './components/Menu';

/**
 * Hooks
 */
import useWindowSize from './shared/hooks/windowSize.jsx';

/**
 * Contexts
 */
import WindowSizeContext from './shared/context/windowSize.jsx';
 
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';


function App() {
  const windowSize = useWindowSize();
  
  return (
    <WindowSizeContext.Provider value={{windowSize}}>
    <Router>
      <MenuSystem />
      <Switch>
        <Route path="/contact" component={Contact} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
    </WindowSizeContext.Provider>
  );
}

export default App;
