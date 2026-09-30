
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-about">

          <div className="footer-logo">
            <div className="footer-logo-icon">
              L
            </div>

            <h2>LOSTIFY</h2>
          </div>

          <p>
            A smart campus lost and found platform designed
            to make reporting, searching and recovering
            belongings simple and secure.
          </p>

          <div className="footer-college">
            🎓 Built for a smarter campus community
          </div>

        </div>


        <div className="footer-column">

          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/search">Search Items</Link>
          <Link to="/matches">Matches</Link>
          <Link to="/profile">My Profile</Link>

        </div>


        <div className="footer-column">

          <h3>Report</h3>

          <Link to="/report-lost">
            Report Lost Item
          </Link>

          <Link to="/report-found">
            Report Found Item
          </Link>

          <Link to="/search">
            Browse Items
          </Link>

        </div>


        <div className="footer-column">

          <h3>Contact</h3>

          <p>📍 College Campus</p>

          <p>
            ✉ support@lostify.com
          </p>

          <p>
            ☎ Help & Support
          </p>

        </div>

      </div>


      <div className="footer-bottom">

        <p>
          © 2026 LOSTIFY. All rights reserved.
        </p>

        <p>
          Smart Campus Lost & Found Portal
        </p>

      </div>

    </footer>
  );
};

export default Footer