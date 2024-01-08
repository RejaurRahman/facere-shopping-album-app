import styled from 'styled-components'

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const ModalBox = styled.div`
  position: relative;
  z-index: 2;
  background-color: var(--color-white);
  padding: 16px 0 0 0;
  width: 100%;
  max-width: 250px;
`;

export const ModalBoxTop = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ModalOverlay = styled.div`
  background-color: var(--color-black);
  opacity: 0.75;
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 1;
`;

export const ModalClose = styled.span`
  display: inline-block;
  cursor: pointer;
  padding: 0 16px;

  svg {
    height: 24px;
    width: 24px;

    g {
      fill: var(--color-interdimensional-blue);
    }
  }
`;

export const ModalFooter = styled.div`
  padding-top: 16px;
  flex-wrap: wrap;
  justify-content: center;
  display: flex;
  width: 100%;
`;

export const ModalFooterContainer = styled.div`
  display: flex;
  width: 100%;
`;
