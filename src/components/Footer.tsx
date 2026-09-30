import { company } from '../data/site'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand-block">
          <a className="brand footer-brand" href="/#top"><img className="brand-logo" src="/images/green-tech-india-logo.png" alt="Green Tech India" /></a>
          <p>{company.tagline}</p>
        </div>
        <div className="footer-column footer-contact"><h3>Contact</h3><address>{company.address}</address><a href={`mailto:${company.email}`}>{company.email}</a>{company.phone.map((number) => <a href={`tel:${number.replaceAll(' ', '')}`} key={number}>{number}</a>)}</div>
        <div className="footer-column footer-links"><h3>Explore</h3><a href="/#about-us">About us</a><a href="/#expertise">Our products</a><a href="/#clients">Our clients</a><a href="/brochure-green-tech-india.pdf" target="_blank" rel="noreferrer">Product brochure</a><a href="https://www.greentechindia.org" target="_blank" rel="noreferrer">{company.website}</a></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Green Tech India. All rights reserved.</span><a href="/#top">Back to top ↑</a></div>
    </footer>
  )
}
