export default function ContactPage() {
  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">CONTACT US</p>

        <h1>Get in Touch</h1>

        <p>
          Whether you want to request a Roti Box, volunteer, support the
          initiative, or connect us with a gaushala, we&apos;d be happy to hear
          from you.
        </p>
      </section>

      <section className="contact-page-section">
        <div className="contact-info">
          <p className="eyebrow">CONTACT</p>

          <h2>Let&apos;s Connect</h2>

          <p>
            Our contact details will be added here once the official phone,
            email and address are finalised.
          </p>

          <div className="contact-detail-card">
            <span>📞</span>
            <div>
              <h3>Phone</h3>
              <p>Official number coming soon</p>
            </div>
          </div>

          <div className="contact-detail-card">
            <span>✉️</span>
            <div>
              <h3>Email</h3>
              <p>Official email coming soon</p>
            </div>
          </div>

          <div className="contact-detail-card">
            <span>📍</span>
            <div>
              <h3>Address</h3>
              <p>Registered office details coming soon</p>
            </div>
          </div>
        </div>

        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="contact-name">Your Name *</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="contact-mobile">Mobile Number *</label>
              <input
                id="contact-mobile"
                name="mobile"
                type="tel"
                placeholder="+91"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="contact-reason">I&apos;m Getting in Touch About *</label>

            <select id="contact-reason" name="reason" defaultValue="" required>
              <option value="" disabled>
                Select an option
              </option>

              <option value="roti-box">Requesting a Roti Box</option>
              <option value="volunteer">Volunteering</option>
              <option value="gaushala">Introducing a Gaushala</option>
              <option value="donation">Donation / Support</option>
              <option value="collaboration">Collaboration</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="contact-message">Message *</label>

            <textarea
              id="contact-message"
              name="message"
              rows={6}
              placeholder="Tell us how we can help."
              required
            />
          </div>

          <label className="checkbox-group">
            <input type="checkbox" name="whatsappConsent" />

            <span>
              I&apos;m happy to be contacted on WhatsApp regarding my enquiry.
            </span>
          </label>

          <button type="submit" className="form-submit">
            Send Message
          </button>
        </form>
      </section>

      <section className="contact-quick-actions">
        <div>
          <p className="eyebrow">LOOKING FOR SOMETHING SPECIFIC?</p>

          <h2>Choose the Right Next Step</h2>
        </div>

        <div className="contact-action-grid">
          <a href="/request-a-box">
            <span>📦</span>
            <h3>Request a Roti Box</h3>
            <p>Bring the collection network to your society.</p>
          </a>

          <a href="/get-involved">
            <span>🤝</span>
            <h3>Volunteer</h3>
            <p>Explore ways to contribute your time.</p>
          </a>

          <a href="/donate">
            <span>🙏</span>
            <h3>Support Us</h3>
            <p>Learn how you can support the initiative.</p>
          </a>
        </div>
      </section>
    </main>
  );
}