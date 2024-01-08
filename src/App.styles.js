import styled from 'styled-components'

export const AppRoute = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
`;

export const AppContainer = styled.div`
  width: 85%;
  margin: 0 auto;
  background-color: var(--color-white);
  position: relative;

  @media screen and (min-width: 992px) {
    width: 75%;
  }
`;
