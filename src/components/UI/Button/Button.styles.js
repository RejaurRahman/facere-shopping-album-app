import styled from 'styled-components'

export const ButtonWrapper = styled.button`
  appearance: none;
  border: none;
  cursor: pointer;

  svg {
    height: 32px;
    width: 32px;

    path,
    g,
    polygon,
    rect {
      fill: var(--color-white);
    }
  }
`;

export const ButtonItemDelete = styled(ButtonWrapper)`
  padding-top: 45px;
  padding-bottom: 45px;
  background-color: var(--color-black-coffee);

  @media screen and (max-width: 569px) {
    width: 60px;
  }

  @media screen and (min-width: 569px) {
    width: 75px;
  }
`;

export const ButtonItemEdit = styled(ButtonWrapper)`
  padding-top: 45px;
  padding-bottom: 45px;
  background-color: var(--color-international-orange);

  @media screen and (max-width: 569px) {
    width: 60px;
  }

  @media screen and (min-width: 569px) {
    width: 75px;
  }
`;

export const ButtonAdd = styled(ButtonWrapper)`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  margin: 0;
  background-color: var(--color-interdimensional-blue);
`;

export const ButtonCancel = styled(ButtonWrapper)`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: var(--color-marigold);

  @media screen and (max-width: 992px) {
    margin: 4px 4px 0 4px;
  }

  @media screen and (min-width: 992px) {
    margin: 0 4px 0 4px;
  }
`;

export const ButtonSubmit = styled(ButtonWrapper)`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: var(--color-dark-pastel-green);

  @media screen and (min-width: 992px) {
    margin: 0 4px 0 4px;
  }

  @media screen and (max-width: 992px) {
    margin: 4px 4px 0 4px;
  }
`;

export const ButtonUpdate = styled(ButtonWrapper)`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-dark-pastel-green);
`;

export const ButtonExit = styled(ButtonWrapper)`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-alloy-orange);
`;
