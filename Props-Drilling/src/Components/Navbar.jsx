import React from 'react'
import Nav2 from './Nav2'
import { useContext } from 'react'
import { themeDataContext } from '../Context/ThemeContext'

const Navbar = (props) => {
//   return (
//     <div>
//         <button onClick={() =>{
//             props.setTheme('Dark');
//         }}>Change theme</button>
//     </div>
//   )

// console.log(props.children);

const data = useContext(themeDataContext)

console.log(data)

return(
    <div className='nav'>
        <h2>Rachit</h2> 
        <Nav2 theme={props.theme} />
    </div>
)
}

export default Navbar