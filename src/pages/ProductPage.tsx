import { Link, useParams } from 'react-router-dom'
import { company, fireDoorFeatures, products } from '../data/site'
import { ArrowIcon } from '../components/ArrowIcon'

export function ProductPage() {
  const { slug } = useParams()
  const product = products.find((item) => item.slug === slug)

  if (!product) {
    return (
      <section className="product-not-found">
        <p className="eyebrow">Product not found</p>
        <h1>Let’s find the right solution.</h1>
        <Link className="button button-dark" to="/#expertise">Back to products <ArrowIcon /></Link>
      </section>
    )
  }

  return (
    <section className="product-detail-page">
      <Link className="product-back-link" to="/#expertise">← All products</Link>
      <div className="product-detail-hero">
        <div className="product-detail-copy">
          <p className="product-detail-number">Product {product.number}</p>
          <h1>{product.title}</h1>
          <p className="product-detail-description">{product.description}</p>
          <p className="product-detail-spec">{product.detail}</p>
          <a className="button button-dark" href={`mailto:${company.email}?subject=${encodeURIComponent(`Enquiry about ${product.title}`)}`}>Enquire about this product <ArrowIcon diagonal /></a>
        </div>
        <img src={product.image} alt={product.imageAlt} />
      </div>
      {product.slug === 'fire-rated-doors' ? (
        <section className="fire-door-specs" aria-labelledby="fire-door-specs-title">
          <div className="fire-door-specs-heading">
            <p className="eyebrow"><span className="status-dot" /> Product details</p>
            <h2 id="fire-door-specs-title">Fire door specifications</h2>
            <p>Key construction details and fire-safety features at a glance.</p>
          </div>
          <div className="fire-door-specs-layout">
            <div className="spec-table-wrap">
              <table className="spec-table">
                <tbody>
                  <tr><th scope="row">Fire rating</th><td>Up to 120 minutes</td></tr>
                  <tr><th scope="row">Door leaf</th><td>46 mm thick; 0.8 mm or 1.2 mm galvanized steel skin to IS 277</td></tr>
                  <tr><th scope="row">Core</th><td>Rockwool, mineral wool, or honeycomb kraft paper</td></tr>
                  <tr><th scope="row">Frame</th><td>Galvanized steel, single or double rebate profile</td></tr>
                  <tr><th scope="row">Vision panel</th><td>5 mm clear or wired glass; circular or rectangular options</td></tr>
                  <tr><th scope="row">Finish</th><td>Zinc-phosphate primer with polyurethane or epoxy finish; powder coating available</td></tr>
                  <tr><th scope="row">Hardware</th><td>Fire-rated hinges, locks, handles, flush bolts, and compatible door closers</td></tr>
                </tbody>
              </table>
              <p className="spec-note">Final specifications depend on the selected door configuration and project requirements.</p>
            </div>
            <img className="fire-door-details-image" src="/images/fire-door-details.png" alt="Annotated illustration showing fire-rated door safety features including closer, tested hinges, vision panel, locks, and smoke seals" loading="lazy" />
          </div>
          <ul className="product-feature-list fire-door-feature-list">
            {fireDoorFeatures.map((feature) => <li key={feature}><span aria-hidden="true">✓</span>{feature}</li>)}
          </ul>
        </section>
      ) : product.slug === 'solar-water-heaters' ? (
        <section className="solar-details" aria-labelledby="solar-details-title">
          <div className="solar-details-copy">
            <p className="eyebrow"><span className="status-dot" /> Solar water heating</p>
            <h2 id="solar-details-title">Reliable hot water, powered by the sun.</h2>
            <p>High-performance collectors heat water in an insulated storage tank, helping reduce energy costs and carbon emissions for homes and businesses.</p>
            <ul className="product-feature-list">
              <li><span aria-hidden="true">✓</span>Automatic temperature control with backup heating for cloudy days</li>
              <li><span aria-hidden="true">✓</span>Durable, low-maintenance components</li>
              <li><span aria-hidden="true">✓</span>Custom system design, installation, and after-sales support</li>
            </ul>
          </div>
          <img className="solar-details-image" src="/images/solar-water-heater-details.png" alt="Solar water heating system showing the storage tank, solar collector, valves, and backup heater" loading="lazy" />
        </section>
      ) : product.slug === 'garbage-chute-systems' ? (
        <section className="chute-details" aria-labelledby="chute-details-title">
          <div className="chute-details-heading">
            <p className="eyebrow"><span className="status-dot" /> System options</p>
            <h2 id="chute-details-title">Configured for your building.</h2>
            <p>Choose the chute type, size, and material to suit your project.</p>
          </div>
          <div className="chute-details-layout">
            <div className="spec-table-wrap">
              <table className="spec-table">
                <tbody>
                  <tr><th scope="row">System types</th><td>Single/basic, twin, and dry-wet segregated chutes</td></tr>
                  <tr><th scope="row">Collection</th><td>Dry, wet, or separate collection streams</td></tr>
                  <tr><th scope="row">Diameter</th><td>450 mm</td></tr>
                  <tr><th scope="row">Material thickness</th><td>1.0 mm, 1.2 mm, or 1.5 mm options</td></tr>
                  <tr><th scope="row">Material</th><td>Stainless steel, including SS430 options</td></tr>
                  <tr><th scope="row">Custom systems</th><td>Combinations tailored to your required type, size, and material; linen chute systems are also available</td></tr>
                </tbody>
              </table>
              <p className="spec-note">Contact us with your requirements for a project-specific configuration.</p>
            </div>
            <img className="chute-details-image" src="/images/garbage-chute-details.png" alt="Diagram of a multi-floor garbage chute system, showing inlet doors, fire shutter, vent pipe, control line, sprinkler, and collection bins" loading="lazy" />
          </div>
        </section>
      ) : (
        <div className="product-detail-content">
          <div>
            <p className="eyebrow"><span className="status-dot" /> Designed around your project</p>
            <h2>A solution that fits your building.</h2>
            <p>Talk with our team about the right configuration, specifications, and support for your residential or commercial project.</p>
          </div>
        </div>
      )}
      <div className="product-next-step">
        <div><h2>Planning a project?</h2><p>Share your requirements and we’ll help you choose the right solution.</p></div>
        <a className="button button-light" href={`mailto:${company.email}`}>Contact our team <ArrowIcon diagonal /></a>
      </div>
    </section>
  )
}
