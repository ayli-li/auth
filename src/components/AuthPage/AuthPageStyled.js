import styled from 'styled-components';

export const AuthPageStyled = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const AuthenticateFormStyled = styled.form`
  display: flex;
  flex-flow: column nowrap;  
  position: relative;
`;

export const AuthFormLabel = styled.label`
  margin-bottom: 18px;
  margin-top: 5px;
  text-align: center;
  color: white;
`;