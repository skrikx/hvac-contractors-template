import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import CTABlock from '@/components/CTABlock';
import { Snowflake, Wrench, Calendar, Zap } from 'lucide-react';
import coolingImage from '@/assets/cooling-service.jpg';

const coolingServices = [
  {
    title: 'AC Installation',
    description: 'Load matched systems with tidy line sets and pads.',
    icon: Snowflake,
    features: ['Central air systems', 'Ductless mini-splits', 'Proper load calculations', 'Clean line set installation']
  },
  {
    title: 'Repair and Refrigerant Checks',
    description: 'Leak checks, electrical diagnostics, and performance testing.',
    icon: Wrench,
    features: ['Refrigerant leak detection', 'Electrical diagnostics', 'Component testing', 'Performance optimization']
  },
  {
    title: 'Seasonal Maintenance',
    description: 'Clean coils, filters, and verify airflow for summer efficiency.',
    icon: Calendar,
    features: ['Coil cleaning', 'Filter replacement', 'Airflow verification', 'System efficiency check']
  }
];

const benefits = [
  {
    title: 'Energy Efficiency',
    description: 'Modern AC systems can reduce cooling costs by up to 40%',
    icon: Zap
  },
  {
    title: 'Improved Comfort',
    description: 'Consistent temperatures and humidity control throughout your home',
    icon: Snowflake
  },
  {
    title: 'Better Air Quality',
    description: 'Advanced filtration removes allergens and pollutants',
    icon: Calendar
  }
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Air Conditioner Install and Repair",
  "description": "AC installs, repairs, and tune ups done right for GTA homes.",
  "provider": {
    "@type": "Organization",
    "name": "Brightways Mechanical",
    "telephone": "+16476332335"
  },
  "areaServed": "Greater Toronto Area, Ontario, Canada"
};

export default function Cooling() {
  return (
    <Layout 
      title="Air Conditioner Install and Repair | Brightways Mechanical"
      description="AC installs, repairs, and tune ups done right for GTA homes."
    >
      <SEO 
        title="Air Conditioner Install and Repair | Brightways Mechanical"
        description="AC installs, repairs, and tune ups done right for GTA homes."
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${coolingImage})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-cyan-600/90"></div>
        
        <div className="relative z-10 container px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Cooling Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Quiet, efficient air conditioning installs and repairs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-16">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Cooling Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional air conditioning solutions for your comfort
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coolingServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="card-elevated h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 text-blue-600">
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

      {/* Benefits Section */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Upgrade Your Cooling?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Modern air conditioning systems offer significant advantages
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <Card className="card-elevated h-full">
                    <CardHeader>
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 text-primary mb-4">
                        <Icon className="h-8 w-8" />
                      </div>
                      <CardTitle className="text-xl">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {benefit.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Installation Process</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-blue-500 text-white flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                  1
                </div>
                <h3 className="text-lg font-semibold mb-3">Assessment</h3>
                <p className="text-sm text-muted-foreground">
                  Load calculation and system sizing
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-blue-500 text-white flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                  2
                </div>
                <h3 className="text-lg font-semibold mb-3">Planning</h3>
                <p className="text-sm text-muted-foreground">
                  Equipment selection and installation plan
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-blue-500 text-white flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                  3
                </div>
                <h3 className="text-lg font-semibold mb-3">Installation</h3>
                <p className="text-sm text-muted-foreground">
                  Professional installation and testing
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-blue-500 text-white flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                  4
                </div>
                <h3 className="text-lg font-semibold mb-3">Commissioning</h3>
                <p className="text-sm text-muted-foreground">
                  System startup and performance verification
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABlock 
        title="Cool your home with confidence"
        subtitle="Professional air conditioning installation and repair services you can trust."
        primaryText="Get a Free Quote"
        secondaryText="Schedule Service"
      />
    </Layout>
  );
}