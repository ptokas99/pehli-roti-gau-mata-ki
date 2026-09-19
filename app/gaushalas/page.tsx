import Image from "next/image";
import Link from "next/link";

const gaushalas = [
  {
    id: "01",
    name: "[Gaushala name]",
    location: "[Location]",
    cattle: "[_]",
    since: "[month, year]",
    image: "/images/gaushala-1.jpg",
  },
];

const partnerStandards = [
  {
    number: "01",
    title: "Daily capacity",
    body:
      "[To be confirmed with each partner] — We agree on how much the gaushala can comfortably receive.",
  },
  {
    number: "02",
    title: "Suitable delivery window",
    body:
      "[Agreed directly with gaushala] — Delivery timing is coordinated with the partner.",
  },
  {
    number: "03",
    title: "Receipt confirmation",
    body:
      "[Delivery acknowledged at drop] — The quantity received is confirmed.",
  },
  {
    number: "04",
    title: "Route suitability",
    body:
      "[Partner must fit a practical collection route] — The destination must work within the daily route.",
  },
];

export default function GaushalasPage() {
  return (
    <main className="gaushalax-page">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="gaushalax-hero">
        <div className="gaushalax-shell">

          <div className="gaushalax-hero-grid">

            <div className="gaushalax-hero-copy">

              <div className="gaushalax-eyebrow">
                GAUSHALAS · गौशाला नेटवर्क
              </div>

              <h1>
                Where the
                <em> rotis go.</em>
              </h1>

              <p className="gaushalax-hero-lead">
                Every roti collected on a route is delivered the same day
                to a partner gaushala on that route. Nothing is stored,
                sold, or redirected.
              </p>


              <div className="gaushalax-route-line">

                <span>SOCIETY</span>
                <i>→</i>

                <span>COLLECTION ROUTE</span>
                <i>→</i>

                <strong>PARTNER GAUSHALA</strong>

              </div>


              <div className="gaushalax-proof-note">

                <span />

                <p>
                  Same-day delivery · Named destination · Receipt confirmed
                </p>

              </div>

            </div>


            <div className="gaushalax-hero-visual">

              <div className="gaushalax-image-frame">

                <Image
                  src="/images/gaushala-hero.jpg"
                  alt="Partner gaushala receiving a Pehli Roti delivery"
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 45vw"
                />

                <div className="gaushalax-image-label">
                  PARTNER GAUSHALA · DESTINATION RECORD
                </div>

              </div>


              <div className="gaushalax-hero-meta">

                <span>
                  DIRECT DELIVERY
                </span>

                <p>
                  Rotis collected on the route complete their journey
                  here the same day.
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          PARTNERSHIP
      ====================================================== */}

      <section className="gaushalax-partnership">
        <div className="gaushalax-shell">

          <div className="gaushalax-section-heading">

            <div className="gaushalax-eyebrow">
              THE PARTNERSHIP
            </div>

            <h2>
              How we work
              <em> with gaushalas.</em>
            </h2>

            <p>
              Partner gaushalas receive a daily delivery at a fixed time
              and confirm the quantity received. In return they tell us
              what they need: how much they can take, when, and whether
              the volume is helping.
            </p>

            <p>
              We don&apos;t ask gaushalas for anything. We add a supply
              line and stay out of their operations.
            </p>

            <p className="gaushalax-partnership-summary">
              We&apos;re currently working with [_] gaushalas across
              [area / district], delivering to roughly [_] cattle each day.
            </p>

          </div>


          <div className="gaushalax-partnership-grid">

            <article>

              <div className="gaushalax-partner-block-head">
                <span>WHAT WE PROVIDE</span>
                <small>DAILY SUPPLY</small>
              </div>

              <ul>
                <li>
                  <strong>Same-day delivery</strong>
                  of rotis collected from participating societies.
                </li>

                <li>
                  <strong>Predictable route supply</strong>
                  through the daily collection network.
                </li>

                <li>
                  <strong>Quantity logging</strong>
                  so the delivery can be recorded against the destination.
                </li>
              </ul>

            </article>


            <article>

              <div className="gaushalax-partner-block-head">
                <span>WHAT THE GAUSHALA TELLS US</span>
                <small>PARTNER INPUT</small>
              </div>

              <ul>
                <li>
                  <strong>Daily capacity</strong>
                  and how much roti volume can be accepted.
                </li>

                <li>
                  <strong>Suitable delivery time</strong>
                  for receiving the route.
                </li>

                <li>
                  <strong>Whether the volume is useful</strong>
                  so the partnership remains practical.
                </li>
              </ul>

            </article>

          </div>


          <blockquote className="gaushalax-partnership-quote">
            “We add a supply line. We do not enter gaushala operations.”
          </blockquote>

        </div>
      </section>


      {/* =====================================================
          NETWORK REGISTRY
      ====================================================== */}

      <section className="gaushalax-network">
        <div className="gaushalax-shell">

          <div className="gaushalax-network-head">

            <div>

              <div className="gaushalax-eyebrow">
                PARTNER GAUSHALAS · सहयोगी गौशालाएँ
              </div>

              <h2>
                The shelters at the end
                <em> of each route.</em>
              </h2>

            </div>


            <p>
              Every partner listed here is a named destination receiving
              rotis through a Pehli Roti collection route.
            </p>

          </div>


          <div className="gaushalax-registry">

            {gaushalas.map((gaushala) => (
              <article
                key={gaushala.id}
                className="gaushalax-registry-item"
              >

                <div className="gaushalax-registry-image">

                  <Image
                    src={gaushala.image}
                    alt={gaushala.name}
                    fill
                    sizes="(max-width: 900px) 100vw, 45vw"
                  />

                  <span>
                    PARTNER RECORD {gaushala.id}
                  </span>

                </div>


                <div className="gaushalax-registry-copy">

                  <div className="gaushalax-registry-kicker">
                    ROUTE DESTINATION
                  </div>

                  <h3>
                    {gaushala.name}
                  </h3>

                  <p className="gaushalax-registry-location">
                    {gaushala.location}
                  </p>


                  <div className="gaushalax-registry-meta">

                    <div>
                      <span>HOME TO</span>
                      <strong>{gaushala.cattle} cattle</strong>
                    </div>

                    <div>
                      <span>RECEIVING DAILY DELIVERIES SINCE</span>
                      <strong>{gaushala.since}</strong>
                    </div>

                  </div>


                  <p className="gaushalax-registry-body">
                    This gaushala is a named destination on its matching
                    collection route. Rotis arrive as part of the same-day
                    delivery system.
                  </p>

                </div>

              </article>
            ))}

          </div>


          <div className="gaushalax-registry-note">

            <span />

            <p>
              Partner entries are added as verified gaushalas join the
              collection network.
            </p>

          </div>

        </div>
      </section>


      {/* =====================================================
          ROUTE TO DESTINATION
      ====================================================== */}

      <section className="gaushalax-destination">
        <div className="gaushalax-shell">

          <div className="gaushalax-section-heading">

            <div className="gaushalax-eyebrow">
              COLLECTION DESTINATION
            </div>

            <h2>
              A named destination
              <em> on every route.</em>
            </h2>

            <p>
              Rotis are delivered on the same route they are collected on.
              There is no resale, warehouse, intermediary, or overnight
              storage.
            </p>

          </div>


          <div className="gaushalax-route-process">

            <div>
              <span>STAGE 01</span>
              <strong>ROTI BOX</strong>
              <p>
                Rotis contributed by participating households.
              </p>
            </div>

            <i>→</i>

            <div>
              <span>STAGE 02</span>
              <strong>DAILY PICKUP</strong>
              <p>
                Collected through the fixed society route.
              </p>
            </div>

            <i>→</i>

            <div>
              <span>STAGE 03</span>
              <strong>ROUTE</strong>
              <p>
                Same-day movement toward the named gaushala.
              </p>
            </div>

            <i>→</i>

            <div>
              <span>STAGE 04</span>
              <strong>PARTNER GAUSHALA</strong>
              <p>
                Rotis arrive directly at the route destination.
              </p>
            </div>

            <i>→</i>

            <div>
              <span>STAGE 05</span>
              <strong>RECEIPT CONFIRMED</strong>
              <p>
                Delivery quantity confirmed at the destination.
              </p>
            </div>

          </div>


          <div className="gaushalax-route-documentary">

            <div className="gaushalax-route-documentary-image">

              <Image
                src="/images/gaushala-route.jpg"
                alt="Pehli Roti delivery reaching a gaushala"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
              />

            </div>


            <div className="gaushalax-route-documentary-copy">

              <span>
                DIRECT FEED ROUTE
              </span>

              <h3>
                Collection ends at a named gaushala.
              </h3>

              <p>
                The destination is part of the route itself. Rotis move
                directly from participating societies to the partner
                gaushala on the same daily collection system.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          PARTNER STANDARD
      ====================================================== */}

      <section className="gaushalax-standard">
        <div className="gaushalax-shell">

          <div className="gaushalax-section-heading">

            <div className="gaushalax-eyebrow">
              PARTNER STANDARD
            </div>

            <h2>
              A useful destination,
              <em> not just a drop-off point.</em>
            </h2>

            <p>
              Gaushalas are added to the network only when the destination
              works practically within a collection route.
            </p>

          </div>


          <div className="gaushalax-standard-ledger">

            {partnerStandards.map((item) => (
              <article key={item.number}>

                <span>
                  {item.number}
                </span>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.body}
                </p>

              </article>
            ))}

          </div>


          <div className="gaushalax-standard-note">
            Operational details are confirmed directly with each partner
            before a gaushala is added to a route.
          </div>

        </div>
      </section>


      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="gaushalax-cta">
        <div className="gaushalax-shell">

          <div className="gaushalax-cta-frame">

            <div>

              <span>
                REACH A GAUSHALA
              </span>

              <h2>
                Know a gaushala
                <em> we should reach?</em>
              </h2>

              <p>
                If you run or support a gaushala that could use a daily
                feed supply, tell us where it is.
              </p>

            </div>


            <div className="gaushalax-cta-action">

              <Link
                href="/contact"
                className="gaushalax-cta-button action-btn"
              >
                <span>
                  Contact us
                </span>

                <span className="action-btn-arrow">
                  →
                </span>
              </Link>

              <small>
                We review location, route fit and daily capacity before
                adding a partner.
              </small>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}