// function SearchItems() {
//   return (
//     <div className="container mt-5">
//       <h2>Search Items</h2>
//     </div>
//   );
// }

// export default SearchItems;
import "../App.css";

function SearchItems() {
  return (
    <div className="search-page">
      <div className="container">

        <div className="text-center mb-4">
          <h2 className="fw-bold">Search Lost & Found Items</h2>
          <p className="text-muted">
            Search and filter reported items
          </p>
        </div>

        <div className="search-box">
          <div className="row g-3">

            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Search item..."
              />
            </div>

            <div className="col-md-3">
              <select className="form-select">
                <option value="">All Categories</option>
                <option>Electronics</option>
                <option>Documents</option>
                <option>Wallet / Purse</option>
                <option>Keys</option>
                <option>Books</option>
                <option>Accessories</option>
                <option>Other</option>
              </select>
            </div>

            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="Location"
              />
            </div>

            <div className="col-md-2 d-grid">
              <button className="btn search-btn">
                Search
              </button>
            </div>

          </div>
        </div>

        <h4 className="mt-5 mb-3">Recent Items</h4>

        <div className="row g-4">

          <div className="col-md-4">
            <div className="item-card">
              <div className="item-placeholder">📱</div>
              <div className="p-3">
                <span className="badge bg-danger mb-2">Lost</span>
                <h5>Mobile Phone</h5>
                <p className="text-muted mb-1">
                  Black smartphone
                </p>
                <p className="small">📍 Library</p>
                <button className="btn btn-outline-primary w-100">
                  View Details
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="item-card">
              <div className="item-placeholder">👛</div>
              <div className="p-3">
                <span className="badge bg-success mb-2">Found</span>
                <h5>Wallet</h5>
                <p className="text-muted mb-1">
                  Brown leather wallet
                </p>
                <p className="small">📍 Block A</p>
                <button className="btn btn-outline-primary w-100">
                  View Details
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="item-card">
              <div className="item-placeholder">🔑</div>
              <div className="p-3">
                <span className="badge bg-success mb-2">Found</span>
                <h5>Keys</h5>
                <p className="text-muted mb-1">
                  Keychain with three keys
                </p>
                <p className="small">📍 Canteen</p>
                <button className="btn btn-outline-primary w-100">
                  View Details
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default SearchItems;