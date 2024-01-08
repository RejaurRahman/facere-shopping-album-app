import styled from 'styled-components'

export const NewExpense = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  border-bottom: 1px solid var(--color-american-silver);

  @media screen and (max-width: 992px) {
    padding: 12px;
    flex-flow: column;
  }

  @media screen and (min-width: 992px) {
    padding: 24px;
    justify-content: space-between;
  }

  &:before {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: var(--color-interdimensional-blue);
    z-index: 0;

    @media screen and (max-width: 992px) {
      content: none;
    }

    @media screen and (min-width: 992px) {
      content: '';
    }
  }
`;
