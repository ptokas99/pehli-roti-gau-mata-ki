export default function GaushalasPage() {
  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">OUR GAUSHALAS</p>

        <h1>Where the Rotis Go</h1>

        <p>
          The rotis collected through our society network are transported
          to associated gaushalas through our daily collection routes.
        </p>
      </section>

      <section className="gaushala-page-intro">
        <div>
          <p className="eyebrow">OUR NETWORK</p>

          <h2>Supporting Gaushalas Through Community Participation</h2>

          <p>
            Each collection route connects participating communities with
            gaushalas that receive the rotis collected through our network.
          </p>

          <p>
            As we add more partner gaushalas, their details, locations and
            photographs will be shared here.
          </p>
        </div>

        <div className="gaushala-page-image-placeholder">
          Gaushala Network Photo
        </div>
      </section>

      <section className="gaushala-directory">
        <div className="gaushala-directory-heading">
          <p className="eyebrow">PARTNER GAUSHALAS</p>
          <h2>Our Gaushala Network</h2>
        </div>

        <div className="gaushala-directory-grid">
          <article className="gaushala-directory-card">
            <div className="gaushala-directory-image">
              Gaushala Photo
            </div>

            <div className="gaushala-directory-content">
              <h3>Gaushala Name</h3>
              <p className="gaushala-location">Location</p>

              <p>
                Details about this gaushala and our association will be
                added here.
              </p>
            </div>
          </article>

          <article className="gaushala-directory-card">
            <div className="gaushala-directory-image">
              Gaushala Photo
            </div>

            <div className="gaushala-directory-content">
              <h3>Gaushala Name</h3>
              <p className="gaushala-location">Location</p>

              <p>
                Details about this gaushala and our association will be
                added here.
              </p>
            </div>
          </article>

          <article className="gaushala-directory-card">
            <div className="gaushala-directory-image">
              Gaushala Photo
            </div>

            <div className="gaushala-directory-content">
              <h3>Gaushala Name</h3>
              <p className="gaushala-location">Location</p>

              <p>
                Details about this gaushala and our association will be
                added here.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="gaushala-page-cta">
        <p className="eyebrow">EXPAND THE NETWORK</p>

        <h2>Know a Gaushala We Should Connect With?</h2>

        <p>
          Get in touch with us and share the details.
        </p>

        <a href="/contact" className="primary-link-button">
          Contact Us
        </a>
      </section>
    </main>
  );
}