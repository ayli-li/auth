import styled from 'styled-components';

export const Btn = styled.button`
  width: 90px;
  background-color: #26EE6C;
  padding: 5px;
  border: 1px solid #ACB898;
  border-radius: 3px;
  transition: 0.5s;
  cursor: pointer;  
  color: white;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  &:hover {        
    background-color: #1BF1E8;
  }

  &:disabled {
    cursor: not-allowed;
  }

  background-color: ${props => props.logout ? '#FF4040' : '#26EE6C'};
  margin-left: ${props => props.logout ? 'auto' : '0'};
  margin: ${props => props.sortById || props.signIn ? '0 auto' : ''};
  
`;

export const FormInput = styled.input`
  max-width: 176px;
  width: 100%;
  margin-right: 20px;
  padding: 5px;

  margin-bottom: ${props => props.password ? '15px' : '0'};
`;

export const ErrorDiv = styled.div`
  position: absolute;
  font-size: 13px;
  top: ${props => props.login ? '25px' : '100px'};
`;