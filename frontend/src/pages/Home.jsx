
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {

  const categories = [
    { icon: "📱", name: "Electronics" },
    { icon: "🎒", name: "Bags" },
    { icon: "💳", name: "ID Cards" },
    { icon: "🔑", name: "Keys" },
    { icon: "📚", name: "Books" },
    { icon: "👛", name: "Wallets" },
  ];

  const recentItems = [
    {
      icon: "📱",
      status: "Lost",
      name: "Smartphone",
      place: "Central Library",
      time: "2 hours ago",
    },
    {
      icon: "👛",
      status: "Found",
      name: "Brown Wallet",
      place: "College Cafeteria",
      time: "4 hours ago",
    },
    {
      icon: "🔑",
      status: "Lost",
      name: "Bike Keys",
      place: "Parking Area",
      time: "6 hours ago",
    },
  ];

  return (
    <main>

      {/* HERO */}
      <section className="hero-section">

        <div className="hero-background-circle circle-one"></div>
        <div className="hero-background-circle circle-two"></div>

        <div className="hero-container">

          <div className="hero-content">

            <div className="hero-badge">
              <span>✦</span>
              Intelligent Campus Lost & Found
            </div>

            <h1>
              Lost something?
              <span>
                We'll help you <br />
                find it.
              </span>
            </h1>

            <p>
              A smart and secure platform that connects students who lost
              their belongings with people who found them.
            </p>

            <div className="hero-buttons">

              <Link to="/report-lost" className="primary-btn">
                <span>⌕</span>
                Report Lost Item
              </Link>

              <Link to="/report-found" className="secondary-btn">
                <span>✓</span>
                Report Found Item
              </Link>

            </div>

            <div className="trust-row">
              <div className="avatar-group">
                <div>👩</div>
                <div>👨</div>
                <div>👩‍🎓</div>
              </div>

              <p>
                <strong>Trusted by students</strong>
                <span>Quick • Secure • Simple</span>
              </p>
            </div>

          </div>


          {/* HERO VISUAL */}
          <div className="hero-visual">

            <div className="visual-background"></div>

            <div className="main-visual-card">

              <div className="visual-top">
                <div className="small-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <span className="match-badge">
                  ● Smart Matching
                </span>
              </div>

              <div className="search-illustration">
                <div className="illustration-circle">
                  <span className="bag-emoji">🎒</span>
                </div>

                <div className="floating-item item-one">📱</div>
                <div className="floating-item item-two">🔑</div>
                <div className="floating-item item-three">💳</div>
              </div>

              <div className="match-result">
                <div className="success-icon">✓</div>
                <div>
                  <strong>Possible Match Found</strong>
                  <p>92% match with reported item</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* QUICK SEARCH */}

      <section className="quick-search-section">

        <div className="quick-search-card">

          <div>
            <span className="search-small-title">
              Looking for something?
            </span>

            <h3>Search reported items</h3>
          </div>

          <div className="search-input-box">
            <span>⌕</span>

            <input
              type="text"
              placeholder="Search wallet, phone, ID card..."
            />

            <Link to="/search">
              Search
            </Link>
          </div>

        </div>

      </section>


      {/* STATS */}

      <section className="stats-section">

        <div className="stat">
          <div className="stat-icon">📋</div>

          <div>
            <h2>120+</h2>
            <p>Items Reported</p>
          </div>
        </div>


        <div className="stat-divider"></div>


        <div className="stat">
          <div className="stat-icon">🔎</div>

          <div>
            <h2>75+</h2>
            <p>Items Recovered</p>
          </div>
        </div>


        <div className="stat-divider"></div>


        <div className="stat">
          <div className="stat-icon">😊</div>

          <div>
            <h2>90%</h2>
            <p>Happy Users</p>
          </div>
        </div>

      </section>


      {/* CATEGORIES */}

      <section className="section categories-section">

        <div className="section-heading">
          <span>EXPLORE ITEMS</span>

          <h2>Find by Category</h2>

          <p>
            Quickly browse commonly reported lost and found items.
          </p>
        </div>


        <div className="category-grid">

          {categories.map((category, index) => (

            <Link
              to="/search"
              className="category-card"
              key={index}
            >

              <div className="category-icon">
                {category.icon}
              </div>

              <h3>{category.name}</h3>

              <span>Explore →</span>

            </Link>

          ))}

        </div>

      </section>


      {/* HOW IT WORKS */}

      <section className="process-section">

        <div className="section-heading">
          <span>SIMPLE PROCESS</span>

          <h2>How LOSTIFY Works</h2>

          <p>
            Recover your belongings in three easy steps.
          </p>
        </div>


        <div className="process-grid">


          <div className="process-card">

            <div className="process-number">01</div>

            <div className="process-icon">
              📝
            </div>

            <h3>Report Item</h3>

            <p>
              Add item details, location and an image of the
              lost or found item.
            </p>

          </div>


          <div className="process-line"></div>


          <div className="process-card">

            <div className="process-number">02</div>

            <div className="process-icon">
              ✨
            </div>

            <h3>Find Matches</h3>

            <p>
              LOSTIFY compares item information and shows possible
              matching results.
            </p>

          </div>


          <div className="process-line"></div>


          <div className="process-card">

            <div className="process-number">03</div>

            <div className="process-icon">
              ✓
            </div>

            <h3>Claim & Recover</h3>

            <p>
              Verify ownership and securely reconnect with your
              lost belongings.
            </p>

          </div>


        </div>

      </section>


      {/* RECENT ITEMS */}

      <section className="section recent-section">

        <div className="recent-heading">

          <div>
            <span className="small-heading">
              RECENT ACTIVITY
            </span>

            <h2>Recently Reported Items</h2>
          </div>


          <Link to="/search">
            View all items →
          </Link>

        </div>


        <div className="recent-grid">

          {recentItems.map((item, index) => (

            <div className="recent-card" key={index}>

              <div className="recent-image">
                {item.icon}
              </div>

              <div className="recent-content">

                <span
                  className={
                    item.status === "Lost"
                      ? "lost-label"
                      : "found-label"
                  }
                >
                  {item.status}
                </span>

                <h3>{item.name}</h3>

                <p>
                  <span>📍</span>
                  {item.place}
                </p>

                <small>
                  ◷ {item.time}
                </small>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* CTA */}

      <section className="cta-wrapper">

        <div className="cta-section">

          <div>
            <span>LOST SOMETHING?</span>

            <h2>
              Don't worry. Let's find it together.
            </h2>

            <p>
              Report your missing item and let LOSTIFY help
              reconnect you with it.
            </p>
          </div>

          <Link to="/report-lost">
            Report Lost Item →
          </Link>

        </div>

      </section>

    </main>
  );
};

export default Home;