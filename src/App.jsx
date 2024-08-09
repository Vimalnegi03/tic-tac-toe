import { useState } from 'react'

import Card from './component/Card/Card'
import './App.css'
import Grid from './component/Grid/Grid'
import isWinner from './helpers/checkWinner'
function App() {
  

  return (
   <>
    <Grid numberOfCards={9}/>
   </>
  )
}

export default App
