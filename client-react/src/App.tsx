import React from 'react'
import { Content } from './components/Content'
import { Grid } from './components/Grid'
import { TanksContainer } from './containers/TanksContainer'
import { BulletsContainer } from './containers/BulletsContainer'

function App() {
  return (
    <Content>
      <Grid />
      <TanksContainer />
      <BulletsContainer />
    </Content>
  )
}

export default App
