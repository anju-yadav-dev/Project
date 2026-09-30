
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ReportLost from "./pages/ReportLost";
import ReportFound from "./pages/ReportFound";
import SearchItems from "./pages/SearchItems";
import MatchResults from "./pages/MatchResults";
import Profile from "./pages/Profile";

import "./App.css";

function App() {
  return (
    <BrowserRouter>

      <div className="app">

        <Navbar />

        <div className="main-content">

          <Routes>

            <Route
              path="/"
              element={<Home />}
            />

            <Route
              path="/login"
              element={<Login />}
            />

            <Route
              path="/register"
              element={<Register />}
            />

            <Route
              path="/report-lost"
              element={<ReportLost />}
            />

            <Route
              path="/report-found"
              element={<ReportFound />}
            />

            <Route
              path="/search"
              element={<SearchItems />}
            />

            <Route
              path="/matches"
              element={<MatchResults />}
            />

            <Route
              path="/profile"
              element={<Profile />}
            />

          </Routes>

        </div>

        <Footer />

      </div>

    </BrowserRouter>
  );
}

export default App;