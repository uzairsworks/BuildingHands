import {
  Wrench,
  Zap,
  Camera,
  Hammer,
  BadgeCheck,
  BadgeDollarSign,
  Clock,
  HeartHandshake,
  Facebook,
  Instagram,
  MessageCircle,
} from 'lucide-react';

export const siteConfig = {
  companyName: 'Building Hands',
  phone: '+971 58 572 6695',
  phoneNumber: '971585726695',
  phone2: '+971 50 842 7927',
  phoneNumber2: '971508427927',
  phones: ['+971 58 572 6695', '+971 50 842 7927'],
  email: 'info@buildinghands.ae',
  address: 'Dubai, UAE',
  serviceHours: 'Mon-Sat, 9:00 AM - 6:00 PM',
  tagline: 'Reliable maintenance services for homes and businesses.',
};

export const navLinks = [
  { title: 'Home', href: '#home' },
  { title: 'Services', href: '#services' },
  { title: 'Why Us', href: '#why-us' },
  { title: 'Projects', href: '#projects' },
  { title: 'Testimonials', href: '#testimonials' },
  { title: 'FAQ', href: '#faq' },
  { title: 'Contact', href: '#contact' },
];

export const heroContent = {
  headline: 'Expert Plumbing, Electrical, and Camera Installation Services',
  subheadline: 'Building Hands delivers fast, reliable, and professional maintenance solutions for homes and businesses in Dubai.',
  cta1: 'Request a Visit',
  cta2: 'Call or WhatsApp Now',
  badges: [
    'Certified Technicians',
    'Same Day Service (Subject to Availability)',
    'Trusted by Homeowners & Businesses',
  ],
};

export const servicesOverview = [
  {
    title: 'Plumbing',
    icon: Wrench,
    description: 'From leaky faucets to complete pipe replacements, our certified plumbers ensure your water systems run smoothly and efficiently.',
    features: [
      'Leak detection and repair',
      'Drain cleaning & unclogging',
      'Fixture installation',
    ],
    href: '#services-plumbing'
  },
  {
    title: 'Electrical Work',
    icon: Zap,
    description: 'Safe and reliable electrical solutions, including wiring, fault fixing, and installation of lights, fans, and breakers.',
    features: [
      'Wiring and rewiring',
      'DB board installation',
      'Troubleshooting',
    ],
    href: '#services-electrical'
  },
  {
    title: 'CCTV & Security',
    icon: Camera,
    description: 'Enhance your security with professional CCTV camera installation, setup, and remote viewing configuration for any property.',
    features: [
      'HD camera installation',
      'DVR/NVR setup',
      'Remote access',
    ],
    href: '#services-security'
  },
  {
    title: 'General Maintenance',
    icon: Hammer,
    description: 'Your go-to solution for all handyman tasks, minor repairs, and preventive maintenance to keep your property in top condition.',
    features: [
      'Fixture fitting',
      'Minor civil work',
      'Preventive checks',
    ],
    href: '#services'
  },
];

export const detailedServices = {
  plumbing: {
    title: 'Comprehensive Plumbing Solutions',
    description: 'We handle all aspects of plumbing with precision and care, ensuring long-lasting solutions that prevent future problems and save you money.',
    items: [
      'Leak detection and fixing',
      'Pipe repair and replacement',
      'Bathroom and kitchen fittings',
      'Geyser installation and repair',
      'Water pump installation and repair',
      'Drain cleaning and high-pressure jetting',
    ],
    cta: 'Book a Plumbing Visit',
  },
  electrical: {
    title: 'Safe and Certified Electrical Work',
    description: 'Our experienced electricians prioritize safety and compliance, providing everything from minor repairs to complete office and house wiring.',
    items: [
      'Complete house and office wiring',
      'DB board and breaker installation',
      'Lights, fans, and switchboard fitting',
      'Troubleshooting and fault fixing',
      'Load management and safety checks',
      'Earth leakage testing',
    ],
    cta: 'Schedule an Electrical Inspection',
  },
  security: {
    title: 'Advanced Security Camera Systems',
    description: 'Protect your home or business with our state-of-the-art security solutions, customized to your needs and accessible from anywhere.',
    items: [
      'CCTV camera installation for home & business',
      'DVR / NVR setup and configuration',
      'Remote viewing setup on mobile and laptop',
      'System maintenance and troubleshooting',
      'IP and Analog camera systems',
      'Night vision and motion detection setup',
    ],
    cta: 'Plan Your Camera Installation',
  },
};

export const whyChooseUs = {
  title: 'Why Choose Building Hands',
  description: 'We are not just another maintenance company. We are your partners in keeping your property safe, functional, and efficient. Our commitment to quality and customer satisfaction sets us apart.',
  points: [
    {
      icon: BadgeCheck,
      title: 'Trained & Experienced',
      description: 'Our technicians are certified, skilled, and continuously trained.',
    },
    {
      icon: BadgeDollarSign,
      title: 'Transparent Pricing',
      description: 'Honest advice and clear, upfront quotes with no hidden fees.',
    },
    {
      icon: Clock,
      title: 'Fast & Reliable',
      description: 'Prompt response for urgent issues and commitment to schedules.',
    },
    {
      icon: Wrench,
      title: 'Quality Guaranteed',
      description: 'We use high-quality materials and tools for durable repairs.',
    },
    {
      icon: HeartHandshake,
      title: 'Customer Focused',
      description: 'Your satisfaction is our top priority, from start to finish.',
    },
  ],
};

export const projects = [
  { id: '1', title: 'Complete Apartment Rewiring', category: 'Electrical', description: 'Upgraded the entire electrical system for a 3-bedroom apartment.', imageId: 'project-1' },
  { id: '2', title: 'Office CCTV Setup', category: 'Cameras', description: 'Installed a 16-camera IP system with remote monitoring for a corporate office.', imageId: 'project-2' },
  { id: '3', title: 'Bathroom Plumbing Renovation', category: 'Plumbing', description: 'Replaced all pipes and installed new high-end fixtures.', imageId: 'project-3' },
  { id: '4', title: 'Commercial Lighting Installation', category: 'Electrical', description: 'Fitted energy-efficient LED lighting across a 2000 sq. ft. retail space.', imageId: 'project-4' },
  { id: '5', title: 'Emergency Geyser Replacement', category: 'Plumbing', description: 'Performed an urgent replacement of a faulty water heater.', imageId: 'project-5' },
  { id: '6', title: 'Home Security Integration', category: 'Cameras', description: 'Set up a comprehensive home security system with mobile alerts.', imageId: 'project-6' },
];

export const pricing = [
  {
    title: 'Basic Visit',
    price: 'Starting from AED 150',
    description: 'For quick fixes and diagnostics.',
    features: [
      'Inspection & Diagnosis',
      'Up to 1 hour of labor',
      'For a single, specific issue',
      'Honest assessment',
    ],
    cta: 'Request a Visit',
  },
  {
    title: 'Standard Maintenance',
    price: 'Custom Quote',
    description: 'For planned repairs and installations.',
    features: [
      'Perfect for installations or multiple tasks',
      'Scheduled at your convenience',
      'Transparent parts and labor costs',
      'Quality workmanship guarantee',
    ],
    cta: 'Get a Quote',
  },
  {
    title: 'Annual Service Plan',
    price: 'Contact for Plans',
    description: 'Preventive care for your property.',
    features: [
      'Scheduled preventive visits',
      'Priority service for emergencies',
      'Discounted rates on labor & parts',
      'Peace of mind all year round',
    ],
    cta: 'Explore Plans',
  },
];

export const testimonials = [
  {
    name: 'Ahmed K.',
    location: 'Downtown Dubai',
    quote: "Building Hands was incredibly professional and fast. They fixed our plumbing issue the same day I called. Highly recommended for their reliability!",
  },
  {
    name: 'Fatima S.',
    location: 'Jumeirah',
    quote: "The team installed a complete CCTV system at our office. The setup was clean, and the remote viewing works perfectly. Their attention to detail is impressive.",
  },
  {
    name: 'John D., Property Manager',
    location: 'Dubai Marina',
    quote: "I manage multiple properties and Building Hands is my go-to for all maintenance. They are trustworthy, their pricing is fair, and they always deliver quality work.",
  },
  {
    name: 'Maria G.',
    location: 'Arabian Ranches',
    quote: "Excellent electrical work. They rewired our entire villa, and the team was courteous and efficient. I feel much safer now. Thank you!",
  },
];

export const faqs = [
  {
    question: 'How quickly can you respond in an emergency?',
    answer: 'We offer same-day service for most urgent issues, subject to availability. Please call our hotline for the fastest response, and we will dispatch the first available technician.',
  },
  {
    question: 'Do you provide materials for the job?',
    answer: 'We can provide all necessary materials and will include the cost transparently in your quote. Alternatively, if you have already purchased materials, we are happy to use them.',
  },
  {
    question: 'Which areas in Dubai do you cover?',
    answer: 'We serve all major communities and areas within Dubai. Please contact us to confirm service availability at your specific location.',
  },
  {
    question: 'Do you offer a free inspection or quote?',
    answer: 'Yes, we offer free, no-obligation quotes for planned work like installations or renovations. For diagnostic visits, a basic inspection fee applies, which is often waived if you proceed with the repair.',
  },
  {
    question: 'How do I book an appointment?',
    answer: 'You can book an appointment by calling or sending a WhatsApp message to our number, or by filling out the contact form on our website. We will get back to you promptly to confirm the details.',
  },
  {
    question: 'Is your work guaranteed?',
    answer: 'Absolutely. We stand by the quality of our work and offer a warranty on both labor and the parts we provide. Customer satisfaction is our highest priority.',
  },
];

export const footerLinks = {
  quickLinks: [
    { title: 'Home', href: '#home' },
    { title: 'Services', href: '#services' },
    { title: 'Projects', href: '#projects' },
    { title: 'Contact', href: '#contact' },
  ],
  socials: [
    { icon: MessageCircle, href: `https://wa.me/971585726695` },
    { icon: Facebook, href: 'https://facebook.com' },
    { icon: Instagram, href: 'https://instagram.com' },
  ],
  whatsappNumbers: ['971585726695', '971508427927']
};
