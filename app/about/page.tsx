export default function AboutPage() {
  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">ABOUT US</p>

        <h1>Pehli Roti Gau Matta Ki</h1>

        <p>
          A community-led initiative that helps make the tradition of
          offering rotis to Gau Matta simple and accessible in modern
          residential communities.
        </p>
      </section>

      <section className="about-page-intro">
        <div className="about-page-image-placeholder">
          NGO / Community Photo
        </div>

        <div className="about-page-content">
          <p className="eyebrow">OUR STORY</p>

          <h2>Keeping a Simple Tradition Alive</h2>

          <p>
            Pehli Roti Gau Matta Ki was created to make it easier for
            households to participate in the tradition of offering rotis
            to Gau Matta.
          </p>

          <p>
            Instead of relying on individual households to travel to a
            gaushala, we create shared collection points within societies,
            collect the rotis through our daily e-rickshaw routes, and
            transport them to associated gaushalas.
          </p>
        </div>
      </section>

      <section className="about-values-section">
        <div className="about-values-heading">
          <p className="eyebrow">WHAT GUIDES US</p>

          <h2>Simple Participation. Collective Responsibility.</h2>
        </div>

        <div className="about-values-grid">
          <div>
            <span>01</span>
            <h3>Tradition</h3>
            <p>
              We help communities continue a long-standing household
              practice in a practical, organised way.
            </p>
          </div>

          <div>
            <span>02</span>
            <h3>Community</h3>
            <p>
              One shared collection point allows an entire society to
              participate together.
            </p>
          </div>

          <div>
            <span>03</span>
            <h3>Consistency</h3>
            <p>
              Daily collection routes help ensure contributions reach
              gaushalas regularly.
            </p>
          </div>

          <div>
            <span>04</span>
            <h3>Transparency</h3>
            <p>
              As the initiative grows, we aim to make our collection
              network and impact increasingly visible.
            </p>
          </div>
        </div>
      </section>

      <section className="about-mission-section">
        <div>
          <p className="eyebrow">OUR MISSION</p>

          <h2>Make Roti Donation Easy for Every Community</h2>

          <p>
            Our long-term goal is to build a reliable network of collection
            boxes, routes and gaushalas so that more households can
            participate without logistical difficulty.
          </p>

          <a href="/how-it-works" className="text-link">
            See How It Works →
          </a>
        </div>

        <div className="about-mission-image-placeholder">
          Collection / Gaushala Photo
        </div>
      </section>

      <section className="about-page-cta">
        <p className="eyebrow">JOIN THE INITIATIVE</p>

        <h2>Bring Pehli Roti Gau Matta Ki to Your Society</h2>

        <p>
          Help us connect another community to the collection network.
        </p>

        <a href="/request-a-box" className="primary-link-button">
          Request a Roti Box
        </a>
      </section>
    </main>
  );
}