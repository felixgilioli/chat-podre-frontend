import styled from 'styled-components';
import { Form } from '@unform/web';

export const PageLanding = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 10vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: var(--color-text-in-primary);
  background: var(--color-background-purple);
`;

export const HeaderContainer = styled.div`
  flex: 1;
  flex-direction: column;
`;

export const FormContainer = styled.section`
  flex: 3;
`;

export const CustomForm = styled(Form)`
  display: flex;
`;

export const Title = styled.h1`
  font-size: 2.5em;
  font-weight: 600;
  text-align: center;
  color: var(--color-box-base);
  font-family: 'Orbitron', sans-serif;
`;

export const Name = styled.h2`
  font-size: 2em;
  font-weight: 400;
  text-align: center;
  justify-content: flex-start;
  font-family: 'Holtwood One SC', serif;
  padding: 10px;
`;

export const Description = styled.h4`
  font-size: 1.4em;
  font-weight: 600;
  width: 500px;
  text-align: center;
  justify-content: flex-start;
  font-family: 'Orbitron', serif;

  color: var(--color-box-base);
`;

export const Button = styled.button`
  background: var(--color-secundary);
  text-decoration-color: var(--color-primary-darker);
  height: 54px;
  border-radius: 10px;
  border: 0;
  padding: 0 20px;
  width: 100%;
  margin-top: 1.5em;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--color-secundary-dark);
  }`;

