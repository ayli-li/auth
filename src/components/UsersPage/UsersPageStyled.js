import styled from 'styled-components';

export const UsersPageStyled = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin: 0 auto;
  padding: 10px;  
  max-width: 768px;
  width: 100%;
  box-sizing: border-box;
  color: white;

  @media (max-width: 768px) {
    max-width: 320px;
  }
`;

export const UsersPageForm = styled.form`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`;

export const UsersList = styled.ul`
  list-style: none;
  margin: 0 auto;
  max-width: 320px;
  width: 100%;
  padding: 0;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;  
`;

export const UsersItem = styled.li`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;