// function Profile() {
//   return (
//     <div className="container mt-5">
//       <h2>Profile Page</h2>
//     </div>
//   );
// }

// export default Profile;
import "../App.css";

function Profile() {
  return (
    <div className="profile-page">
      <div className="profile-card">

        <div className="profile-icon">
          👤
        </div>

        <h2>My Profile</h2>

        <div className="profile-info">
          <div>
            <span>Full Name</span>
            <p>Demo User</p>
          </div>

          <div>
            <span>Email</span>
            <p>user@example.com</p>
          </div>

          <div>
            <span>Role</span>
            <p>User</p>
          </div>
        </div>

        <button className="btn profile-btn w-100">
          Edit Profile
        </button>

      </div>
    </div>
  );
}

export default Profile;