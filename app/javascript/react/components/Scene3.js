import React from 'react'
import {useSpring, animated} from 'react-spring'
import styled from 'styled-components'

const Text3 = styled.div`
  color: white;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
`

const Scene3 = () => {
  const props = useSpring({marginTop: 400, from: ({marginTop: 800})})
  return(
    <div clasName="dialogue-3">
      <animated.div style={props}>
        <Text3>
          The first work begins with Sindri putting a pig's skin in the forge and telling Brokkr to work the bellows nonstop until the work is complete.

          A fly then comes and bites Brokkr on the arm. Nevertheless, Brokkr continues to pump the bellows as ordered. When Sindri returns and pulls their creation from the fire, it is revealed to be a boar with hair of gold.

          Next, Sindri puts gold in the forge and gives Brokkr the same order. The fly comes back and bites Brokkr's neck, twice as hard as before.
        </Text3>
      </animated.div>
    </div>
  )
}

export default Scene3