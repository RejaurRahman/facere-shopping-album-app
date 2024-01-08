import styled from 'styled-components'

export const Counter = styled.div`
  position: absolute;
  bottom: 0;
  background-color: var(--color-white);
  border-top: 1px solid var(--color-interdimensional-blue);
  padding: 8px 12px;
  width: calc(100% - 24px);
  display: flex;
  justify-content: flex-end;

  @media screen and (min-width: 992px) {
    padding: 8px 24px;
    width: calc(100% - 48px);
  }
`;

export const CounterRight = styled.div`
  display: flex;
  align-items: center;
`;

export const CounterDivider = styled.span`
  font-family: 'Source Pro Regular', sans-serif;
  font-size: 22px;
  line-height: 22px;
  margin: 0 8px;
  color: var(--color-interdimensional-blue);
  cursor: default;
`;

export const CounterText = styled.span`
  font-family: 'Source Pro Regular', sans-serif;
  font-size: 12px;
  line-height: 12px;
  color: var(--color-interdimensional-blue);
  text-transform: capitalize;
  margin-left: 8px;
`;

export const CounterAmount = styled.span`
  font-family: 'Source Pro Bold', sans-serif;
  font-size: 12px;
  line-height: 12px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: default;
`;

export const CurrentAmount = styled(CounterAmount)`
  color: var(--color-white);
  background-color: var(--color-international-orange);
  padding: 5px;
`;

export const Completed = styled(CounterAmount)`
  background-color: var(--color-medium-spring-green);
  color: var(--color-black-leather-jacket);
  padding: 5px;
`;

export const CounterBase = styled(CounterAmount)`
  background-color: var(--color-interdimensional-blue);
  color: var(--color-white);
  padding: 5px;
`;
