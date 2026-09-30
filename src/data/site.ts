export const company = {
  name: 'Green Tech India',
  tagline: 'Your environmental partner',
  email: 'greentechindia84@gmail.com',
  phone: ['+91 91308 41973', '+91 85085 95097'],
  address:
    'Office 206, Aditya Paradise, Sr. No. 47/3/4, near Bharat Petrol Pump, Punewale, Pune 411033, Maharashtra, India',
  website: 'www.greentechindia.org',
}

export const products = [
  {
    number: '01',
    slug: 'fire-rated-doors',
    title: 'Fire rated doors',
    category: 'Building safety',
    description:
      'Reliable fire safety for commercial and residential buildings, made to meet your project requirements.',
    detail: 'Steel and wooden options · Up to 120 minute ratings',
    image: '/images/fire-rated-doors.png',
    imageAlt: 'Red double fire rated doors with vision panels in a modern building',
    icon: 'door',
    tone: 'blue',
  },
  {
    number: '02',
    slug: 'solar-water-heaters',
    title: 'Solar water heaters',
    category: 'Clean energy',
    description:
      'Use the sun to heat water efficiently, lower energy costs, and reduce your property’s carbon footprint.',
    detail: 'Residential and commercial · Installation and aftercare',
    image: '/images/solar-water-heater.png',
    imageAlt: 'Rooftop solar panels on a modern building',
    icon: 'sun',
    tone: 'yellow',
  },
  {
    number: '03',
    slug: 'garbage-chute-systems',
    title: 'Garbage chute systems',
    category: 'Building systems',
    description:
      'Make waste collection easier in high-rise buildings with durable, thoughtfully configured chute systems.',
    detail: 'Single, twin, and dry-wet segregation options',
    image: '/images/garbage-chute.png',
    imageAlt: 'Stainless steel garbage chute intake in a modern building',
    icon: 'chute',
    tone: 'green',
  },
] as const


export const fireDoorFeatures = [
  'Galvanised or stainless steel construction',
  'Rockwool, mineral wool, or honeycomb core options',
  'Tested to relevant IS, BS, and UL standards',
  'Vision panels, hardware, finishes, and custom sizing available',
]
