import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-8 py-4 bg-cyan-900'>
      <h2 className='text-xl font-bold'>Rachit</h2>
      <div className='flex gap-8'>
        <Link className='text-xl font-bold' to='/'>Home</Link>
        <Link className='text-xl font-bold' to="/about">About</Link>
        <Link className='text-xl font-bold' to="/product">Product</Link>
        <Link className='text-xl font-semibold' to='/courses'>Courses</Link>
      </div>
    </div>
  )
}

export default Navbar