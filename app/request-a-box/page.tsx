export default function RequestBoxPage() {
  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">REQUEST A ROTI BOX</p>

        <h1>Bring Pehli Roti Gau Matta Ki to Your Society</h1>

        <p>
          Share your society details with us and our team can review the
          location for a Pehli Roti collection box.
        </p>
      </section>

      <section className="request-box-section">
        <div className="request-box-intro">
          <p className="eyebrow">JOIN THE NETWORK</p>

          <h2>Request a Collection Box</h2>

          <p>
            This form is intended for residents, RWAs, society representatives,
            temples, community groups and other locations interested in hosting
            a Pehli Roti collection box.
          </p>

          <div className="request-note">
            <strong>What happens next?</strong>

            <p>
              Once we receive your request, we can review whether the location
              can be added to an existing or upcoming collection route.
            </p>
          </div>
        </div>

        <form className="request-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Your Name *</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="mobile">Mobile Number *</label>
              <input
                id="mobile"
                name="mobile"
                type="tel"
                placeholder="+91"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="society">Society / Community Name *</label>
            <input
              id="society"
              name="society"
              type="text"
              placeholder="Enter society or community name"
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="locality">Locality / Area *</label>
              <input
                id="locality"
                name="locality"
                type="text"
                placeholder="Enter locality"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="pincode">PIN Code *</label>
              <input
                id="pincode"
                name="pincode"
                type="text"
                placeholder="110001"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="households">
              Approximate Number of Households
            </label>

            <input
              id="households"
              name="households"
              type="number"
              placeholder="e.g. 250"
            />
          </div>

          <div className="form-group">
            <label htmlFor="role">Your Role</label>

            <select id="role" name="role" defaultValue="">
              <option value="" disabled>
                Select an option
              </option>

              <option value="resident">Resident</option>
              <option value="rwa">RWA / Society Representative</option>
              <option value="management">Society Management</option>
              <option value="temple">Temple / Religious Institution</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Anything Else We Should Know?</label>

            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Share any additional information about the location."
            />
          </div>

          <label className="checkbox-group">
            <input type="checkbox" name="whatsappConsent" />

            <span>
              I&apos;m happy to be contacted on WhatsApp regarding this request.
            </span>
          </label>

          <button type="submit" className="form-submit">
            Submit Request
          </button>
        </form>
      </section>
    </main>
  );
}