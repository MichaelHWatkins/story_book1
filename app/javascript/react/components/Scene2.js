import React from 'react' 
import {useSpring, animated} from 'react-spring'
import styled from 'styled-components'

const Text2 = styled.div`
  color: white;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  margin-top: 400px;
`

const Scene2 = () => {
  const props = useSpring({ marginLeft: 100, from: { marginLeft: -1000 } })
  return (
    <animated.div style={props}>
      <Text2>
        <div className="dialogue-2">
          Loki then promises to get a new head of hair for sif
          <br></br>
          *arrives to talk to the dwarf brothers**
          <br></br>
          Loki: I bet you could make three objects better than your brother (loki says to Sindri), for if not you can have my head
        </div>
      </Text2>
    </animated.div>
  )
}

export default Scene2