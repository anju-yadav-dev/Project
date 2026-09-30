
import { NavLink, Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <header className="navbar-wrapper">
      <nav className="navbar-container">

        <Link to="/" className="brand">
          <div className="brand-icon">L</div>
          <div>
            <h2>LOSTIFY</h2>
            <span>Campus Lost & Found</span>
          </div>
        </Link>

        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/report-lost">Report Lost</NavLink>
          <NavLink to="/report-found">Report Found</NavLink>
          <NavLink to="/search">Search Items</NavLink>
          <NavLink to="/matches">Matches</NavLink>
        </div>

        <div className="nav-actions">
          <Link to="/login" className="login-link">
            Login
          </Link>

          <Link to="/register" className="register-btn">
            Get Started
          </Link>
        </div>

      </nav>
    </header>
  );
};

export default Navbar;