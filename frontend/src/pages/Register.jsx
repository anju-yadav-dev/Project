// function Register() {
//   return (
//     <div className="container mt-5">
//       <h2>Register Page</h2>
//     </div>
//   );
// }

// export default Register;
import { Link } from "react-router-dom";
import "../App.css";

function Register() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2 className="text-center mb-3">Create Account</h2>

        <p className="text-center text-muted mb-4">
          Register to use LOSTIFY
        </p>

        <form>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your full name"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input
              type="tel"
              className="form-control"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Create password"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Confirm password"
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn auth-btn">
              Register
            </button>
          </div>
        </form>

        <p className="text-center mt-4 mb-0">
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;