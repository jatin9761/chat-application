import React from 'react'
import Left from './home/left/left'
import Right from './home/Right/Right'
import Logout from './home/Left/logout'

function App() {
  return (
    <>
      
      <div className="flex h-screen">
        <Logout></Logout>
        <Left>  </Left>
        <Right> </Right>
      </div>

      </>
  )
}

export default App
