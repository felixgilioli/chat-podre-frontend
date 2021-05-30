import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 1.5em;
  font-weight: 600;
  text-align: center;
  color: var(--color-box-base);
  font-family: 'Orbitron', sans-serif;
`;

export const Name = styled.h2`
  font-size: 1.6em;
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


export const PageLanding = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  color: var(--color-text-in-primary);
  background: var(--color-background-purple);
`;

export const FormContainer = styled.div`
  margin-top: 1.5em;
  display: flex;
  flex-direction: row;
`;

export const Button = styled.button`
  background: var(--color-secundary);
  color: #312e38;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;
  &:hover {
    background-color: var(--color-secundary-dark);
  }`;
