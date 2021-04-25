import './App.css';
import { Route, Switch } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, Fragment } from 'react';
import { Home } from './pages/Home/Home';

import ContactState from './Context/Contact/ContactState';
import AuthState from './Context/Auth/AuthState';
import { Register } from './pages/Register/Register';
import { Login } from './pages/Login/Login';
import setAuthToken from './utils/setAuthToken';
import { PrivateRoute } from './pages/Routing/PrivateRoute';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <Fragment>
      <AuthState>
        <ContactState>
          <Switch>
            <PrivateRoute exact path='/' component={Home} />
            <Route exact path='/register'>
              <Register />
            </Route>
            <Route exact path='/login'>
              <Login />
            </Route>
          </Switch>
        </ContactState>
      </AuthState>
    </Fragment>
  );
}

export default App;
