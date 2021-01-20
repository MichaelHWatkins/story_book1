import React from 'react'
import Scene1 from './Scene1'
import Scene2 from './Scene2'
import Scene3 from './Scene3'
import Scene4 from './Scene4'
import Scene5 from './Scene5'

export const App = (props) => {
  return (
  <div className="horizontal-scroll-wrapper squares">
        <div className="title"><Scene1 /></div>
        <div className="bedroom"><Scene2 /></div>
        <div className="forge"><Scene3 /></div>
        <div className="bellows"><Scene4 /></div>
        <div className="feast"><Scene5 /></div>
        <div className="tea">item 6</div>
  </div>
  )
}

export default App
