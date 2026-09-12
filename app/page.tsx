"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const RotiBoxMap = dynamic(
  () => import("./components/RotiBoxMapClient"),
  {
    ssr: false,
  }
);
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
  One Roti a Day.
  <br />
  <span>From Your Kitchen to a Gaushala.</span>
</h1>

<p>
  We place a collection box in your society. Families drop in the first
  roti of the day. We transport what&apos;s collected, fresh, to a gaushala
  that is home to <strong>XX cows</strong>. Every day. No cost to you.
</p>

<div className="hero-cinematic-actions">
  <a
    href="/request-a-box"
    className="hero-cinematic-primary action-btn"
  >
    <span>Request a Roti Box</span>
    <span className="action-btn-arrow">→</span>
  </a>

  <a
    href="#how-it-works"
    className="hero-cinematic-secondary action-btn action-btn-down"
  >
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

<section className="problem-editorial">
  <div className="problem-editorial-inner">

    <div className="problem-editorial-heading">
      <div className="problem-editorial-eyebrow">
        <span>THE PROBLEM</span>
        <span className="problem-editorial-line" />
        <em>गौः विश्वस्य मातरः</em>
      </div>

      <h2>
        A tradition without
        <br />
        <span>a last mile.</span>
      </h2>
    </div>

    <div className="problem-editorial-grid">

      <div className="problem-editorial-copy">

        <blockquote>
          <p>
            In most Indian homes, the first roti of the day belongs
            to the cow.
          </p>

          <span>
            In an apartment, there is no cow at the gate.
          </span>
        </blockquote>

        <div className="problem-editorial-body">
          <p>
            So the roti is left on the roadside or under a tree,
            in the hope that some animal finds it. Often none does,
            and it becomes litter instead of feed.
          </p>

          <p>
            Meanwhile, gaushalas a few kilometres away need a
            dependable supply of food for the cows in their care.
          </p>
        </div>

        <div className="problem-editorial-stat">
          <span className="problem-stat-icon">△</span>

          <div>
            <strong>THE URBAN DISCONNECT</strong>

            <p>
              A sacred daily habit still exists — but the connection
              between urban homes and nearby gaushalas has been lost.
            </p>
          </div>
        </div>

      </div>

      <div className="problem-editorial-photo">
        <img
          src="/images/problem-cow.jpg"
          alt="Gau seva and roti collection"
        />

        <div className="problem-photo-caption">
          <span>THE DAILY REALITY</span>

          <p>
            Every morning, families keep aside a roti with devotion.
            Our work is to make sure it reaches Gau Mata.
          </p>
        </div>
      </div>

    </div>

    <div className="problem-connection">

      <div className="problem-connection-heading">
        <div>
          <span>THE MISSING CONNECTION</span>
          <h3>We connect the two.</h3>
        </div>

        <p>
          A simple collection network that connects homes,
          society Roti Boxes and gaushalas.
        </p>
      </div>

      <div className="problem-journey">

        <div className="problem-journey-step">
          <span>01</span>
          <strong>Your Kitchen</strong>
          <em>First Roti</em>
          <p>The first roti is kept aside at home.</p>
        </div>

        <div className="problem-journey-step">
          <span>02</span>
          <strong>Your Society</strong>
          <em>Common Drop Point</em>
          <p>Families place it in the society Roti Box.</p>
        </div>

        <div className="problem-journey-step">
          <span>03</span>
          <strong>The Roti Box</strong>
          <em>Collected Together</em>
          <p>Rotis remain at one dedicated collection point.</p>
        </div>

        <div className="problem-journey-step">
          <span>04</span>
          <strong>Our Collection Route</strong>
          <em>Daily Pickup</em>
          <p>Our team collects and transports the rotis.</p>
        </div>

        <div className="problem-journey-step">
          <span>05</span>
          <strong>Gaushala</strong>
          <em>Gau Seva</em>
          <p>The rotis finally reach cows in a gaushala.</p>
        </div>

      </div>

    </div>

  </div>
</section>

<section id="how-it-works" className="how-stitch">
  <div className="how-stitch-inner">

    {/* HEADER */}
    <div className="how-stitch-header">
      <div className="how-stitch-title">
        <div className="how-stitch-eyebrow">
          <span>HOW IT WORKS — दैनिक सेवा मार्ग</span>
          <i />
        </div>

        <h2>
          One simple route.
          <br />
          <em>Every day.</em>
        </h2>
      </div>

      <div className="how-stitch-intro">
        <p>
          A small habit at home becomes dependable Gau Seva when every
          roti has a clear route from your society to a gaushala.
        </p>

        <div className="how-route-status">
          <span className="how-route-dot" />
          <span>Daily Route Dispatch · 07:15 AM IST</span>
        </div>
      </div>
    </div>


    {/* CONNECTED JOURNEY */}

    <div className="how-route">

      <div className="how-route-line" />

      <article className="how-route-card">
        <div className="how-route-card-top">
          <span>01 — SOCIETY SETUP</span>
          <b>01</b>
        </div>

        <i />

        <h3>A box arrives.</h3>

        <p>
          We install a collection point in your society.
        </p>

        <div className="how-route-meta">
          <span>✓</span>
          <p>Dedicated collection point installed at the society</p>
        </div>
      </article>


      <article className="how-route-card">
        <div className="how-route-card-top">
          <span>02 — MORNING DEVOTION</span>
          <b>02</b>
        </div>

        <i />

        <h3>Families give one roti.</h3>

        <p>
          The one they were already making.
        </p>

        <div className="how-route-meta">
          <span>✓</span>
          <p>The first roti becomes a daily offering</p>
        </div>
      </article>


      <article className="how-route-card">
        <div className="how-route-card-top">
          <span>03 — DAILY TRANSIT</span>
          <b>03</b>
        </div>

        <i />

        <h3>We collect daily.</h3>

        <p>
          Fixed e-rickshaw routes, at the same time every day.
        </p>

        <div className="how-route-meta">
          <span>✓</span>
          <p>Fixed collection routes across participating societies</p>
        </div>
      </article>


      <article className="how-route-card">
        <div className="how-route-card-top">
          <span>04 — GAU SEVA FULFILLED</span>
          <b>04</b>
        </div>

        <i />

        <h3>It reaches the gaushala.</h3>

        <p>
          Delivered the same day, on the same route.
        </p>

        <div className="how-route-meta">
          <span>✓</span>
          <p>Rotis reach the gaushala for Gau Seva</p>
        </div>
      </article>

    </div>


    {/* DOCUMENTARY BLOCK */}

    <div className="how-field-story">

      <div className="how-field-image">
        <img
          src="/images/how-it-works-field.jpg"
          alt="Pehli Roti Gau Matta Ki collection point"
        />

        <div className="how-field-image-overlay" />

        <p className="how-field-image-caption">
          A Roti Box serving as the bridge between homes and Gau Seva.
        </p>
      </div>


      <div className="how-field-copy">

        <div>
          <span className="how-field-label">
            FIELD REALITY · जमीनी हकीकत
          </span>

          <h3>
            Restoring the sacred rhythm in modern neighbourhoods.
          </h3>

          <p>
            For generations, the first roti made each morning belonged
            to Gau Mata. As cities grew vertically, families became
            physically separated from that daily tradition.
          </p>

          <p>
            Our Roti Boxes create a simple, dependable connection
            between households, collection routes and nearby gaushalas.
          </p>
        </div>

        <a href="/how-it-works" className="how-field-link">
          <span>See the full process</span>
          <span>→</span>
        </a>

      </div>

    </div>


    {/* NUMBERS */}

    <div className="how-proof">

      <div className="how-proof-grid">

        <div className="how-proof-item">
          <i />
          <strong>148,000+</strong>
          <span>Rotis Delivered</span>
          <p>Clean &amp; dignified daily feeds</p>
        </div>

        <div className="how-proof-item">
          <i />
          <strong>1,240</strong>
          <span>Homes Participating</span>
          <p>Across active housing societies</p>
        </div>

        <div className="how-proof-item">
          <i />
          <strong>38</strong>
          <span>Societies Covered</span>
          <p>Gated communities &amp; neighbourhoods</p>
        </div>

        <div className="how-proof-item">
          <i />
          <strong>14</strong>
          <span>Gaushalas Supported</span>
          <p>Gaushalas connected to our routes</p>
        </div>

      </div>

      <div className="how-proof-footer">
        <span>Updated [March, 2025] · Based on daily collection logs</span>
        <span>Verified through collection records</span>
      </div>

    </div>


    {/* CTA */}

    <div className="how-request">

      <div className="how-request-pattern" />

      <div className="how-request-content">

        <span>BRING SEVA HOME</span>

        <h3>
          Bring a Roti Box
          <br />
          <em>to your society.</em>
        </h3>

        <p>
          Tell us where you live. We&apos;ll check whether your society
          falls on an existing collection route.
        </p>

        <div className="how-request-action">
          <a href="/request-a-box">
            Request a Roti Box
            <span>→</span>
          </a>
        </div>

        <div className="how-request-trust">
          <span>● No cost to participating societies</span>
          <span>● Daily scheduled collection</span>
          <span>● Dedicated collection route</span>
        </div>

      </div>

    </div>

  </div>
</section>

<section className="network-showcase">
  <div className="network-showcase-inner">

    {/* HEADING */}
    <div className="network-heading">
      <div className="network-eyebrow">
        <span />
        OUR NETWORK · जीवंत सेवा नेटवर्क
        <span />
      </div>

      <h2>
        See the Movement Growing
        <br />
        <em>Across the City.</em>
      </h2>

      <p>
        Every pin represents a real Pehli Roti Box connecting a community
        with Gau Mata.
      </p>
    </div>


    {/* MAP + NETWORK STORY */}
    <div className="network-main">

      <div className="network-map-shell">

        <div className="network-map-hint">
          <span className="network-map-hint-dot" />

          <strong>Click a Roti Box to see its story</strong>

          <span className="network-map-hint-divider">|</span>

          <span>Delhi NCR</span>
        </div>

        <RotiBoxMap />

      </div>


      <aside className="network-story-panel">

        <div className="network-panel-top">

          <div className="network-live-label">
            <span className="network-live-dot" />
            LIVE SEVA NETWORK
          </div>

          <h3>
            Every Roti Box has a place, a story and the people who made
            it possible.
          </h3>

          <p>
            As our network grows, every installed box appears here with
            its location, installation record and Seva contributors.
          </p>


          <div className="network-metrics">

            <div>
              <strong>3</strong>
              <span>Roti Boxes Installed</span>
            </div>

            <div>
              <strong>3</strong>
              <span>Locations Covered</span>
            </div>

          </div>


          <div className="network-smriti">

            <span className="network-smriti-icon">♡</span>

            <div>
              <strong>Seva Smriti</strong>

              <p>
                Every installed box carries the names of the people
                who helped make it possible.
              </p>
            </div>

          </div>

        </div>


        <div className="network-panel-footer">

          <div className="network-status">
            <span />
            Network updated from verified installation records
          </div>

          <a
            href="/request-a-box"
            className="network-request-btn action-btn"
          >
            <span>Bring a Roti Box to your society</span>
            <span className="action-btn-arrow">→</span>
          </a>

        </div>

      </aside>

    </div>


    {/* RECENT / VERIFIED LOCATIONS */}
    <div className="network-registry">

      <div className="network-registry-header">

        <div>
          <span>VERIFIED INSTALLATION REGISTRY</span>
          <h3>Recently Commissioned Roti Boxes</h3>
        </div>

        <p>3 Active Locations</p>

      </div>


      <div className="network-registry-grid">

        <button className="network-registry-item">
          <span className="network-registry-number">01</span>

          <div>
            <span className="network-registry-tag">PRG-001</span>

            <h4>R.K. Puram</h4>

            <p>New Delhi</p>

            <small>● Active Roti Box</small>
          </div>
        </button>


        <button className="network-registry-item">
          <span className="network-registry-number">02</span>

          <div>
            <span className="network-registry-tag">PRG-002</span>

            <h4>Vasant Kunj</h4>

            <p>New Delhi</p>

            <small>● Active Roti Box</small>
          </div>
        </button>


        <button className="network-registry-item">
          <span className="network-registry-number">03</span>

          <div>
            <span className="network-registry-tag">PRG-003</span>

            <h4>Munirka</h4>

            <p>New Delhi</p>

            <small>● Active Roti Box</small>
          </div>
        </button>

      </div>

    </div>

  </div>
</section>
    </main>
  );
}