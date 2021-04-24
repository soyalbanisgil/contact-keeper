import './App.css';
import { BrowserRouter as Route, Switch } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, Fragment } from 'react';
import { Home } from './pages/Home/Home';

import ContactState from './Context/Contact/ContactState';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });

  return (
    <Fragment>
      <ContactState>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      </ContactState>
    </Fragment>
  );
}

export default App;
