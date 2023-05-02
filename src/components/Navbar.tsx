import React from 'react';
import { Link } from 'react-router-dom';


export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
        <Link to='/'>Home</Link>
        <Link to='contests'>Contest</Link>
    </nav>
  )
}
