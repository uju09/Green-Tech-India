import { Link } from 'react-router-dom'
import { ArrowIcon } from '../components/ArrowIcon'

export function NotFoundPage() {
  return (
    <section className="product-not-found">
      <p className="eyebrow">Page not found</p>
      <h1>Let’s find the right solution.</h1>
      <Link className="button button-dark" to="/">Back to home <ArrowIcon /></Link>
    </section>
  )
}
