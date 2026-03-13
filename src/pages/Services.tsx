import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import CTABlock from '@/components/CTABlock';
import { ArrowRight, Thermometer, Snowflake, Droplets, Wind, Wrench, Calendar } from 'lucide-react';

const services = [
  {
    title: 'Furnace Install and Repair',
    description: 'Professional heating system installation, repair, and maintenance services.',
    icon: Thermometer,
    link: '/heating',
    features: ['New installations', 'Emergency repairs', 'Annual maintenance', 'Energy efficiency upgrades']
  },
  {
    title: 'Air Conditioner Install and Repair',
    description: 'Complete cooling solutions for year-round comfort.',
    icon: Snowflake,
    link: '/cooling',
    features: ['Central AC systems', 'Ductless mini-splits', 'Seasonal tune-ups', 'Refrigerant services']
  },
  {
    title: 'Tank and Tankless Water Heaters',
    description: 'Hot water solutions for every home and budget.',
    icon: Droplets,
    link: '/water-heaters',
    features: ['Tankless installations', 'Tank replacements', 'Water heater repairs', 'Energy efficient models']
  },
  {
    title: 'Indoor Air Quality Solutions',
    description: 'Improve your home\'s air quality for health and comfort.',
    icon: Wind,
    link: '/indoor-air-quality',
    features: ['Air purification systems', 'Humidity control', 'Advanced filtration', 'UV sterilization']
  },
  {
    title: 'Gas Lines and Safety Checks',
    description: 'Safe and compliant gas line installation and inspection.',
    icon: Wrench,
    link: '/contact',
    features: ['Gas line installation', 'Safety inspections', 'Leak detection', 'Code compliance']
  },
  {
    title: 'Annual Maintenance Plans',
    description: 'Keep your systems running efficiently year-round.',
    icon: Calendar,
    link: '/contact',
    features: ['Scheduled maintenance', 'Priority service', 'Extended warranties', 'Cost savings']
  }
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "HVAC Services",
  "description": "Heating, cooling, water heaters, IAQ, gas lines, and maintenance. Honest pricing and certified work.",
  "provider": {
    "@type": "Organization",
    "name": "Brightways Mechanical",
    "telephone": "+16476332335"
  },
  "areaServed": "Greater Toronto Area, Ontario, Canada"
};

export default function Services() {
  return (
    <Layout 
      title="HVAC Services in the GTA | Brightways Mechanical"
      description="Heating, cooling, water heaters, IAQ, gas lines, and maintenance. Honest pricing and certified work."
    >
      <SEO 
        title="HVAC Services in the GTA | Brightways Mechanical"
        description="Heating, cooling, water heaters, IAQ, gas lines, and maintenance. Honest pricing and certified work."
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="py-16 md:py-24 hero-gradient">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Complete HVAC Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Install, repair, and maintenance for homes and small commercial spaces.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="card-elevated group hover:shadow-lg transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    {service.link !== '/contact' ? (
                      <Link 
                        to={service.link}
                        className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                      >
                        Learn More
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    ) : (
                      <Link 
                        to={service.link}
                        className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                      >
                        Get Quote
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Service Process</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-3">Assessment</h3>
                <p className="text-muted-foreground">
                  We evaluate your needs and provide transparent options with upfront pricing.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3">Professional Work</h3>
                <p className="text-muted-foreground">
                  Certified technicians complete the work safely and efficiently with quality materials.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3">Follow-up</h3>
                <p className="text-muted-foreground">
                  Complete walkthrough, warranty explanation, and ongoing support when needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABlock 
        title="Get a tailored quote"
        subtitle="Tell us about your project and we'll provide options that fit your needs and budget."
        primaryText="Get a Free Quote"
        secondaryText="Book Service Call"
      />
    </Layout>
  );
}