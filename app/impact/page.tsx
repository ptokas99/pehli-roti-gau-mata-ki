export default function ImpactPage() {
  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">OUR IMPACT</p>

        <h1>Every Roti Adds Up</h1>

        <p>
          Our collection network turns small daily household contributions
          into meaningful support for gaushalas.
        </p>
      </section>

      <section className="impact-page-stats">
        <div className="impact-stat-card">
          <span className="impact-stat-number">XX+</span>
          <span className="impact-stat-label">Roti Boxes Installed</span>
        </div>

        <div className="impact-stat-card">
          <span className="impact-stat-number">XX+</span>
          <span className="impact-stat-label">Societies Connected</span>
        </div>

        <div className="impact-stat-card">
          <span className="impact-stat-number">XX+</span>
          <span className="impact-stat-label">Rotis Collected</span>
        </div>

        <div className="impact-stat-card">
          <span className="impact-stat-number">XX+</span>
          <span className="impact-stat-label">Gaushalas Supported</span>
        </div>
      </section>

      <section className="impact-story-section">
        <div className="impact-story-content">
          <p className="eyebrow">OUR NETWORK</p>

          <h2>Built Around Everyday Participation</h2>

          <p>
            Our impact begins with one simple action: a household placing
            rotis in a shared collection box.
          </p>

          <p>
            These individual contributions are brought together through our
            daily collection routes and transported to associated gaushalas.
          </p>
        </div>

        <div className="impact-image-placeholder">
          Collection Network Photo
        </div>
      </section>

      <section className="impact-breakdown">
        <div className="impact-breakdown-heading">
          <p className="eyebrow">HOW IMPACT GROWS</p>

          <h2>One Box Can Connect an Entire Community</h2>
        </div>

        <div className="impact-breakdown-grid">
          <div>
            <span>01</span>
            <h3>One Society</h3>
            <p>
              A common collection point makes participation easy for
              hundreds of households.
            </p>
          </div>

          <div>
            <span>02</span>
            <h3>Daily Collection</h3>
            <p>
              Consistent e-rickshaw routes turn individual contributions
              into an organised collection network.
            </p>
          </div>

          <div>
            <span>03</span>
            <h3>Direct Delivery</h3>
            <p>
              Rotis collected through the network are transported to
              associated gaushalas.
            </p>
          </div>
        </div>
      </section>

      <section className="impact-page-cta">
        <p className="eyebrow">HELP US GROW</p>

        <h2>Bring the Network to Your Society</h2>

        <p>
          Every new collection point can connect another community to the
          initiative.
        </p>

        <a href="/request-a-box" className="primary-link-button">
          Request a Roti Box
        </a>
      </section>
    </main>
  );
}