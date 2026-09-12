"use client";
import { useEffect, useState } from "react";
import RotiBoxMap from "./components/RotiBoxMapClient";
export default function Home() {
  const heroSlides = [
  {
    image: "/images/hero-roti-box.jpg",
    title: "Installed in your society",
    description: "A simple way to contribute every day",
    fit: "cover",
  },
  {
    image: "/images/hero-collection-team.jpg",
    title: "Collected every day",
    description: "Our team collects the rotis from your society",
    fit: "contain",
  },
  {
    image: "/images/hero-collection-vehicle.jpg",
    title: "Carried through our network",
    description: "Rotis are transported to our partner gaushalas",
    fit: "contain",
  },
  {
    image: "/images/hero-gaushala.jpg",
    title: "Delivered to gaushalas",
    description: "Completing a simple act of daily gau seva",
    fit: "cover",
  },
];

const [currentSlide, setCurrentSlide] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, 5000);

  return () => clearInterval(interval);
}, []);

  return (
    <main>

<section className="hero-cinematic">

  {/* BACKGROUND SLIDESHOW */}
  <div className="hero-cinematic-background">
    {heroSlides.map((slide, index) => (
      <img
        key={slide.image}
        src={slide.image}
        alt={slide.title}
        className={`hero-cinematic-slide ${
          index === currentSlide ? "active" : ""
        }`}
      />
    ))}

    <div className="hero-cinematic-overlay"></div>
  </div>

  {/* HERO CONTENT */}
  <div className="hero-cinematic-inner">

    <div className="hero-cinematic-copy">

      <div className="hero-hindi-cinematic">
        पहली रोटी गौ माता की
      </div>

      <h1>
        Your First Roti
        <span> Can Still Reach Gau Matta.</span>
      </h1>

      <p>
        We connect modern communities with gaushalas through a simple
        daily Roti Box and collection network — keeping an age-old
        tradition alive.
      </p>

      <div className="hero-cinematic-actions">
        <a href="/request-a-box" className="hero-cinematic-primary action-btn">
          <span>Request a Roti Box</span>
          <span className="action-btn-arrow">→</span>
        </a>

        <a href="#how-it-works" className="hero-cinematic-secondary action-btn action-btn-down">
          <span>See How It Works</span>
          <span className="action-btn-arrow">↓</span>
        </a>
      </div>

      <div className="hero-cinematic-progress">

        <div className="hero-slide-meta">
          <span>
            {String(currentSlide + 1).padStart(2, "0")}
          </span>

          <div>
            <strong>{heroSlides[currentSlide].title}</strong>
            <p>{heroSlides[currentSlide].description}</p>
          </div>
        </div>

        <div className="hero-cinematic-dots">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`View slide ${index + 1}`}
              className={index === currentSlide ? "active" : ""}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>

      </div>

    </div>

  </div>

</section>

<section className="why-started">
  <div className="why-started-inner">

    <div className="why-started-story">
      <p className="why-started-eyebrow">WHY WE STARTED</p>

      <h2>
        The First Roti Was
        <br />
        Always Hers.{" "}
        <span>We're Helping It Find Its Way Back.</span>
      </h2>

      <p className="why-started-lead">
        For generations, Indian households have kept aside the first roti
        for Gau Mata.
      </p>

      <p>
        There was a time when offering it was simple. Cows were a familiar
        presence around our homes and neighbourhoods, and feeding them could
        be part of an everyday routine.
      </p>

      <p>
        But our cities changed. Homes became apartments. Communities became
        more enclosed. Gaushalas moved farther away. For many families, even
        finding a cow nearby became difficult.
      </p>
    </div>

    <div className="why-started-question">
      <span className="quote-mark">“</span>

      <p>
        What if the cow could
        <br />
        no longer come to
        <br />
        every home — but
        <br />
        the first roti from
        <br />
        every home could
        <br />
        still reach her?
      </p>
    </div>

  </div>
</section>

<section id="how-it-works" className="journey-section">
  <div className="journey-section-inner">

    <div className="journey-section-heading">
      <span>HOW IT WORKS</span>
      <h2>One Roti. One Simple Journey.</h2>
      <p>
        From a family&apos;s kitchen to Gau Matta, every roti follows a simple,
        organised journey.
      </p>
    </div>

    <div className="journey-timeline">

      <div className="journey-center-line" />

      {/* STEP 1 */}
      <div className="journey-step">
        <div className="journey-media journey-media-left">
          <div className="journey-image journey-image-circle">
            <img
              src="/images/hero-roti-box.jpg"
              alt="Pehli Roti collection box installed in a society"
            />
          </div>

          <span className="journey-node" />
        </div>

        <div className="journey-copy journey-copy-right">
          <span className="journey-number">01</span>

          <h3>A Roti Box Comes to Your Society</h3>

          <p>
            A dedicated Pehli Roti collection box is installed at an
            accessible location within the community.
          </p>
        </div>
      </div>


      {/* STEP 2 */}
      <div className="journey-step journey-step-reverse">
        <div className="journey-media journey-media-right">
          <div className="journey-image journey-image-organic-right">
            <img
              src="/images/hero-collection-team.jpg"
              alt="Families participating in the Pehli Roti initiative"
            />
          </div>

          <span className="journey-node" />
        </div>

        <div className="journey-copy journey-copy-left">
          <span className="journey-number">02</span>

          <h3>Families Add Their Rotis</h3>

          <p>
            Families keep aside their first roti for Gau Matta and place it
            in the shared Roti Box as part of their daily routine.
          </p>
        </div>
      </div>


      {/* STEP 3 */}
      <div className="journey-step">
        <div className="journey-media journey-media-left">
          <div className="journey-image journey-image-circle">
            <img
              src="/images/hero-collection-vehicle.jpg"
              alt="Pehli Roti collection vehicle"
            />
          </div>

          <span className="journey-node" />
        </div>

        <div className="journey-copy journey-copy-right">
          <span className="journey-number">03</span>

          <h3>Collected & Transported Every Day</h3>

          <p>
            Our collection team follows the route every day, gathering the
            rotis and carrying them through our network.
          </p>
        </div>
      </div>


      {/* STEP 4 */}
      <div className="journey-step journey-step-reverse">
        <div className="journey-media journey-media-right">
          <div className="journey-image journey-image-organic-left">
            <img
              src="/images/hero-gaushala.jpg"
              alt="Rotis reaching Gau Matta at a gaushala"
            />
          </div>

          <span className="journey-node" />
        </div>

        <div className="journey-copy journey-copy-left">
          <span className="journey-number">04</span>

          <h3>The Journey Ends at the Gaushala</h3>

          <p>
            The collected rotis finally reach associated gaushalas,
            completing a simple act of everyday Gau Seva.
          </p>
        </div>
      </div>

    </div>

    <div className="journey-final-note">
      <p>
        One collection box can bring an entire community together.
      </p>

      <a href="/request-a-box" className="action-btn journey-cta-action">
        <span>Request a Roti Box</span>
        <span className="action-btn-arrow">→</span>
      </a>
    </div>

  </div>
</section>

<section id="impact" className="impact-editorial">
  <div className="impact-editorial-inner">

    <div className="impact-editorial-heading">
      <span>OUR IMPACT</span>

      <h2>
        Small Acts, Repeated Every Day,
        <br />
        Become Something Much Bigger.
      </h2>

      <p>
        Together, we are building a sustainable cycle of nourishment,
        community participation and everyday Gau Seva.
      </p>
    </div>

    <div className="impact-moments">

      <div className="impact-moment">
        <div className="impact-moment-icon">🫓</div>
        <strong>XX+</strong>
        <h3>Rotis Collected</h3>
        <p>
          Offered by families through our daily Roti Box network.
        </p>
      </div>

      <div className="impact-moment">
        <div className="impact-moment-icon">🐄</div>
        <strong>XX+</strong>
        <h3>Cows Reached</h3>
        <p>
          Through associated gaushalas and Gau Seva initiatives.
        </p>
      </div>

      <div className="impact-moment">
        <div className="impact-moment-icon">🏠</div>
        <strong>XX+</strong>
        <h3>Roti Boxes Installed</h3>
        <p>
          Across participating communities and residential societies.
        </p>
      </div>

      <div className="impact-moment">
        <div className="impact-moment-icon">🤝</div>
        <strong>XX+</strong>
        <h3>Communities Connected</h3>
        <p>
          Helping families continue the tradition of Pehli Roti.
        </p>
      </div>

    </div>

    <div className="impact-story-strip">

      <div className="impact-story-item">
        <img
          src="/images/hero-roti-box.jpg"
          alt="Roti Box installed in a residential community"
        />
        <div className="impact-story-label">
          Installed in your society
        </div>
      </div>

      <div className="impact-story-item">
        <img
          src="/images/hero-collection-team.jpg"
          alt="Pehli Roti collection team"
        />
        <div className="impact-story-label">
          Collected every day
        </div>
      </div>

      <div className="impact-story-item">
        <img
          src="/images/hero-collection-vehicle.jpg"
          alt="Roti collection vehicle"
        />
        <div className="impact-story-label">
          Carried through our network
        </div>
      </div>

      <div className="impact-story-item">
        <img
          src="/images/hero-gaushala.jpg"
          alt="Cows at a gaushala"
        />
        <div className="impact-story-label">
          Delivered to gaushalas
        </div>
      </div>

    </div>

    <div className="impact-editorial-cta">

      <p>See where this seva is happening.</p>

      <a href="#roti-box-map" className="action-btn">
        <span>Explore the Roti Box Map</span>
        <span className="action-btn-arrow">→</span>
      </a>

    </div>

  </div>
</section>

<RotiBoxMap />

      <section id="about" className="home-about">
  <div className="about-image-placeholder">
    NGO / Community Photo
  </div>

  <div className="about-content">
    <p className="eyebrow">WHO WE ARE</p>

    <h2>
      A Simple Tradition,
      Made Possible for Modern Communities
    </h2>

    <p>
      Pehli Roti Gau Matta Ki helps communities participate in the
      tradition of offering rotis to Gau Matta through an organised
      collection network.
    </p>

    <p>
      Our story and the journey behind the initiative will be added here.
    </p>

    <a href="/about" className="text-link text-action">
      <span>Know Our Story</span>
      <span className="text-action-arrow">→</span>
    </a>
  </div>
</section>

      <section id="gaushalas" className="home-gaushalas">
  <div className="gaushala-heading">
    <p className="eyebrow">OUR GAUSHALAS</p>
    <h2>Where Your Roti Goes</h2>
    <p>
      The rotis collected from participating societies are delivered to
      associated gaushalas through our daily collection network.
    </p>
  </div>

  <div className="gaushala-grid">
    <div className="gaushala-card">
      <div className="gaushala-image-placeholder">
        Gaushala Photo
      </div>

      <div className="gaushala-card-content">
        <h3>Gaushala Name</h3>
        <p>Location will be added here.</p>
      </div>
    </div>

    <div className="gaushala-card">
      <div className="gaushala-image-placeholder">
        Gaushala Photo
      </div>

      <div className="gaushala-card-content">
        <h3>Gaushala Name</h3>
        <p>Location will be added here.</p>
      </div>
    </div>

    <div className="gaushala-card">
      <div className="gaushala-image-placeholder">
        Gaushala Photo
      </div>

      <div className="gaushala-card-content">
        <h3>Gaushala Name</h3>
        <p>Location will be added here.</p>
      </div>
    </div>
  </div>

  <div className="gaushala-link-wrapper">
    <a href="/gaushalas" className="text-link text-action">
      <span>View Our Gaushalas</span>
      <span className="text-action-arrow">→</span>
    </a>
  </div>
</section>

      <section id="get-involved" className="home-get-involved">
  <div className="get-involved-heading">
    <p className="eyebrow">GET INVOLVED</p>
    <h2>Be Part of the Movement</h2>
    <p>
      Whether you represent a society, want to volunteer, or wish to support
      our work, there is a simple way to contribute.
    </p>
  </div>

  <div className="get-involved-grid">
    <a href="/request-a-box" className="involvement-card interactive-card">
      <span className="involvement-icon">📦</span>
      <h3>Request a Roti Box</h3>
      <p>
        Bring the Pehli Roti collection system to your society or community.
      </p>
      <span className="involvement-link">Request a Box <span className="card-arrow">→</span></span>
    </a>

    <a href="/get-involved" className="involvement-card interactive-card">
      <span className="involvement-icon">🤝</span>
      <h3>Volunteer With Us</h3>
      <p>
        Support collection drives, society coordination and community outreach.
      </p>
      <span className="involvement-link">Volunteer <span className="card-arrow">→</span></span>
    </a>

    <a href="/donate" className="involvement-card featured-involvement interactive-card">
      <span className="involvement-icon">🙏</span>
      <h3>Support Our Work</h3>
      <p>
        Help us expand collection routes, install more boxes and reach more gaushalas.
      </p>
      <span className="involvement-link">Donate <span className="card-arrow">→</span></span>
    </a>
  </div>
</section>

      <section id="donate">
        <h2>Support Our Work</h2>
        <p>Help us expand the roti collection network.</p>
        <button className="action-btn donate-action-btn">
          <span>Donate</span>
          <span className="action-btn-arrow">→</span>
        </button>
      </section>
    </main>
  );
}