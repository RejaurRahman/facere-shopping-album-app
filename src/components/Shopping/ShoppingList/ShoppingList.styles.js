import styled from 'styled-components'

export const List = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin: 0;
  height: calc(100% - 41px);
  overflow-y: auto;
`;

export const Alert = styled.ul`
  margin: 0 auto;
  padding-top: 16px;

  @media screen and (max-width: 992px) {
    max-width: calc(100% - 64px);
  }

  @media screen and (min-width: 992px) {
    max-width: calc(100% - 200px);
  }
`;

export const AlertMessage = styled.h2`
  font-family: 'Source Pro Light', sans-serif;
  margin: 0;
  font-size: 16px;
  line-height: 14px;
  color: var(--color-white);
  padding: 12px 20px;
  border-radius: 4px;
  border: 1px solid var(--color-interdimensional-blue);
  background-color: var(--color-grape);
`;
