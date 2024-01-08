import styled from 'styled-components'

export const Form = styled.form`
  justify-content: center;
`;

export const Input = styled.input`
  font-family: 'Source Pro Light', sans-serif;
  font-size: 16px;
  width: calc(100% - 32px);
  box-sizing: border-box;
  appearance: none;
  padding: 16px;
  margin-left: 16px;
  color: var(--color-interdimensional-blue);
  border: 2px solid var(--color-interdimensional-blue);

  &:first-child {
    margin-bottom: 16px;
    margin-top: 10px;
  }

  &::-webkit-input-placeholder {
    color: var(--color-interdimensional-blue);
  }

  &::-moz-placeholder {
    color: var(--color-interdimensional-blue);
  }

  &:-ms-input-placeholder {
    color: var(--color-interdimensional-blue);
  }

  &:-moz-placeholder {
    color: var(--color-interdimensional-blue);
  }
`;

export const ErrorMessage = styled.p`
  font-family: 'Source Pro Bold', sans-serif;
  color: var(--color-international-orange);
  font-size: 14px;
  margin: 0 0 16px 0;
  text-transform: uppercase;
`;
