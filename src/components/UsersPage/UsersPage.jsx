import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../store/auth/action';
import { getUsersData, filterUsersByName, sortUsersById } from '../../store/users/action';

import { UsersPageStyled, UsersPageForm, UsersList, UsersItem } from './UsersPageStyled';
import { Btn, FormInput } from '../../AppStyled.js';

export const UsersPage = () => {
  
  const users = useSelector(state => state.usersData.users);
  const filteredUsers = useSelector(state => state.usersData.filteredUsers);

  const [inputValue, setInputValue] = useState('');
  const [isInputVisited, setIsInputVisited] = useState(false);

  const dispatch = useDispatch();  

  useEffect( () => {
    dispatch(getUsersData());
  });

  const logout = () => {
    dispatch(logOut());
  };

  const handleInputValue = (e) => {
    e.preventDefault();

    setInputValue(e.target.value);
  };

  const filterUsers = (e) => {
    e.preventDefault();
    setIsInputVisited(true);

    if (inputValue) {
      dispatch(filterUsersByName(inputValue));
    } else {
      return dispatch(filterUsersByName(''));
    }
  };

  const sortUsers = (e) => {
    e.preventDefault();   

    if (filteredUsers.length === 0) {
      dispatch(filterUsersByName(''));
      dispatch(sortUsersById());
    } else {
      dispatch(sortUsersById());
    }    
    
  };

  return (
    <UsersPageStyled>

      <Btn logout onClick={logout}>Logout</Btn>

      <UsersPageForm>
        <FormInput type='text' placeholder='Find name' onChange={(e) => handleInputValue(e)}/>
        <Btn onClick={(e) => filterUsers(e)}>Find user</Btn>        
      </UsersPageForm> 

      <Btn sortById onClick={(e) => sortUsers(e)}>Sort by Id</Btn>

      <UsersList>
        {(filteredUsers.length || isInputVisited) ? filteredUsers.map(user => {
          return <UsersItem key={user.id}>
            <div>{user.id}</div>
            <div>{user.username}</div>
          </UsersItem>
          }) : users.map(user => {
          return <UsersItem key={user.id}>
            <div>{user.id}</div>
            <div>{user.username}</div>
          </UsersItem>
          })
        }
      </UsersList>
           
    </UsersPageStyled>
  );
}