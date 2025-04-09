import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Pharmaceutical Supply Chain</Link>
      </div>
      <div className="navbar-menu">
        <Link to="/" className="navbar-item">Home</Link>
        <Link to="/cart" className="navbar-item">Cart</Link>
        <Link to="/admin" className="navbar-item">Admin</Link>
      </div>
    </nav>
  );
};

export default Navbar;
