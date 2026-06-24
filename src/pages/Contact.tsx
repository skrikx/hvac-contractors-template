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
import { Phone, Mail, Clock, MapPin, Send } from 'lucide-react';

const PHONE_DISPLAY = '(647) 633-2335';
const PHONE_TEL = 'tel:+16476332335';
const PUBLIC_EMAIL = 'contact@brightways.ca';
const LEAD_EMAIL = 'brightways@info.ca';

const contactMethods = [
  { title: 'Call Us', detail: PHONE_DISPLAY, description: '7 AM to 10 PM, 7 days a week', icon: Phone, href: PHONE_TEL },
  { title: 'Email', detail: PUBLIC_EMAIL, description: 'We review and respond by email', icon: Mail, href: `mailto:${PUBLIC_EMAIL}` },
  { title: 'Service Hours', detail: '7 AM – 10 PM', description: 'Available every day', icon: Clock },
  { title: 'Service Area', detail: 'Greater Toronto Area', description: 'Including nearby cities', icon: MapPin },
];

const faqItems = [
  { question: 'What information helps us review your request faster?', answer: 'A short description of what is happening, the affected rooms or areas, and the approximate age of your equipment if you know it.' },
  { question: 'What happens after I submit a quote request?', answer: 'We review your property details and service category, then contact you about the next step.' },
  { question: 'Do you charge for an estimate review?', answer: 'No. Submitting a quote estimate request through this form is free.' },
  { question: 'How will Brightways contact me?', answer: 'By phone, text, or email using the contact details you provide on the form.' },
];

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Brightways Mechanical',
  description: 'Request a home comfort quote estimate. Brightways will review the details and contact you about the next step.',
  mainEntity: {
    '@type': 'Organization',
    name: 'Brightways Mechanical',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: '+16476332335',
      email: PUBLIC_EMAIL,
      availableLanguage: 'en',
    },
  },
};

type FormState = {
  full_name: string;
  phone: string;
  email: string;
  postal_code: string;
  city: string;
  property_role: string;
  property_type: string;
  service_category: string;
  issue_summary: string;
  affected_area: string;
  system_age: string;
  timeline: string;
  consent_contact: boolean;
  consent_partner_share: boolean;
  consent_marketing: boolean;
};

const initialState: FormState = {
  full_name: '',
  phone: '',
  email: '',
  postal_code: '',
  city: '',
  property_role: '',
  property_type: '',
  service_category: '',
  issue_summary: '',
  affected_area: '',
  system_age: '',
  timeline: '',
  consent_contact: false,
  consent_partner_share: false,
  consent_marketing: false,
};

const REQUIRED_FIELDS: (keyof FormState)[] = [
  'full_name', 'phone', 'email', 'postal_code',
  'property_role', 'property_type', 'service_category',
  'issue_summary', 'timeline',
];

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRe = /^[+()\-\s\d]{7,}$/;
const postalRe = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;

function getQuery(name: string) {
  if (typeof window === 'undefined') return '';
  return new URLSearchParams(window.location.search).get(name) || '';
}

export default function Contact() {
  const [formData, setFormData] = useState<FormState>(initialState);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const { toast } = useToast();

  const setField = <K extends keyof FormState>(field: K, value: FormState[K]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const markTouched = (field: string) => setTouched((p) => ({ ...p, [field]: true }));

  const errors: Partial<Record<keyof FormState, string>> = {};
  for (const f of REQUIRED_FIELDS) {
    if (!String(formData[f]).trim()) errors[f] = 'Required';
  }
  if (formData.email && !emailRe.test(formData.email)) errors.email = 'Enter a valid email';
  if (formData.phone && !phoneRe.test(formData.phone)) errors.phone = 'Enter a valid phone';
  if (formData.postal_code && !postalRe.test(formData.postal_code.trim())) errors.postal_code = 'Enter a valid postal code (e.g. M1A 1A1)';
  if (!formData.consent_contact) errors.consent_contact = 'Required';
  if (!formData.consent_partner_share) errors.consent_partner_share = 'Required';

  const showErr = (f: keyof FormState) => (touched[f] || submitAttempted) && errors[f];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitAttempted(true);
    if (Object.keys(errors).length > 0) {
      toast({ title: 'Please complete the required fields', variant: 'destructive' });
      return;
    }

    const submittedAt = new Date().toISOString();
    const body = `New Brightways quote estimate request

Contact:
Name: ${formData.full_name}
Phone: ${formData.phone}
Email: ${formData.email}

Location:
Postal Code: ${formData.postal_code}
City: ${formData.city}

Property:
Role: ${formData.property_role}
Property Type: ${formData.property_type}

HVAC Need:
Service Category: ${formData.service_category}
Affected Area: ${formData.affected_area}
Approximate System Age: ${formData.system_age}
Timeline: ${formData.timeline}

Issue Summary:
${formData.issue_summary}

Consent:
Contact Consent: ${formData.consent_contact ? 'Yes' : 'No'}
Partner Share Consent: ${formData.consent_partner_share ? 'Yes' : 'No'}
Marketing Consent: ${formData.consent_marketing ? 'Yes' : 'No'}

Source:
Page: /contact
Submitted At: ${submittedAt}
UTM Source: ${getQuery('utm_source')}
UTM Medium: ${getQuery('utm_medium')}
UTM Campaign: ${getQuery('utm_campaign')}
FBCLID: ${getQuery('fbclid')}
GCLID: ${getQuery('gclid')}
`;

    const subject = 'New Brightways Quote Estimate Request';
    const href = `mailto:${LEAD_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;

    toast({
      title: 'Your request is ready to send',
      description: 'Please review and send the email that opens on your device.',
    });
  };

  return (
    <Layout
      title="Get a Home Comfort Quote Estimate | Brightways"
      description="Request a home comfort quote estimate from Brightways. Share your property and HVAC details and we will review and contact you about the next step."
    >
      <SEO
        title="Get a Home Comfort Quote Estimate | Brightways"
        description="Request a home comfort quote estimate from Brightways. Share your property and HVAC details and we will review and contact you about the next step."
        structuredData={structuredData}
      />

      {/* Hero */}
      <section className="py-16 md:py-24 hero-gradient">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get a Home Comfort Quote Estimate</h1>
            <p className="text-xl md:text-2xl mb-4 text-white/90">
              Tell us what's happening at the property. Brightways will review the details and help guide the next step.
            </p>
            <a href={PHONE_TEL} className="inline-flex items-center gap-2 text-white/90 hover:text-white text-lg font-medium transition-colors">
              <Phone className="h-5 w-5" />
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* Contact methods */}
      <section className="py-16">
        <div className="container px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, i) => {
              const Icon = method.icon;
              const Wrapper: any = method.href ? 'a' : 'div';
              const wProps = method.href ? { href: method.href } : {};
              return (
                <Wrapper key={i} {...wProps} className={method.href ? 'block' : ''}>
                  <Card className="card-elevated text-center h-full">
                    <CardContent className="p-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="font-semibold mb-2">{method.title}</h3>
                      <p className="font-medium text-primary mb-1 break-all">{method.detail}</p>
                      <p className="text-sm text-muted-foreground">{method.description}</p>
                    </CardContent>
                  </Card>
                </Wrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Card className="card-elevated">
                <CardHeader>
                  <CardTitle className="text-2xl">Quote Estimate Request</CardTitle>
                  <CardDescription>
                    Share a few details about the property and what's happening. Required fields are marked with *.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                    {/* Contact Details */}
                    <fieldset className="space-y-4">
                      <legend className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                        Contact Details
                      </legend>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="full_name">Full Name *</Label>
                          <Input
                            id="full_name"
                            value={formData.full_name}
                            onChange={(e) => setField('full_name', e.target.value)}
                            onBlur={() => markTouched('full_name')}
                            aria-invalid={!!showErr('full_name')}
                          />
                          {showErr('full_name') && <p className="text-sm text-destructive mt-1">{errors.full_name}</p>}
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setField('phone', e.target.value)}
                            onBlur={() => markTouched('phone')}
                            aria-invalid={!!showErr('phone')}
                          />
                          {showErr('phone') && <p className="text-sm text-destructive mt-1">{errors.phone}</p>}
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setField('email', e.target.value)}
                            onBlur={() => markTouched('email')}
                            aria-invalid={!!showErr('email')}
                          />
                          {showErr('email') && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
                        </div>
                        <div>
                          <Label htmlFor="postal_code">Postal Code *</Label>
                          <Input
                            id="postal_code"
                            placeholder="M1A 1A1"
                            value={formData.postal_code}
                            onChange={(e) => setField('postal_code', e.target.value)}
                            onBlur={() => markTouched('postal_code')}
                            aria-invalid={!!showErr('postal_code')}
                          />
                          {showErr('postal_code') && <p className="text-sm text-destructive mt-1">{errors.postal_code}</p>}
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="city">City</Label>
                        <Input id="city" value={formData.city} onChange={(e) => setField('city', e.target.value)} />
                      </div>
                    </fieldset>

                    {/* Property Details */}
                    <fieldset className="space-y-4">
                      <legend className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                        Property Details
                      </legend>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="property_role">I am the *</Label>
                          <Select value={formData.property_role} onValueChange={(v) => { setField('property_role', v); markTouched('property_role'); }}>
                            <SelectTrigger id="property_role" aria-invalid={!!showErr('property_role')}>
                              <SelectValue placeholder="Select role" />
                            </SelectTrigger>
                            <SelectContent>
                              {['Homeowner', 'Tenant', 'Property manager', 'Other'].map((o) => (
                                <SelectItem key={o} value={o}>{o}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          {showErr('property_role') && <p className="text-sm text-destructive mt-1">{errors.property_role}</p>}
                        </div>
                        <div>
                          <Label htmlFor="property_type">Property Type *</Label>
                          <Select value={formData.property_type} onValueChange={(v) => { setField('property_type', v); markTouched('property_type'); }}>
                            <SelectTrigger id="property_type" aria-invalid={!!showErr('property_type')}>
                              <SelectValue placeholder="Select property type" />
                            </SelectTrigger>
                            <SelectContent>
                              {['Detached home', 'Semi-detached', 'Townhome', 'Condo', 'Multi-unit property', 'Other'].map((o) => (
                                <SelectItem key={o} value={o}>{o}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          {showErr('property_type') && <p className="text-sm text-destructive mt-1">{errors.property_type}</p>}
                        </div>
                      </div>
                    </fieldset>

                    {/* HVAC Need */}
                    <fieldset className="space-y-4">
                      <legend className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                        HVAC Need
                      </legend>
                      <div>
                        <Label htmlFor="service_category">What do you need help with? *</Label>
                        <Select value={formData.service_category} onValueChange={(v) => { setField('service_category', v); markTouched('service_category'); }}>
                          <SelectTrigger id="service_category" aria-invalid={!!showErr('service_category')}>
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                          <SelectContent>
                            {[
                              'Cooling / AC', 'Heating', 'Water heater', 'Indoor air quality',
                              'Airflow / room comfort', 'Thermostat / controls', 'Seasonal inspection', 'Other HVAC concern',
                            ].map((o) => (
                              <SelectItem key={o} value={o}>{o}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {showErr('service_category') && <p className="text-sm text-destructive mt-1">{errors.service_category}</p>}
                      </div>
                      <div>
                        <Label htmlFor="issue_summary">Describe what is happening *</Label>
                        <Textarea
                          id="issue_summary"
                          rows={4}
                          placeholder="Tell us what changed, where, and when..."
                          value={formData.issue_summary}
                          onChange={(e) => setField('issue_summary', e.target.value)}
                          onBlur={() => markTouched('issue_summary')}
                          aria-invalid={!!showErr('issue_summary')}
                        />
                        {showErr('issue_summary') && <p className="text-sm text-destructive mt-1">{errors.issue_summary}</p>}
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="affected_area">Affected rooms or areas</Label>
                          <Input id="affected_area" value={formData.affected_area} onChange={(e) => setField('affected_area', e.target.value)} />
                        </div>
                        <div>
                          <Label htmlFor="system_age">Approximate system age</Label>
                          <Select value={formData.system_age} onValueChange={(v) => setField('system_age', v)}>
                            <SelectTrigger id="system_age"><SelectValue placeholder="Select age range" /></SelectTrigger>
                            <SelectContent>
                              {['Not sure', '0 to 5 years', '6 to 10 years', '11 to 15 years', '16+ years'].map((o) => (
                                <SelectItem key={o} value={o}>{o}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </fieldset>

                    {/* Timeline */}
                    <fieldset className="space-y-4">
                      <legend className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                        Timeline
                      </legend>
                      <div>
                        <Label htmlFor="timeline">When are you looking for support? *</Label>
                        <Select value={formData.timeline} onValueChange={(v) => { setField('timeline', v); markTouched('timeline'); }}>
                          <SelectTrigger id="timeline" aria-invalid={!!showErr('timeline')}>
                            <SelectValue placeholder="Select a timeline" />
                          </SelectTrigger>
                          <SelectContent>
                            {['Today', 'This week', 'Flexible', 'Just researching'].map((o) => (
                              <SelectItem key={o} value={o}>{o}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {showErr('timeline') && <p className="text-sm text-destructive mt-1">{errors.timeline}</p>}
                      </div>
                    </fieldset>

                    {/* Consent */}
                    <fieldset className="space-y-4">
                      <legend className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                        Consent
                      </legend>
                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="consent_contact"
                          checked={formData.consent_contact}
                          onCheckedChange={(c) => { setField('consent_contact', !!c); markTouched('consent_contact'); }}
                        />
                        <Label htmlFor="consent_contact" className="text-sm leading-snug">
                          I agree that Brightways may contact me about this request by phone, text, or email. *
                        </Label>
                      </div>
                      {showErr('consent_contact') && <p className="text-sm text-destructive">Please confirm contact consent</p>}

                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="consent_partner_share"
                          checked={formData.consent_partner_share}
                          onCheckedChange={(c) => { setField('consent_partner_share', !!c); markTouched('consent_partner_share'); }}
                        />
                        <Label htmlFor="consent_partner_share" className="text-sm leading-snug">
                          I agree that my request details may be shared with a local HVAC service partner for quote review or fulfillment. *
                        </Label>
                      </div>
                      {showErr('consent_partner_share') && <p className="text-sm text-destructive">Please confirm partner share consent</p>}

                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="consent_marketing"
                          checked={formData.consent_marketing}
                          onCheckedChange={(c) => setField('consent_marketing', !!c)}
                        />
                        <Label htmlFor="consent_marketing" className="text-sm leading-snug">
                          Send me homeowner comfort tips and service updates.
                        </Label>
                      </div>
                    </fieldset>

                    <Button type="submit" className="btn-primary w-full">
                      <Send className="h-4 w-4 mr-2" />
                      Request My Estimate
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      Submitting opens your email app with a prefilled message to Brightways. Please review and send to complete your request.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="card-elevated">
                <CardHeader>
                  <CardTitle>Prefer to Speak Directly?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <a href={PHONE_TEL} className="flex items-center space-x-3 p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold">Call Brightways</p>
                      <p className="text-primary font-medium">647-633-2335</p>
                    </div>
                  </a>
                  <a href={`mailto:${PUBLIC_EMAIL}`} className="flex items-center space-x-3 p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold">Email Brightways</p>
                      <p className="text-primary font-medium break-all">{PUBLIC_EMAIL}</p>
                    </div>
                  </a>
                </CardContent>
              </Card>

              <Card className="card-elevated">
                <CardHeader>
                  <CardTitle>What Happens Next?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      'We receive your quote request',
                      'We review the property details and service category',
                      'You are contacted about the next step',
                    ].map((step, i) => (
                      <div key={i} className="flex items-start space-x-3">
                        <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                          {i + 1}
                        </div>
                        <p className="text-sm">{step}</p>
                      </div>
                    ))}
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
