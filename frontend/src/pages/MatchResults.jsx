// function MatchResults() {
//   return (
//     <div className="container mt-5">
//       <h2>Match Results</h2>
//     </div>
//   );
// }

// export default MatchResults;
import "../App.css";

function MatchResults() {
  return (
    <div className="match-page">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="fw-bold">Possible Matches</h2>
          <p className="text-muted">
            AI suggested items that may match your report
          </p>
        </div>

        <div className="row g-4">

          <div className="col-md-4">
            <div className="match-card">
              <div className="match-image">🎒</div>

              <div className="p-4">
                <span className="match-score">
                  92% Match
                </span>

                <h4 className="mt-3">Black Backpack</h4>

                <p className="text-muted">
                  Black college backpack with two front pockets.
                </p>

                <p>📍 Library</p>
                <p>📅 8 September 2026</p>

                <button className="btn match-btn w-100">
                  View & Claim
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="match-card">
              <div className="match-image">🎒</div>

              <div className="p-4">
                <span className="match-score">
                  78% Match
                </span>

                <h4 className="mt-3">Dark Backpack</h4>

                <p className="text-muted">
                  Dark colored backpack found near Block A.
                </p>

                <p>📍 Block A</p>
                <p>📅 7 September 2026</p>

                <button className="btn match-btn w-100">
                  View & Claim
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default MatchResults;