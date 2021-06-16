/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';

import { AuthPage } from './components/AuthPage/AuthPage';
import { UsersPage } from './components/UsersPage/UsersPage';
import { setToken } from './store/auth/action';

const PrivateRoute = ({ component: Component, token, ...rest }) => {
  
  return (   
    <Route
      {...rest}
      render={props => (token ? <Component {...props} /> : <Redirect to="/" />) }
    />
)};

const App = () => {  

  const history = useHistory();
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const storageToken = localStorage.getItem('auth-token');

  useEffect(() => {
    if (storageToken) {
      dispatch(setToken(storageToken));
      history.push('/users');
    }
  }, []);

  useEffect(() => {
    if (token) {
      history.push('/users');
    }
  }, [token]);


  return (
    <Switch>
      <Route exact path='/' component={AuthPage} />
      <PrivateRoute token={token} path='/users' component={UsersPage} />
    </Switch>
  )
}

export default App;
