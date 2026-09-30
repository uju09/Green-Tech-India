export function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="/#top" aria-label="Green Tech India home">
        <img className="brand-logo" src="/images/green-tech-india-logo.png" alt="Green Tech India" />
      </a>
      <nav className="main-nav" id="primary-navigation" aria-label="Main navigation">
        <a href="/#top">Home</a>
        <a href="/#about-us">About</a>
        <a href="/#expertise">Expertise</a>
        <a href="/#clients">Our clients</a>
      </nav>
      <div className="header-actions">
        <a className="header-cta" href="/brochure-green-tech-india.pdf" download>Download brochure <span aria-hidden="true">→</span></a>
      </div>
    </header>
  )
}
