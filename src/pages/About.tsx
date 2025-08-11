import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import CTABlock from '@/components/CTABlock';
import { Shield, Eye, Heart, Award, GraduationCap, Wrench } from 'lucide-react';

const values = [
  {
    title: 'Safety',
    description: 'Permits, code compliance, and proper commissioning.',
    icon: Shield
  },
  {
    title: 'Clarity',
    description: 'No surprises. Options and pricing explained in advance.',
    icon: Eye
  },
  {
    title: 'Care',
    description: 'Respect for your home with tidy setups and clean finishes.',
    icon: Heart
  }
];

const credentials = [
  {
    title: 'Gas Technician 2',
    description: 'Licensed for gas appliance installation and service',
    icon: Wrench
  },
  {
    title: '313D Refrigeration Mechanic',
    description: 'Certified for air conditioning and refrigeration work',
    icon: Wrench
  },
  {
    title: 'Mechanical Engineering',
    description: 'Bachelor\'s degree providing technical foundation',
    icon: GraduationCap
  },
  {
    title: 'TSSA Licensed',
    description: 'Technical Standards and Safety Authority approved',
    icon: Award
  }
];

const stats = [
  { number: '5+', label: 'Years Experience' },
  { number: '1500+', label: 'Installs Completed' },
  { number: '100%', label: 'Customer Focused' },
  { number: '7/7', label: 'Days Available' }
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Brightways Mechanical",
  "description": "Certified GTA HVAC professionals focused on safety, clarity, and care.",
  "url": "https://brightways.ca",
  "areaServed": "Greater Toronto Area, Ontario, Canada",
  "founder": {
    "@type": "Person",
    "jobTitle": "HVAC Technician",
    "hasCredential": [
      "Gas Technician 2",
      "313D Refrigeration Mechanic",
      "Bachelor of Mechanical Engineering"
    ]
  }
};

export default function About() {
  return (
    <Layout 
      title="About Us | Brightways Mechanical"
      description="Certified GTA HVAC professionals focused on safety, clarity, and care."
    >
      <SEO 
        title="About Us | Brightways Mechanical"
        description="Certified GTA HVAC professionals focused on safety, clarity, and care."
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="py-16 md:py-24 hero-gradient">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Brightways Mechanical
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Local, certified, and customer first.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="prose prose-lg mx-auto text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  Brightways Mechanical is an Ontario based HVAC company serving the GTA. Our team holds Gas Technician 2 and 313D Refrigeration Mechanic certifications and is backed by mechanical engineering education. We focus on clean work, clear communication, and dependable aftercare.
                </p>
                <p className="text-lg leading-relaxed mt-6">
                  We believe that quality HVAC service shouldn't come with surprises. That's why we explain all options and pricing upfront, complete work to the highest standards, and stand behind everything we do with comprehensive warranties and ongoing support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every service call and installation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="card-elevated h-full text-center">
                  <CardHeader>
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 text-primary mb-4">
                      <Icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-xl text-primary">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-16">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Credentials & Certifications</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional qualifications ensuring safe, compliant work
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {credentials.map((credential, index) => {
              const Icon = credential.icon;
              return (
                <Card key={index} className="card-elevated text-center">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 text-accent mb-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold mb-2">{credential.title}</h3>
                    <p className="text-sm text-muted-foreground">{credential.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">By the Numbers</h2>
            <p className="text-lg text-muted-foreground">
              Self-reported figures reflecting our commitment to service
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground italic">
              * Figures are self-reported and represent our experience to date
            </p>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Serving the Greater Toronto Area</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
              {[
                'Toronto', 'Mississauga', 'Brampton', 'Markham',
                'Vaughan', 'Richmond Hill', 'Oakville', 'Burlington',
                'Milton', 'Whitby', 'Ajax', 'Pickering'
              ].map((city, index) => (
                <div key={index} className="p-3 bg-muted rounded-lg text-center">
                  <span className="font-medium">{city}</span>
                </div>
              ))}
            </div>
            
            <p className="text-muted-foreground">
              Don't see your city? Contact us with your postal code to confirm service availability.
            </p>
          </div>
        </div>
      </section>

      <CTABlock 
        title="Ready to work with Brightways?"
        subtitle="Experience the difference that certified expertise and genuine care make for your home's comfort."
        primaryText="Get Started"
        secondaryText="Contact Us"
      />
    </Layout>
  );
}