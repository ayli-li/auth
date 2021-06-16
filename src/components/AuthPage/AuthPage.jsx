import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getToken } from '../../store/auth/action';

import { AuthPageStyled, AuthenticateFormStyled, AuthFormLabel } from './AuthPageStyled';
import { Btn, FormInput, ErrorDiv } from '../../AppStyled.js';

import { useHistory } from 'react-router-dom';

export const AuthPage = () => {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [loginVisited, setLoginVisited] = useState(false);
  const [passwordVisited, setPasswordVisited] = useState(false);
  const [loginError, setLoginError] = useState('Login can\'t be empty');
  const [passwordError, setPasswordError] = useState('Password can\'t be empty');
  const [isFormValid, setIsFormValid] = useState(false);
  
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect( () => {
    (loginError || passwordError) ? setIsFormValid(false) : setIsFormValid(true);

  }, [loginError, passwordError]);

  const loginHandler = (e) => {
    setLogin(e.target.value);
    const re = /^[\w.@+-]+$/;
    if (!re.test(String(e.target.value).toLowerCase()) || e.target.value.length > 150) {
      setLoginError('Incorrect login');
    } else {
      setLoginError('');
    }
  }

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    !e.target.value ? setPasswordError('Password can\'t be empty') : setPasswordError('');
  }

  const blurHandler = (e) => {
    if (e.target.name === 'login') {
      setLoginVisited(true);
    }

    if (e.target.name === 'password') {
      setPasswordVisited(true);
    }
  }

  const signIn = (e) => {
    e.preventDefault();

    if (isFormValid) {
      dispatch(getToken(login, password));
      history.push('/users');
    }
  }

  return (
    <AuthPageStyled>
      <AuthenticateFormStyled>        
        <AuthFormLabel htmlFor='login_input'>Login</AuthFormLabel>

        {(loginVisited && loginError) && <ErrorDiv login style={{color:'red'}} >{loginError}</ErrorDiv>}

        <FormInput onChange={(e) => loginHandler(e)} value={login} onBlur={(e) => blurHandler(e)} name='login' type='text' placeholder='Login' id='login_input' />

        <AuthFormLabel htmlFor='password_input'>Password</AuthFormLabel>

        {(passwordVisited && passwordError) && <ErrorDiv style={{color:'red'}} >{passwordError}</ErrorDiv>}

        <FormInput password onChange={(e) => passwordHandler(e)} value={password} onBlur={(e) => blurHandler(e)} name='password' type='password' placeholder='Password' id='password_input' />

        <Btn signIn onClick={signIn} disabled={!isFormValid} type='submit'>Log In</Btn>
      </AuthenticateFormStyled>
    </AuthPageStyled>
  );
}