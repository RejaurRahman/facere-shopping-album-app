import styled from 'styled-components'

export const BackgroundWrapper = styled.div`
  display: flex;
  height: 100vh;
  position: absolute;
  width: 100%;
  z-index: -1;
`;

export const BackgroundLeft = styled.div`
  width: 65%;
  background-color: var(--color-interdimensional-blue);
  position: relative;
`;

export const BackgroundLeftSide = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 0;
  border-top: 40vh solid var(--color-atomic-tangerine);
  border-left: 40vh solid var(--color-transparent);
`;

export const BackgroundRight = styled.div`
  width: 35%;
`;

export const BackgroundRightTop = styled.div`
  background-color: var(--color-grape);
  height: 40%;
`;

export const BackgroundRightBottom = styled.div`
  background-color: var(--color-dingy-dungeon);
  height: 60%;
`;
