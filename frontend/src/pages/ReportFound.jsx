// function ReportFound() {
//   return (
//     <div className="container mt-5">
//       <h2>Report Found Item</h2>
//     </div>
//   );
// }

// export default ReportFound;
import "../App.css";

function ReportFound() {
  return (
    <div className="report-page">
      <div className="report-card">

        <h2 className="text-center">Report Found Item</h2>
        <p className="text-center text-muted mb-4">
          Provide details about the item you found
        </p>

        <form>

          <div className="mb-3">
            <label className="form-label">Item Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Black Wallet"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Category</label>
            <select className="form-select">
              <option value="">Select category</option>
              <option>Electronics</option>
              <option>Documents</option>
              <option>Wallet / Purse</option>
              <option>Keys</option>
              <option>Books</option>
              <option>Accessories</option>
              <option>Other</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Color</label>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Black"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              rows="3"
              placeholder="Describe the item you found"
            ></textarea>
          </div>

          <div className="mb-3">
            <label className="form-label">Location Found</label>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Library, Block A"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Date Found</label>
            <input
              type="date"
              className="form-control"
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Upload Item Image</label>
            <input
              type="file"
              className="form-control"
              accept="image/*"
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn report-btn">
              Submit Found Item Report
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default ReportFound;