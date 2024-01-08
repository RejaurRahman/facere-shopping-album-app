import styled from 'styled-components'

export const CardWrapper = styled.div`
  display: flex;
`;

export const BaseCard = styled(CardWrapper)`
  flex-flow: column;
`;

export const ListCard = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-american-silver);
`;
