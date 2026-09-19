import Image from "next/image";
import Link from "next/link";

const impactStats = [
  {
    index: "01",
    category: "PARTICIPATION",
    value: "1,100",
    label: "Households participating",
  },
  {
    index: "02",
    category: "NETWORK",
    value: "8",
    label: "Societies with a collection point",
  },
  {
    index: "03",
    category: "FEED DELIVERED",
    value: "6.5 tonnes",
    label: "of feed delivered, diverted from roadsides",
  },
  {
    index: "04",
    category: "RELIABILITY",
    value: "180",
    label: "Collection days completed without a gap",
  },
  {
    index: "05",
    category: "ECONOMIC EFFECT",
    value: "₹1.3 lakh",
    label: "in feed costs the gaushala did not have to raise",
  },
];

const scaleSteps = [
  {
    number: "01",
    title: "One collection point",
    body:
      "A single box makes participation possible for every household in the society at once. Our average society contributes about 110 rotis a day from one box.",
  },
  {
    number: "02",
    title: "A daily route",
    body:
      "Fixed pickup times turn scattered individual contributions into a predictable daily volume the gaushala can plan around.",
  },
  {
    number: "03",
    title: "Direct delivery",
    body:
      "Rotis go to a named gaushala on the same route, the same day. No intermediary, no storage.",
  },
];

const widerEffects = [
  {
    label: "ENVIRONMENTAL EFFECT",
    title: "Takes food off the street.",
    body:
      "Without a collection point, the offering is left on a roadside or under a tree in the hope that an animal finds it. Often none does, and it becomes litter. We have moved 6.5 tonnes of it off pavements and into a feeding trough.",
  },
  {
    label: "SHELTER RELIEF",
    title: "Reduces a shelter’s cash dependence.",
    body:
      "Feed is the largest recurring cost at most gaushalas. Every kilogram delivered is a kilogram nobody has to fundraise for.",
  },
  {
    label: "RWA CONTINUITY",
    title: "Gives a society something ongoing.",
    body:
      "Participation is daily and visible, not a one-off drive. Eight RWAs now run a collection point as a standing activity.",
  },
];

const methodology = [
  {
    number: "01",
    title: "Standard weight",
    body: "One roti is counted at 40 grams.",
  },
  {
    number: "02",
    title: "Valuation benchmark",
    body:
      "Feed value is calculated at ₹20 per kilogram, benchmarked against [local dry fodder / concentrate feed] rates in [area].",
  },
  {
    number: "03",
    title: "Weight reconciliation",
    body:
      "Rotis are counted by weight at collection and logged per society, per day.",
  },
  {
    number: "04",
    title: "Exclusion protocol",
    body:
      "Anything spoiled is removed at the box and excluded from the totals.",
  },
  {
    number: "05",
    title: "Schedule exceptions",
    body:
      '“Collection days without a gap” counts days the route ran and a delivery was made. It does not count [Sundays / festival days], when we do not operate.',
  },
];

export default function ImpactPage() {
  return (
    <main className="impactx-page">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="impactx-hero">
        <div className="impactx-shell">

          <div className="impactx-ledger-topline">
            <div>
              <span className="impactx-ledger-square" />
              <span>PUBLIC IMPACT RECORD</span>
              <i>/</i>
              <span className="impactx-muted-label">IMPACT · प्रभाव</span>
            </div>

            <span>ILLUSTRATIVE DATA · VERIFY BEFORE PUBLICATION</span>
          </div>


          <div className="impactx-hero-grid">

            <div className="impactx-hero-copy">

              <div className="impactx-eyebrow">
                IMPACT · प्रभाव
              </div>

              <h1>
                Every roti
                <em> adds up.</em>
              </h1>

              <p className="impactx-hero-lead">
                One roti is a gesture. Nine hundred rotis, arriving at
                the same gate at the same time every day, is a feed supply.
                We measure the initiative in what actually reaches the
                gaushala.
              </p>


              <div className="impactx-transit">

                <span>MEASURED ROUTE</span>

                <div>
                  <strong>HOUSEHOLD</strong>
                  <i>→</i>

                  <strong>COLLECTION BOX</strong>
                  <i>→</i>

                  <strong>DAILY ROUTE</strong>
                  <i>→</i>

                  <strong className="impactx-transit-final">
                    GAUSHALA
                  </strong>
                </div>

              </div>


              <div className="impactx-measure-note">

                <span />

                <div>
                  <strong>
                    We measure what physically reaches the gaushala.
                  </strong>

                  <p>
                    Figures on this page are illustrative placeholders until
                    verified collection data is inserted.
                  </p>
                </div>

              </div>

            </div>


            <div className="impactx-evidence">

              <div className="impactx-evidence-image">

                <Image
                  src="/images/impact-box.jpg"
                  alt="Pehli Roti collection point"
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 40vw"
                />

                <span>
                  FIELD EVIDENCE · COLLECTION POINT
                </span>

              </div>

              <div className="impactx-evidence-meta">
                <span>NETWORK EVIDENCE</span>

                <p>
                  Every collection point represents one residential community
                  contributing to a daily gaushala route.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          NUMBERS LEDGER
      ====================================================== */}

      <section className="impactx-numbers">
        <div className="impactx-shell">

          <div className="impactx-register-head">

            <div>
              <span />
              VERIFIED IMPACT LEDGER
            </div>

            <p>
              Figures as of [date]. Collection logs available on request.
            </p>

          </div>


          <div className="impactx-primary-evidence">

            <div className="impactx-primary-number">

              <span>CUMULATIVE PHYSICAL DELIVERY</span>

              <strong>162,000</strong>

              <h2>
                Rotis delivered since March 2026
              </h2>

              <p>
                The initiative is measured in the food that completes the
                journey from participating households to the gaushala.
              </p>


              <div className="impactx-tonnage">

                <span>
                  PHYSICAL FEED DELIVERED
                </span>

                <strong>
                  6.5 tonnes
                </strong>

              </div>

            </div>


            <div className="impactx-route-photo">

              <div className="impactx-route-photo-frame">

                <Image
                  src="/images/how-route.jpg"
                  alt="Pehli Roti daily collection vehicle"
                  fill
                  sizes="(max-width: 900px) 100vw, 40vw"
                />

                <div className="impactx-route-photo-label">
                  DAILY COLLECTION ROUTE
                </div>

              </div>

              <p>
                Collection routes turn small individual contributions into
                dependable daily delivery.
              </p>

            </div>

          </div>


          <div className="impactx-stat-ledger">

            {impactStats.map((item) => (
              <article
                key={item.index}
                className="impactx-stat"
              >
                <span className="impactx-stat-category">
                  {item.index} · {item.category}
                </span>

                <strong>
                  {item.value}
                </strong>

                <p>
                  {item.label}
                </p>
              </article>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          DAILY EFFECT
      ====================================================== */}

      <section className="impactx-daily">
        <div className="impactx-shell">

          <div className="impactx-daily-grid">

            <div className="impactx-daily-copy">

              <div className="impactx-eyebrow">
                DAILY EFFECT · दैनिक प्रतिफल
              </div>

              <h2>
                Three rotis per cow,
                <em> every day.</em>
              </h2>

              <p>
                Our partner gaushala is home to 300 cows. The eight
                societies on our route deliver about 900 rotis a day
                between them, which works out to roughly three rotis per
                cow, daily, at a value of about ₹21,000 a month in feed
                the shelter no longer has to buy.
              </p>


              <blockquote>
                No household on the route gives more than one roti.
              </blockquote>

            </div>


            <div className="impactx-equation">

              <div className="impactx-equation-head">
                <span>OPERATIONAL EQUATION</span>
                <small>DAILY RATION VIEW</small>
              </div>


              <strong className="impactx-equation-hero">
                3 ROTIS / COW / DAY
              </strong>


              <dl>

                <div>
                  <dt>Individual household</dt>
                  <dd>1 roti / day</dd>
                </div>

                <div>
                  <dt>Collective intake</dt>
                  <dd>900 rotis / day</dd>
                </div>

                <div>
                  <dt>Partner gaushala</dt>
                  <dd>300 cows</dd>
                </div>

                <div>
                  <dt>Monthly feed value</dt>
                  <dd>₹21,000 / month</dd>
                </div>

              </dl>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          WHY IT WORKS
      ====================================================== */}

      <section className="impactx-why">
        <div className="impactx-shell">

          <div className="impactx-section-heading">

            <div className="impactx-eyebrow">
              WHY IT WORKS
            </div>

            <h2>
              Built on participation,
              <em> not fundraising.</em>
            </h2>

            <p>
              Most food-support initiatives ask households for money and
              convert it into feed. We skip that step. Households give the
              food directly, in a form they already produce, at no cost to
              themselves.
            </p>

            <p>
              That has two consequences. Participation stays high, because
              the ask never grows. And supply stays steady, because it is not
              tied to a donation cycle. In 180 days of collection, we have
              not missed one.
            </p>

          </div>


          <div className="impactx-flow-comparison">

            <div className="impactx-flow impactx-flow-muted">

              <span>CONVENTIONAL SUPPORT FLOW</span>

              <div>
                <b>HOUSEHOLD</b>
                <i>→</i>
                <b>MONEY</b>
                <i>→</i>
                <b>FUNDRAISING</b>
                <i>→</i>
                <b>PROCUREMENT</b>
                <i>→</i>
                <b>FEED</b>
              </div>

            </div>


            <div className="impactx-flow impactx-flow-direct">

              <span>PEHLI ROTI FLOW</span>

              <div>
                <b>HOUSEHOLD</b>
                <i>→</i>
                <b>ROTI</b>
                <i>→</i>
                <b>COLLECTION</b>
                <i>→</i>
                <b>GAUSHALA</b>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          UNIT OF SCALE
      ====================================================== */}

      <section className="impactx-scale">
        <div className="impactx-shell">

          <div className="impactx-section-heading">

            <div className="impactx-eyebrow">
              THE UNIT OF SCALE · विस्तार
            </div>

            <h2>
              One box. One society.
              <em> One daily contribution.</em>
            </h2>

          </div>


          <div className="impactx-scale-steps">

            <div className="impactx-scale-line" />

            {scaleSteps.map((step) => (
              <article
                key={step.number}
                className="impactx-scale-step"
              >
                <strong>
                  {step.number}
                </strong>

                <span />

                <h3>
                  {step.title}
                </h3>

                <p>
                  {step.body}
                </p>

              </article>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          BEYOND THE ROTI
      ====================================================== */}

      <section className="impactx-beyond">
        <div className="impactx-shell">

          <div className="impactx-section-heading">

            <div className="impactx-eyebrow">
              BEYOND THE ROTI · व्यापक प्रभाव
            </div>

            <h2>
              What else
              <em> this does.</em>
            </h2>

          </div>


          <div className="impactx-effects">

            {widerEffects.map((effect, index) => (
              <article key={effect.title}>

                <span>
                  0{index + 1} · {effect.label}
                </span>

                <h3>
                  {effect.title}
                </h3>

                <p>
                  {effect.body}
                </p>

              </article>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          METHODOLOGY
      ====================================================== */}

      <section className="impactx-methodology">
        <div className="impactx-shell">

          <div className="impactx-method-frame">

            <div className="impactx-method-head">

              <div>

                <div className="impactx-eyebrow">
                  METHODOLOGY · गणना प्रणाली
                </div>

                <h2>
                  Our assumptions.
                </h2>

                <p>
                  We would rather show our working than round up.
                </p>

              </div>


              <a
                href="/documents/collection-log.pdf"
                className="impactx-download"
              >
                Download our collection log
                <span>→</span>
              </a>

            </div>


            <div className="impactx-method-grid">

              {methodology.map((item) => (
                <article key={item.number}>

                  <span>
                    {item.number}.
                  </span>

                  <p>
                    <strong>
                      {item.title}:
                    </strong>{" "}
                    {item.body}
                  </p>

                </article>
              ))}

            </div>


            <div className="impactx-data-warning">

              <strong>
                BUILD NOTE
              </strong>

              <p>
                The figures currently shown on this page are illustrative.
                Replace them with verified collection data before public
                publication.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="impactx-cta">
        <div className="impactx-shell">

          <div className="impactx-cta-frame">

            <div>

              <span>
                SOCIETY EXTENSION · आवासीय सहभागिता
              </span>

              <h2>
                Bring the network
                <em> to your society.</em>
              </h2>

              <p>
                Every new collection point adds a full society&apos;s daily
                contribution to the gaushala.
              </p>

              <small>
                Route availability and society approval are checked before
                installation.
              </small>

            </div>


            <Link
              href="/request-a-box"
              className="impactx-cta-button action-btn"
            >
              <span>
                Request a Roti Box
              </span>

              <span className="action-btn-arrow">
                →
              </span>
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}