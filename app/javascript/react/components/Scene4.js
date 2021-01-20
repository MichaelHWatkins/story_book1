import React from 'react'
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components'

const Text4 = styled.div`
  color: white;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
`

const Scene4 = () => {
  const props = useSpring({ marginTop: 400, from: ({ marginTop: 800 }) })
  return (
    <div clasName="dialogue-3">
      <animated.div style={props}>
        <Text4>
          Brokkr, however, continues to work the bellows despite the pain. When Sindri returns they draw out the golden ring Draupnir.

          Finally, Sindri puts iron in the forge and repeats his previous order once more. The fly comes a third time and bites Brokkr on the eyelids, the bite drawing blood.
          The blood runs into Brokkr's eyes and forces him to stop working the bellows just long enough to wipe his eyes. This time, when Sindri returns, he notes that the work was almost ruined: the hammer has a short handle.
        </Text4>
      </animated.div>
    </div>
  )
}

export default Scene4