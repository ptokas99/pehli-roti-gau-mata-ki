export default function GetInvolvedPage() {
  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">GET INVOLVED</p>

        <h1>There Are Many Ways to Be Part of the Movement</h1>

        <p>
          Whether you represent a society, want to volunteer your time, or
          wish to support our work financially, you can contribute in a
          meaningful way.
        </p>
      </section>

      <section className="get-involved-page-grid">
        <article className="get-involved-page-card">
          <span className="get-involved-page-icon">📦</span>

          <h2>Request a Roti Box</h2>

          <p>
            Bring the Pehli Roti collection system to your residential
            society, community or local institution.
          </p>

          <a href="/request-a-box" className="primary-link-button">
            Request a Box
          </a>
        </article>

        <article className="get-involved-page-card">
          <span className="get-involved-page-icon">🤝</span>

          <h2>Volunteer With Us</h2>

          <p>
            Help with society coordination, awareness, collection activities
            and community outreach.
          </p>

          <a href="/contact" className="primary-link-button">
            Become a Volunteer
          </a>
        </article>

        <article className="get-involved-page-card featured-get-involved-card">
          <span className="get-involved-page-icon">🙏</span>

          <h2>Support Our Work</h2>

          <p>
            Help us maintain collection routes, install more boxes and reach
            additional gaushalas.
          </p>

          <a href="/donate" className="light-link-button">
            Donate
          </a>
        </article>
      </section>

      <section className="community-support-section">
        <div className="community-support-heading">
          <p className="eyebrow">MORE WAYS TO HELP</p>

          <h2>Help Us Grow the Network</h2>

          <p>
            There are many ways individuals and communities can contribute
            beyond daily roti donations.
          </p>
        </div>

        <div className="community-support-grid">
          <div>
            <span>01</span>
            <h3>Introduce Your Society</h3>
            <p>
              Connect us with your RWA or society management so we can explore
              setting up a collection point.
            </p>
          </div>

          <div>
            <span>02</span>
            <h3>Introduce a Gaushala</h3>
            <p>
              Help us identify gaushalas that may benefit from joining the
              collection network.
            </p>
          </div>

          <div>
            <span>03</span>
            <h3>Support a Collection Route</h3>
            <p>
              Contribute towards the operational costs involved in daily
              collection and transportation.
            </p>
          </div>

          <div>
            <span>04</span>
            <h3>Spread the Word</h3>
            <p>
              Help more families and communities discover the initiative.
            </p>
          </div>
        </div>
      </section>

      <section className="get-involved-final-cta">
        <p className="eyebrow">HAVE AN IDEA?</p>

        <h2>We&apos;d Love to Hear From You</h2>

        <p>
          If you would like to collaborate or support the initiative in
          another way, get in touch with us.
        </p>

        <a href="/contact" className="primary-link-button">
          Contact Us
        </a>
      </section>
    </main>
  );
}