export default function DonatePage() {
  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">SUPPORT OUR WORK</p>

        <h1>Help Us Grow the Collection Network</h1>

        <p>
          Your support can help us install more collection boxes, operate
          daily routes, and connect more communities with gaushalas.
        </p>
      </section>

      <section className="donate-page-intro">
        <div>
          <p className="eyebrow">WHY SUPPORT US</p>

          <h2>Every Contribution Helps the Network Move</h2>

          <p>
            Pehli Roti Gau Matta Ki operates through physical collection
            infrastructure, daily transportation, and community coordination.
          </p>

          <p>
            Donations can help us expand responsibly and maintain the
            operational systems behind each collection route.
          </p>
        </div>

        <div className="donate-image-placeholder">
          Collection / E-Rickshaw Photo
        </div>
      </section>

      <section className="donation-uses-section">
        <div className="donation-uses-heading">
          <p className="eyebrow">YOUR SUPPORT CAN HELP WITH</p>
          <h2>Building and Sustaining the Network</h2>
        </div>

        <div className="donation-uses-grid">
          <div>
            <span>📦</span>
            <h3>Roti Boxes</h3>
            <p>
              Supporting the installation and maintenance of collection
              boxes across communities.
            </p>
          </div>

          <div>
            <span>🛺</span>
            <h3>Collection Routes</h3>
            <p>
              Supporting the daily transportation required to collect and
              deliver rotis.
            </p>
          </div>

          <div>
            <span>🐄</span>
            <h3>Gaushala Network</h3>
            <p>
              Helping us strengthen and expand connections with associated
              gaushalas.
            </p>
          </div>

          <div>
            <span>🤝</span>
            <h3>Community Outreach</h3>
            <p>
              Helping us reach more societies and create additional
              collection points.
            </p>
          </div>
        </div>
      </section>

      <section className="donation-payment-section">
        <div className="donation-payment-card">
          <p className="eyebrow">DONATE</p>

          <h2>Donation Details</h2>

          <p>
            UPI, bank details and other donation options will be added here
            once the payment setup is finalised.
          </p>

          <div className="donation-placeholder">
            Donation / QR Code Area
          </div>

          <p className="donation-note">
            Please do not make a payment until the official donation details
            are published here.
          </p>
        </div>
      </section>

      <section className="donate-final-cta">
        <p className="eyebrow">OTHER WAYS TO HELP</p>

        <h2>You Can Support Without Donating Money</h2>

        <p>
          Introduce your society, volunteer, spread the word or help us
          connect with a gaushala.
        </p>

        <a href="/get-involved" className="primary-link-button">
          Get Involved
        </a>
      </section>
    </main>
  );
}