import React from 'react'
import { useState } from 'react'
import Navbar from './Components/Navbar'
import Button from './Components/Button'

const App = () => {
  // const [theme, setTheme] = useState('light')
  // return (
  //   <div>
  //     <h1>Theme is {theme}</h1>

  //     <Navbar theme={theme} setTheme={setTheme}/>
  //   </div>
  // )

  const [theme, setTheme] = useState('light')
  return(
    <div>
      <h1>Rachit</h1>
      <Navbar theme={theme}>
        <h2>This is Navbar</h2>
        <h3>Bhot mja aaya</h3>
      </Navbar>
      <Button />
    </div>
  )
}

export default App