import styled from 'styled-components'

export const Filter = styled.div`
  position: relative;
  z-index: 0;

  @media screen and (max-width: 992px) {
    margin-top: 4px;
    left: -12px;
  }

  @media screen and (min-width: 992px) {
    left: -23px;
  }
`;

export const FilterSelect = styled.select`
  appearance: none;
  border: none;
  box-shadow: 0 5px 25px var(--color-black);
  background-color: var(--color-interdimensional-blue);
  color: var(--color-white);
  padding: 4px;
  width: calc(100% + 23px);
  text-align: center;
`;
