import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import CTABlock from '@/components/CTABlock';
import { Droplets, Wrench, Calendar, Zap, Clock, DollarSign } from 'lucide-react';
import waterHeaterImage from '@/assets/water-heater-service.jpg';

const waterHeaterServices = [
  {
    title: 'Tankless Installation',
    description: 'Endless hot water and space saving designs.',
    icon: Droplets,
    features: ['Endless hot water', 'Space saving design', 'Energy efficient', 'Long lifespan']
  },
  {
    title: 'Standard Tank Replacement',
    description: 'Quick swaps with proper venting and code compliance.',
    icon: Wrench,
    features: ['Quick installation', 'Code compliant', 'Proper venting', 'Manufacturer warranty']
  },
  {
    title: 'Service and Flush',
    description: 'Descale and maintenance to extend life.',
    icon: Calendar,
    features: ['Descaling service', 'Anode rod replacement', 'Safety inspection', 'Performance optimization']
  }
];

const benefits = [
  {
    title: 'Tankless Benefits',
    items: ['Endless hot water supply', 'Up to 40% energy savings', 'Space saving wall mount', '20+ year lifespan'],
    icon: Zap
  },
  {
    title: 'Standard Tank Benefits',
    items: ['Lower upfront cost', 'Simple installation', 'Familiar technology', 'Reliable performance'],
    icon: Clock
  }
];

const comparisonData = [
  { feature: 'Hot Water Supply', tankless: 'Endless', tank: 'Limited by tank size' },
  { feature: 'Energy Efficiency', tankless: 'Up to 40% more efficient', tank: 'Standard efficiency' },
  { feature: 'Lifespan', tankless: '20+ years', tank: '8-12 years' },
  { feature: 'Space Required', tankless: 'Wall mounted', tank: 'Floor space needed' },
  { feature: 'Upfront Cost', tankless: 'Higher', tank: 'Lower' },
  { feature: 'Installation', tankless: 'More complex', tank: 'Straightforward' }
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Tank and Tankless Water Heaters",
  "description": "Professional installs and service with clear options and pricing.",
  "provider": {
    "@type": "Organization",
    "name": "Brightways Mechanical",
    "telephone": "+16476332335"
  },
  "areaServed": "Greater Toronto Area, Ontario, Canada"
};

export default function WaterHeaters() {
  return (
    <Layout 
      title="Tank and Tankless Water Heaters | Brightways Mechanical"
      description="Professional installs and service with clear options and pricing."
    >
      <SEO 
        title="Tank and Tankless Water Heaters | Brightways Mechanical"
        description="Professional installs and service with clear options and pricing."
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${waterHeaterImage})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/90 to-blue-600/90"></div>
        
        <div className="relative z-10 container px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Water Heaters
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Hot water solutions including tank and tankless systems.
            </p>
          </div>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-16">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Water Heater Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete hot water solutions for every home and budget
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {waterHeaterServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="card-elevated h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-cyan-100 text-cyan-600">
                        <Icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tankless vs. Tank Water Heaters</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Understanding the differences to make the best choice for your home
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4 font-semibold">Feature</th>
                    <th className="text-left p-4 font-semibold text-cyan-600">Tankless</th>
                    <th className="text-left p-4 font-semibold text-blue-600">Tank</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="border-b last:border-b-0">
                      <td className="p-4 font-medium">{row.feature}</td>
                      <td className="p-4 text-muted-foreground">{row.tankless}</td>
                      <td className="p-4 text-muted-foreground">{row.tank}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="card-elevated h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-xl">{benefit.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {benefit.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-accent mr-3"></div>
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Signs You Need Replacement */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Signs You Need a New Water Heater</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'No hot water or insufficient hot water',
                'Rusty or discolored water',
                'Strange noises from the tank',
                'Water pooling around the unit',
                'Age of unit (8+ years for tank)',
                'Rising energy bills'
              ].map((sign, index) => (
                <Card key={index} className="card-elevated">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-destructive/10 text-destructive flex items-center justify-center mb-4 mx-auto">
                      <span className="text-xl">⚠</span>
                    </div>
                    <p className="font-medium">{sign}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABlock 
        title="Ready for reliable hot water?"
        subtitle="Get expert advice on the best water heater solution for your home and budget."
        primaryText="Get a Free Quote"
        secondaryText="Schedule Consultation"
      />
    </Layout>
  );
}