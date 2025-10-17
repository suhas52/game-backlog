import React, { useState, useEffect } from 'react'
import Gamelist from './componenets/gamelist'
import AddNewGameModel from './componenets/newGameModal'



function App() {

  
  return (<>
    <AddNewGameModel />
    <Gamelist />
    </>
  )
}

export default App