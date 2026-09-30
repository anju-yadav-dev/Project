// function Login() {
//   return (
//     <div className="container mt-5">
//       <h2>Login Page</h2>
//     </div>
//   );
// }

// export default Login;
import { Link } from "react-router-dom";
import "../App.css";

function Login() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2 className="text-center mb-3">Login to LOSTIFY</h2>

        <p className="text-center text-muted mb-4">
          Access your lost and found dashboard
        </p>

        <form>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn auth-btn">
              Login
            </button>
          </div>
        </form>

        <p className="text-center mt-4 mb-0">
          Don't have an account?{" "}
          <Link to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;