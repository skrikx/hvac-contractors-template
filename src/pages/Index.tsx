import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import TrustBar from '@/components/TrustBar';
import CTABlock from '@/components/CTABlock';
import FAQAccordion from '@/components/FAQAccordion';
import { ArrowRight, Calendar, Thermometer, Snowflake, Droplets, Wind } from 'lucide-react';
import heroImage from '@/assets/hero-home.jpg';

const services = [
  {
    title: 'Heating',
    description: 'Furnace install, repair, and maintenance.',
    icon: Thermometer,
    link: '/heating',
    color: 'text-orange-500'
  },
  {
    title: 'Cooling',
    description: 'AC install and tune ups for efficient summers.',
    icon: Snowflake,
    link: '/cooling',
    color: 'text-blue-500'
  },
  {
    title: 'Water Heaters',
    description: 'Tank and tankless solutions with pro install.',
    icon: Droplets,
    link: '/water-heaters',
    color: 'text-cyan-500'
  },
  {
    title: 'Indoor Air Quality',
    description: 'Cleaner air with humidifiers and filtration.',
    icon: Wind,
    link: '/indoor-air-quality',
    color: 'text-green-500'
  }
];

const whyUsPoints = [
  {
    title: 'Certified Expertise',
    description: 'Gas Technician 2 and 313D certified. Backed by mechanical engineering education.'
  },
  {
    title: 'Transparent Options',
    description: 'We explain choices and costs before work begins.'
  },
  {
    title: 'Fast Response',
    description: 'Open 7 AM to 10 PM for service calls across the GTA.'
  }
];

const faqItems = [
  {
    question: "Do you service my area?",
    answer: "We cover the Greater Toronto Area and nearby cities. Share your postal code on the booking form to confirm."
  },
  {
    question: "Do you provide quotes?",
    answer: "Yes. We offer free, no obligation quotes for installs and replacements."
  },
  {
    question: "What are your service hours?",
    answer: "We're available 7 AM to 10 PM, 7 days a week for service calls and emergencies."
  },
  {
    question: "Are your technicians certified?",
    answer: "Yes, all our technicians hold Gas Technician 2 and 313D Refrigeration Mechanic certifications."
  }
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  "name": "Brightways Mechanical",
  "url": "https://brightways.ca",
  "areaServed": "Greater Toronto Area, Ontario, Canada",
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    "opens": "07:00",
    "closes": "22:00"
  }],
  "contactPoint": [{
    "@type": "ContactPoint",
    "contactType": "customer service",
    "telephone": "+1-XXX-XXX-XXXX",
    "availableLanguage": "en"
  }]
};

export default function Index() {
  return (
    <Layout 
      title="Brightways Mechanical | Trusted HVAC in the GTA"
      description="Professional heating, cooling, water heaters, and indoor air quality. Mobile friendly booking and quick response."
    >
      <SEO 
        title="Brightways Mechanical | Trusted HVAC in the GTA"
        description="Professional heating, cooling, water heaters, and indoor air quality. Mobile friendly booking and quick response."
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        
        <div className="relative z-10 container px-4 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Stay Comfortable All Year
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Heating, cooling, and hot water services done right in the GTA
            </p>
            <p className="text-sm mb-8 text-white/80">
              Certified technicians. Honest pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg rounded-xl font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                <Calendar className="h-5 w-5 mr-2" />
                Book Service
              </Button>
              <Button 
                variant="ghost" 
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg rounded-xl font-semibold transition-all duration-300"
              >
                Get a Free Quote
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Services Grid */}
      <section className="py-16">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete HVAC solutions for your home's comfort and efficiency
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link key={index} to={service.link} className="group">
                  <Card className="card-elevated group-hover:shadow-lg transition-all duration-300 h-full">
                    <CardHeader className="text-center">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 ${service.color} mb-4`}>
                        <Icon className="h-8 w-8" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-center">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Brightways</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional service backed by expertise and integrity
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyUsPoints.map((point, index) => (
              <div key={index} className="text-center">
                <Card className="card-elevated h-full">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">{point.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{point.description}</CardDescription>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock 
        title="Need help today?"
        subtitle="Describe the issue and pick a time that works."
        primaryText="Book Service"
        secondaryText="Get a Free Quote"
      />

      <FAQAccordion items={faqItems} />
    </Layout>
  );
}
