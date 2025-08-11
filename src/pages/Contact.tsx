import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import FAQAccordion from '@/components/FAQAccordion';
import { useToast } from '@/hooks/use-toast';
import { Phone, Mail, Clock, MapPin, Calendar, ArrowRight } from 'lucide-react';

const contactMethods = [
  {
    title: 'Call Us',
    detail: '+1 (XXX) XXX-XXXX',
    description: '7 AM to 10 PM, 7 days a week',
    icon: Phone
  },
  {
    title: 'Email',
    detail: 'info@brightways.ca',
    description: 'We respond within 24 hours',
    icon: Mail
  },
  {
    title: 'Service Hours',
    detail: '7 AM - 10 PM',
    description: 'Available every day',
    icon: Clock
  },
  {
    title: 'Service Area',
    detail: 'Greater Toronto Area',
    description: 'Including nearby cities',
    icon: MapPin
  }
];

const faqItems = [
  {
    question: "What information helps speed up service?",
    answer: "Model or age of equipment, error codes, and a short description of symptoms."
  },
  {
    question: "Do you provide emergency service?",
    answer: "Yes, we offer emergency service during our operating hours (7 AM to 10 PM, 7 days a week)."
  },
  {
    question: "How quickly can you respond?",
    answer: "We aim to respond to service requests within 2-4 hours during business hours."
  },
  {
    question: "Do you charge for estimates?",
    answer: "No, we provide free estimates for installations and replacements."
  }
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Brightways Mechanical",
  "description": "Book HVAC service or request a free quote. Fast response throughout the GTA.",
  "mainEntity": {
    "@type": "Organization",
    "name": "Brightways Mechanical",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "telephone": "+1-XXX-XXX-XXXX",
      "email": "info@brightways.ca",
      "availableLanguage": "en"
    }
  }
};

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    postalCode: '',
    serviceType: '',
    message: '',
    marketingConsent: false
  });
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.phone || !formData.email || !formData.postalCode) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Thanks! We will confirm shortly.",
      description: "We'll contact you within 2-4 hours to schedule your service."
    });

    // Reset form
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      postalCode: '',
      serviceType: '',
      message: '',
      marketingConsent: false
    });
  };

  return (
    <Layout 
      title="Contact Brightways Mechanical | Book HVAC Service"
      description="Book HVAC service or request a free quote. Fast response throughout the GTA."
    >
      <SEO 
        title="Contact Brightways Mechanical | Book HVAC Service"
        description="Book HVAC service or request a free quote. Fast response throughout the GTA."
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="py-16 md:py-24 hero-gradient">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Book Service or Request a Quote
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Tell us what you need. We respond quickly during 7 AM to 10 PM.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card key={index} className="card-elevated text-center">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold mb-2">{method.title}</h3>
                    <p className="font-medium text-primary mb-1">{method.detail}</p>
                    <p className="text-sm text-muted-foreground">{method.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <Card className="card-elevated">
                <CardHeader>
                  <CardTitle className="text-2xl">Book Your Service</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll contact you to confirm your appointment.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name and Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input 
                          id="fullName"
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => handleInputChange('fullName', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone *</Label>
                        <Input 
                          id="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                        />
                      </div>
                    </div>
                    
                    {/* Email and Postal Code */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input 
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="postalCode">Postal Code *</Label>
                        <Input 
                          id="postalCode"
                          type="text"
                          required
                          placeholder="M1A 1A1"
                          value={formData.postalCode}
                          onChange={(e) => handleInputChange('postalCode', e.target.value)}
                        />
                      </div>
                    </div>
                    
                    {/* Service Type */}
                    <div>
                      <Label htmlFor="serviceType">Service Type</Label>
                      <Select onValueChange={(value) => handleInputChange('serviceType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="heating">Heating</SelectItem>
                          <SelectItem value="cooling">Cooling</SelectItem>
                          <SelectItem value="water-heater">Water Heater</SelectItem>
                          <SelectItem value="indoor-air-quality">Indoor Air Quality</SelectItem>
                          <SelectItem value="maintenance">Maintenance</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    {/* Message */}
                    <div>
                      <Label htmlFor="message">Describe the issue</Label>
                      <Textarea 
                        id="message"
                        placeholder="Tell us about your HVAC needs, current issues, or installation requirements..."
                        rows={4}
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                      />
                    </div>
                    
                    {/* Marketing Consent */}
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="marketingConsent"
                        checked={formData.marketingConsent}
                        onCheckedChange={(checked) => handleInputChange('marketingConsent', checked as boolean)}
                      />
                      <Label htmlFor="marketingConsent" className="text-sm">
                        I agree to receive service updates by email
                      </Label>
                    </div>
                    
                    <Button type="submit" className="btn-primary w-full">
                      <Calendar className="h-4 w-4 mr-2" />
                      Book Now
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Side Contact Info */}
            <div className="space-y-6">
              <Card className="card-elevated">
                <CardHeader>
                  <CardTitle>Need Immediate Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3 p-4 bg-primary/5 rounded-lg">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold">Call us now</p>
                      <p className="text-primary font-medium">+1 (XXX) XXX-XXXX</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-4 bg-accent/5 rounded-lg">
                    <Mail className="h-5 w-5 text-accent" />
                    <div>
                      <p className="font-semibold">Email us</p>
                      <p className="text-accent font-medium">info@brightways.ca</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-elevated">
                <CardHeader>
                  <CardTitle>What Happens Next?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                        1
                      </div>
                      <p className="text-sm">We review your request and confirm availability</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                        2
                      </div>
                      <p className="text-sm">You'll receive a call within 2-4 hours</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                        3
                      </div>
                      <p className="text-sm">We schedule a convenient appointment time</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <FAQAccordion items={faqItems} title="Contact FAQ" />
    </Layout>
  );
}