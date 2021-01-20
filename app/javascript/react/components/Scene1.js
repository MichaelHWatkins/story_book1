import React from 'react' 
import {useSpring, animated} from 'react-spring'
import styled from 'styled-components'

const Text1 = styled.div`
  color: white;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  margin-top: 400px;
`

const Scene1 = () => {
  const props = useSpring({marginLeft: 100, from: {marginLeft: -1000}})
  return(
    <animated.div style={props} > 
      <Text1>
          <div>
            Loki cuts the hair of Sif (Thor’s Wife)

            Thor is angry and wants to break loki’s bones
          </div>
      </Text1>
    </animated.div>
  )
}

export default Scene1