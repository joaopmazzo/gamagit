import styled from 'styled-components';

export const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: right;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 15rem;
`;

export const Input = styled.input`
  border: 1px solid #cbcbcb;
  height: 2.5rem;
  width: 300px;
  padding: 0 .5rem;
  border-radius: .5rem;

  font-size: 1rem;
  font-weight: bold;
  text-align: center;

  &:focus,
  &:active {
    outline: #cbcbcb;
    box-shadow: 5px 5px 10px rgba(0,0,0,1);
  }
`;

export const Button = styled.button`
  border: 1px solid #cbcbcb;
  background: #f3f3f3;
  border-radius: .5rem;
  color: #000;

  height: 2.5rem;
  width: 80px;
  margin-top: 1rem;

  &:focus,
  &:hover {
    box-shadow: 5px 5px 10px rgba(0,0,0,1);
  }
`;

export const ErrorMsg = styled.span`
  color: red;
  display: block;

  font-size: .8rem ;
  font-weight: 600;
  text-align: center;

  margin: .2rem 0 0 0;
`;
