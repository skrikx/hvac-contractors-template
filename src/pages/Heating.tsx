import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import FAQAccordion from '@/components/FAQAccordion';
import { Thermometer, Wrench, Calendar, Shield, ArrowRight } from 'lucide-react';
import heatingImage from '@/assets/heating-service.jpg';

const heatingServices = [
  {
    title: 'New Furnace Installation',
    description: 'Right sized equipment and clean duct connections for safe, efficient heat.',
    icon: Thermometer,
    features: ['Energy efficient models', 'Proper sizing calculations', 'Clean installations', 'Manufacturer warranties']
  },
  {
    title: 'Repair and Emergency Service',
    description: 'No heat or unusual noises. We diagnose and fix safely.',
    icon: Wrench,
    features: ['24/7 emergency service', 'Diagnostic expertise', 'Quality parts', 'Safety first approach']
  },
  {
    title: 'Annual Tune Up',
    description: 'Keep efficiency high and avoid mid winter surprises.',
    icon: Calendar,
    features: ['Comprehensive inspection', 'Cleaning and adjustments', 'Safety checks', 'Performance optimization']
  }
];

const whatToExpect = [
  'Upfront options and pricing',
  'Manufacturer warranty support',
  'Safe commissioning',
  'Post install walkthrough'
];

const faqItems = [
  {
    question: "How long does a replacement take?",
    answer: "Most single stage furnace swaps complete in one day, depending on site conditions."
  },
  {
    question: "What size furnace do I need?",
    answer: "We perform heat loss calculations to properly size your furnace for maximum efficiency and comfort."
  },
  {
    question: "Do you offer financing?",
    answer: "Yes, we offer flexible financing options to help make your new heating system affordable."
  },
  {
    question: "What brands do you install?",
    answer: "We work with leading manufacturers like Carrier, Trane, Lennox, and Goodman to provide reliable options."
  }
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Furnace Installation and Repair",
  "description": "Certified heating services for GTA homes. Safe installs, repairs, and annual tune ups.",
  "provider": {
    "@type": "Organization",
    "name": "Brightways Mechanical",
    "telephone": "+16476332335"
  },
  "areaServed": "Greater Toronto Area, Ontario, Canada"
};

export default function Heating() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <Layout 
      title="Furnace Installation and Repair | Brightways Mechanical"
      description="Certified heating services for GTA homes. Safe installs, repairs, and annual tune ups."
    >
      <SEO 
        title="Furnace Installation and Repair | Brightways Mechanical"
        description="Certified heating services for GTA homes. Safe installs, repairs, and annual tune ups."
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heatingImage})` }}
        ></div>
        <div className="absolute inset-0 hero-gradient opacity-90"></div>
        
        <div className="relative z-10 container px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Heating Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Efficient furnaces, clean installs, and reliable repair.
            </p>
          </div>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-16">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {heatingServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="card-elevated h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-orange-100 text-orange-600">
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

      {/* Split Section */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What to Expect</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Professional heating service with clear communication and quality workmanship.
              </p>
              
              <ul className="space-y-4">
                {whatToExpect.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                      <Shield className="h-3 w-3 text-primary" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Form */}
            <div>
              <Card className="card-elevated">
                <CardHeader>
                  <CardTitle>Request a Quote</CardTitle>
                  <CardDescription>
                    Tell us about your heating needs and we'll provide options.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" type="text" required />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" type="tel" required />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" required />
                    </div>
                    
                    <div>
                      <Label htmlFor="postal">Postal Code</Label>
                      <Input id="postal" type="text" required />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Describe Your Heating Needs</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us about your current system, issues, or installation needs..."
                        rows={4}
                      />
                    </div>
                    
                    <Button type="submit" className="btn-primary w-full">
                      Get Free Quote
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <FAQAccordion items={faqItems} title="Heating FAQ" />
    </Layout>
  );
}