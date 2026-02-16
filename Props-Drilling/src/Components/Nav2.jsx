import React from 'react'
import { useContext } from 'react'
import { themeDataContext } from '../Context/ThemeContext'

const Nav2 = () => {
    const data = useContext(themeDataContext)
  return (
    <div className='nav2'>
        <h4>Home</h4>
        <h4>About</h4>
        <h4>Contact</h4>
        <h4>Service</h4>
        <h4>{theme}</h4>
        {data}
    </div>
  )
}

export default Nav2