const clientSlots = Array.from({ length: 12 }, (_, index) => index + 1)

export function OurClients() {
  return (
    <section className="clients-section" id="clients">
      <p className="eyebrow centered-eyebrow"><span className="status-dot" /> Trusted partnerships</p>
      <h2>Our Clients</h2>
      <p className="clients-intro">We’re proud to work alongside respected builders, developers, and fire safety partners who share our commitment to safer, more sustainable spaces.</p>
      <div className="client-logo-grid" aria-label="Client logos">
        {clientSlots.map((slot) => (
          <div className="client-logo-slot" key={slot}>
            {slot === 1 ? (
              <img className="client-logo-image" src="/images/client-abhinav-group.png" alt="Abhinav Group" />
            ) : slot === 2 ? (
              <img className="client-logo-image" src="/images/client-goel-ganga.png" alt="Goel Ganga Developments" />
            ) : slot === 3 ? (
              <img className="client-logo-image" src="/images/client-sahyadri-associates.png" alt="Sahyadri Associates" />
            ) : slot === 4 ? (
              <img className="client-logo-image" src="/images/client-city-group.png" alt="City Group" />
            ) : slot === 5 ? (
              <img className="client-logo-image" src="/images/client-amanora.png" alt="Amanora Park Town" />
            ) : slot === 6 ? (
              <img className="client-logo-image" src="/images/client-rohan.png" alt="Rohan Builders and Developers" />
            ) : slot === 7 ? (
              <img className="client-logo-image" src="/images/client-s-contracts.png" alt="S Contracts Pvt Ltd" />
            ) : slot === 8 ? (
              <img className="client-logo-image" src="/images/client-gokhale.png" alt="Gokhale Constructions" />
            ) : slot === 9 ? (
              <img className="client-logo-image" src="/images/client-avani.png" alt="Avani" />
            ) : slot === 10 ? (
              <img className="client-logo-image" src="/images/client-vision-eternity.png" alt="Vision Eternity, Hinjewadi Pune" />
            ) : slot === 11 ? (
              <img className="client-logo-image" src="/images/client-mehetre.png" alt="Mehetre Promoters and Builders" />
            ) : slot === 12 ? (
              <img className="client-logo-image" src="/images/client-gaytri-constructions.png" alt="Gaytri Constructions" />
            ) : (
              <span className="client-logo-mark" aria-hidden="true">GTI</span>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
