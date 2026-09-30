import { Link } from 'react-router-dom'
import { products } from '../data/site'
import { ArrowIcon } from './ArrowIcon'

export function Expertise() {
  return (
    <section className="expertise-section" id="expertise">
      <h2 className="products-section-label">Our Products</h2>
      <div className="expertise-grid">
        {products.map((product, index) => (
          <article className={`expertise-pair ${index % 2 ? 'reverse' : ''}`} key={product.number}>
            <div className="expertise-copy">
              {product.slug !== 'fire-rated-doors' && <span className={`service-tag tag-${product.tone}`}><i /> {product.category}</span>}
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <span className="service-detail">{product.detail}</span>
              <Link className="button button-dark small-button" to={`/products/${product.slug}`}>Learn more <ArrowIcon /></Link>
            </div>
            <Link className="expertise-image-link" to={`/products/${product.slug}`} aria-label={`View ${product.title}`}>
              <img src={product.image} alt={product.imageAlt} loading="lazy" />
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
