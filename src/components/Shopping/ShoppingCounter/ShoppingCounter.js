import React from 'react'

import {
  Completed,
  Counter,
  CounterBase,
  CounterDivider,
  CounterRight,
  CounterText,
  CurrentAmount
} from './ShoppingCounter.styles'

const ShoppingCounter = (props) => {
  const completedItems = props.items.filter((item) => item.isCompleted).length

  return (
    props.items.length > 0 && (
      <>
        <Counter>
          <CounterRight>
            <>
              {completedItems === props.items.length ? (
                <Completed>
                  {completedItems}
                </Completed>
              ) : (
                <CurrentAmount>
                  {completedItems}
                </CurrentAmount>
              )}
            </>
            <CounterDivider>
              /
            </CounterDivider>
            <CounterBase>
              {props.items.length}
            </CounterBase>
            <CounterText>
              completed
            </CounterText>
          </CounterRight>
        </Counter>
      </>
    )
  )
}

export default ShoppingCounter
