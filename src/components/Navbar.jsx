import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <NavLink to="/" className="nav-link" end>Dashboard</NavLink>
        <NavLink to="/transactions" className="nav-link">Transactions</NavLink>
        <NavLink to="/add" className="nav-link">Add Transaction</NavLink>
      </div>
    </nav>
  )
}

export default Navbar