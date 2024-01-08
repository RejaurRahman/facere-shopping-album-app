import styled from 'styled-components'

export const List = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-american-silver);
`;

export const ItemLeft = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;

  @media screen and (max-width: 569px) {
    padding: 0 8px;
    width: calc(100% - 120px);
  }

  @media screen and (min-width: 569px) {
    padding: 0 24px;
    width: calc(100% - 150px);
  }
`;

export const ItemRight = styled.div`
  display: flex;

  @media screen and (max-width: 569px) {
    width: 120px;
  }

  @media screen and (min-width: 569px) {
    width: 150px;
  }
`;

export const Category = styled.span`
  font-family: 'Source Pro Italic', sans-serif;
  color: var(--color-american-silver);
  font-size: 16px;
  line-height: 24px;
`;

export const Name = styled.p`
  font-family: 'Source Pro Regular', sans-serif;
  margin: 0;
  word-break: break-word;
  color: var(--color-interdimensional-blue);

  @media screen and (max-width: 569px) {
    font-size: 20px;
    line-height: 28px;
  }

  @media screen and (min-width: 569px) {
    font-size: 24px;
    line-height: 32px;
  }
`;

export const ItemComplete = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  background-color: var(--color-medium-spring-green);
  position: relative;

  @media screen and (max-width: 569px) {
    left: calc(0px - 8px);
    width: calc(100% + 16px);
  }

  @media screen and (min-width: 569px) {
    left: calc(0px - 24px);
    width: calc(100% + 48px);
  }

  ${Name} {
    color: var(--color-black-leather-jacket);

    @media screen and (max-width: 569px) {
      padding: 0 8px;
    }

    @media screen and (min-width: 569px) {
      padding: 0 24px;
    }
  }

  ${Category} {
    color: var(--color-middle-green);

    @media screen and (max-width: 569px) {
      padding: 0 8px;
    }

    @media screen and (min-width: 569px) {
      padding: 0 24px;
    }
  }
`;
