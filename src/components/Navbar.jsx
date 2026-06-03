import { NavLink } from 'react-router-dom'
import Logo from './Logo'

// Main navigation bar used across all pages
export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-inner">
        <Logo />
        <nav className="nav-links" aria-label="Main navigation">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/references">References</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  )
}
