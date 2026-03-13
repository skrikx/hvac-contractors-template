import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import CTABlock from '@/components/CTABlock';
import { Wind, Droplets, Shield, Zap, AlertTriangle, Heart } from 'lucide-react';
import airQualityImage from '@/assets/air-quality-service.jpg';

const iaqServices = [
  {
    title: 'Humidifiers',
    description: 'Balanced humidity for comfort and wood protection.',
    icon: Droplets,
    features: ['Whole home humidification', 'Bypass and powered models', 'Automatic controls', 'Prevents dry air issues']
  },
  {
    title: 'Air Filtration',
    description: 'High efficiency filters and media cabinets.',
    icon: Shield,
    features: ['HEPA filtration', 'Media air cleaners', 'Electrostatic filters', 'Allergen reduction']
  },
  {
    title: 'UV and Air Purifiers',
    description: 'Target airborne contaminants and odours.',
    icon: Zap,
    features: ['UV light sterilization', 'Photocatalytic oxidation', 'Odor elimination', 'Virus and bacteria control']
  }
];

const airQualityProblems = [
  {
    problem: 'Allergies and Asthma',
    solution: 'High-efficiency filtration and air purification',
    icon: AlertTriangle
  },
  {
    problem: 'Dry Air in Winter',
    solution: 'Whole-home humidification systems',
    icon: Droplets
  },
  {
    problem: 'Odors and VOCs',
    solution: 'UV purification and activated carbon filters',
    icon: Wind
  },
  {
    problem: 'Dust and Pet Dander',
    solution: 'Advanced filtration and regular maintenance',
    icon: Shield
  }
];

const healthBenefits = [
  'Reduced allergy and asthma symptoms',
  'Better sleep quality',
  'Fewer respiratory infections',
  'Improved skin and eye comfort',
  'Protection of wood furniture and floors',
  'Elimination of harmful airborne pathogens'
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Indoor Air Quality Solutions",
  "description": "Humidifiers, filtration, and purification for healthier air.",
  "provider": {
    "@type": "Organization",
    "name": "Brightways Mechanical",
    "telephone": "+16476332335"
  },
  "areaServed": "Greater Toronto Area, Ontario, Canada"
};

export default function IndoorAirQuality() {
  return (
    <Layout 
      title="Indoor Air Quality Solutions | Brightways Mechanical"
      description="Humidifiers, filtration, and purification for healthier air."
    >
      <SEO 
        title="Indoor Air Quality Solutions | Brightways Mechanical"
        description="Humidifiers, filtration, and purification for healthier air."
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${airQualityImage})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/90 to-teal-600/90"></div>
        
        <div className="relative z-10 container px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Indoor Air Quality
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Cleaner, healthier air for your home.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Air Quality Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive systems to improve the air you breathe every day
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {iaqServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="card-elevated h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-green-100 text-green-600">
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

      {/* Problems and Solutions */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Common Air Quality Issues</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We solve the air quality problems that affect your health and comfort
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {airQualityProblems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="card-elevated">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-red-100 text-red-600 flex-shrink-0">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-red-600">{item.problem}</h3>
                        <p className="text-muted-foreground">
                          <strong>Solution:</strong> {item.solution}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Health Benefits */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Health Benefits of Better Air Quality</h2>
              <p className="text-lg text-muted-foreground">
                Investing in air quality improvements can significantly impact your family's health and comfort
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {healthBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center p-4 bg-green-50 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
                    <Heart className="h-4 w-4" />
                  </div>
                  <span className="font-medium text-green-800">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Air Quality Matters */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Indoor Air Quality Matters</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="card-elevated">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">90%</div>
                  <p className="text-muted-foreground">
                    Time spent indoors where air quality directly affects health
                  </p>
                </CardContent>
              </Card>
              
              <Card className="card-elevated">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">2-5x</div>
                  <p className="text-muted-foreground">
                    Indoor air can be more polluted than outdoor air
                  </p>
                </CardContent>
              </Card>
              
              <Card className="card-elevated">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <p className="text-muted-foreground">
                    Your HVAC system can improve air quality around the clock
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <CTABlock 
        title="Breathe easier with cleaner air"
        subtitle="Let us assess your home's air quality and recommend the best solutions for your family's health."
        primaryText="Get Air Quality Assessment"
        secondaryText="Learn More"
      />
    </Layout>
  );
}