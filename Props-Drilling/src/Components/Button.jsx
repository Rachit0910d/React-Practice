import React from 'react'
import { useContext } from 'react'
import { themeDataContext } from '../Context/ThemeContext'

const Button = () => {
const [theme, setTheme] = useContext(themeDataContext)
    const changeTheme= () =>{
        setTheme('dark');
    }
  return (
    <div>
        
        <button onClick={changeTheme}>Change theme</button>
    </div>
  )
}

export default Button