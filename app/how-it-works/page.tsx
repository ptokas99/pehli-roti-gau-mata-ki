export default function HowItWorksPage() {
  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">OUR MODEL</p>
        <h1>How Pehli Roti Gau Matta Ki Works</h1>
        <p>
          A simple community collection system that connects societies
          with gaushalas through daily roti collection.
        </p>
      </section>

      <section className="how-page-section">
        <div className="how-page-step">
          <span className="how-step-number">01</span>
          <div className="how-step-icon">🏢</div>

          <div>
            <h2>A Collection Point Is Created</h2>
            <p>
              A Pehli Roti collection box is installed at an accessible
              location within a residential society or community.
            </p>
          </div>
        </div>

        <div className="how-page-step">
          <span className="how-step-number">02</span>
          <div className="how-step-icon">📦</div>

          <div>
            <h2>Families Contribute Rotis</h2>
            <p>
              Residents place rotis for Gau Matta in the designated
              collection box.
            </p>
          </div>
        </div>

        <div className="how-page-step">
          <span className="how-step-number">03</span>
          <div className="how-step-icon">🛺</div>

          <div>
            <h2>We Collect Them Every Day</h2>
            <p>
              Our e-rickshaw follows its collection route and picks up
              rotis from participating locations.
            </p>
          </div>
        </div>

        <div className="how-page-step">
          <span className="how-step-number">04</span>
          <div className="how-step-icon">🐄</div>

          <div>
            <h2>The Rotis Reach the Gaushala</h2>
            <p>
              Collected rotis are transported to associated gaushalas
              through the same daily network.
            </p>
          </div>
        </div>
      </section>

      <section className="how-page-cta">
        <p className="eyebrow">BRING IT TO YOUR COMMUNITY</p>

        <h2>Want a Pehli Roti Box in Your Society?</h2>

        <p>
          Share your society details and we can review whether your location
          can be included in our collection network.
        </p>

        <a href="/request-a-box" className="primary-link-button">
          Request a Roti Box
        </a>
      </section>
    </main>
  );
}