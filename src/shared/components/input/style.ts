import styled, { css } from 'styled-components';

import Tooltip from '../tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const InputContainer = styled.div<ContainerProps>`
  background: var(--color-background);
  border-radius: 10px;
  width: 100%;
  align-items: center;
  display: flex;
  color: #666360;
  & + div {
    margin-top: 8px;
  }
  ${(props) =>
  props.isErrored &&
  css`
      border-color: #c53030;
      font-size: 12px;
    `}
  ${(props) =>
  props.isFocused &&
  css`
    border-color: var(--color-primary-light);
    -webkit-border-radius: 10px;
  `}
  input {
    flex: 1;
    border: none;
    border-color: var(--color-primary-light);
    background: transparent;
    padding: 16px;
    color: var(--color-text-base);
    &::placeholder {
      color: var(--color-text-base);
    }
  }
  svg {
    margin-right: 16px;
    ${(props) =>
  props.isFilled &&
  css`
        color: #ff9000;
      `}
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    background: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;

export const Container = styled.div`
  padding: 0.3em;
  label {
    padding-bottom: 1em;
  }
`;
