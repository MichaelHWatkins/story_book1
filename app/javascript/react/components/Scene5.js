import React from 'react'
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components'

const Text5 = styled.div`
  color: white;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
`

const Scene5 = () => {
  const props = useSpring({ marginTop: 250, from: ({ marginTop: 800 }) })
  return (
    <div clasName="dialogue-3">
      <animated.div style={props}>
        <Text5>
          Brokkr and Loki then present the two sets of objects to a jury of three gods, Odin, Thor and Freyr. Odin receives the spear Gungnir and the ring Draupnir. Freyr receives the ship Skíðblaðnir and the golden boar. Thor receives the golden hair for Sif and also the hammer:

          Then he gave the hammer to Thor, and said that Thor might smite as hard as he desired, whatsoever might be before him, and the hammer would not fail; and if he threw it at anything, it would never miss, and never fly so far as not to return to his hand; and if he desired, he might keep it in his sark, it was so small; but indeed it was a flaw in the hammer that the fore-haft was somewhat short. This was their decision: that the hammer was best of all the precious works, and in there was the greatest defence against the Rime-Giants; and they gave sentence, that the dwarf should have his wager.[6]
          Loki argues that while his head was forfeit, his neck was not. The dwarf then stitches his lips together with a thong.

        </Text5>
      </animated.div>
    </div>
  )
}

export default Scene5