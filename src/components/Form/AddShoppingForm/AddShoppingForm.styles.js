import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 992px) {
    justify-content: center;
  }
`;

export const Input = styled.input`
  font-family: 'Source Pro Light', sans-serif;
  font-size: 16px;
  appearance: none;
  border-radius: 0;
  padding: 2px 12px;

  @media screen and (max-width: 992px) {
    flex-basis: 100%;
  }

  @media screen and (min-width: 992px) {
    margin-right: 8px;
  }

  &::-webkit-input-placeholder {
    color: var(--color-grape);
  }

  &::-moz-placeholder {
    color: var(--color-grape);
  }

  &:-ms-input-placeholder {
    color: var(--color-grape);
  }

  &:-moz-placeholder {
    color: var(--color-grape);
  }
`;

export const InputType = styled(Input)`
  height: 32px;
  border-top: 1px solid var(--color-american-silver);
  border-left: 1px solid var(--color-american-silver);
  border-right: 1px solid var(--color-american-silver);
  border-bottom: 3px solid var(--color-grape);
  color: var(--color-grape);
`;

export const EmptyInput = styled(Input)`
  border: 3px solid var(--color-international-orange);
  color: var(--color-international-orange);
  box-sizing: border-box;
  height: 40px;

  &::-webkit-input-placeholder {
    color: var(--color-international-orange);
  }

  &::-moz-placeholder {
    color: var(--color-international-orange);
  }

  &:-ms-input-placeholder {
    color: var(--color-international-orange);
  }

  &:-moz-placeholder {
    color: var(--color-international-orange);
  }
`;
