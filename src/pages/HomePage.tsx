import { AboutUs } from '../components/AboutUs'
import { Expertise } from '../components/Expertise'
import { Hero } from '../components/Hero'
import { Mission } from '../components/Mission'
import { OurClients } from '../components/OurClients'
import { WhyChooseUs } from '../components/WhyChooseUs'

export function HomePage() {
  return (
    <>
      <Hero />
      <Mission />
      <Expertise />
      <OurClients />
      <WhyChooseUs />
      <AboutUs />
    </>
  )
}
