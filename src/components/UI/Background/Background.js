import React from 'react'

import {
  BackgroundLeft,
  BackgroundLeftSide,
  BackgroundRight,
  BackgroundRightBottom,
  BackgroundRightTop,
  BackgroundWrapper
} from './Background.styles'

const Background = () => {
  return (
    <BackgroundWrapper>
      <BackgroundLeft>
        <BackgroundLeftSide />
      </BackgroundLeft>

      <BackgroundRight>
        <BackgroundRightTop />
        <BackgroundRightBottom />
      </BackgroundRight>
    </BackgroundWrapper>
  )
}

export default Background
