import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Phone, X } from 'lucide-react';
import logoFull from '@/assets/logo-full.png';
import logoIcon from '@/assets/logo-icon.png';

const PHONE_DISPLAY = '(647) 633-2335';
const PHONE_TEL = 'tel:+16476332335';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Heating', href: '/heating' },
  { name: 'Cooling', href: '/cooling' },
  { name: 'Water Heaters', href: '/water-heaters' },
  { name: 'Indoor Air Quality', href: '/indoor-air-quality' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({ children, title, description }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  if (title) {
    document.title = title;
  }
  if (description) {
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center" aria-label="Brightways Mechanical - Home">
            <img
              src={logoFull}
              alt="Brightways Mechanical"
              className="h-10 w-auto hidden sm:block"
              loading="eager"
            />
            <img
              src={logoIcon}
              alt="Brightways Mechanical"
              className="h-9 w-auto block sm:hidden"
              loading="eager"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6" aria-label="Main navigation">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.href
                    ? 'text-primary'
                    : 'text-muted-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={PHONE_TEL}
              className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              aria-label={`Call Brightways at ${PHONE_DISPLAY}`}
            >
              <Phone className="h-4 w-4" />
              <span className="font-medium">{PHONE_DISPLAY}</span>
            </a>
            <Link to="/contact">
              <Button className="btn-primary">Book Service</Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex items-center justify-between mb-6">
                <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                  <img
                    src={logoIcon}
                    alt="Brightways Mechanical"
                    className="h-9 w-auto"
                  />
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <nav className="flex flex-col space-y-4" aria-label="Mobile navigation">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-lg font-medium transition-colors hover:text-primary ${
                      location.pathname === item.href
                        ? 'text-primary'
                        : 'text-foreground'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t">
                  <a
                    href={PHONE_TEL}
                    className="flex items-center space-x-2 text-sm text-muted-foreground mb-4"
                    aria-label={`Call Brightways at ${PHONE_DISPLAY}`}
                  >
                    <Phone className="h-4 w-4" />
                    <span className="font-medium">{PHONE_DISPLAY}</span>
                  </a>
                  <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                    <Button className="btn-primary w-full">Book Service</Button>
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground">
        <div className="container px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <Link to="/" className="inline-block mb-4">
                <img
                  src={logoFull}
                  alt="Brightways Mechanical"
                  className="h-10 w-auto brightness-0 invert"
                />
              </Link>
              <p className="text-sm text-secondary-foreground/80 mb-4">
                Heating, Cooling, and Hot Water You Can Trust
              </p>
              <div className="space-y-2 text-sm">
                <a
                  href={PHONE_TEL}
                  className="flex items-center space-x-2 hover:text-primary transition-colors"
                  aria-label={`Call Brightways at ${PHONE_DISPLAY}`}
                >
                  <Phone className="h-4 w-4" />
                  <span>{PHONE_DISPLAY}</span>
                </a>
                <p>info@brightways.ca</p>
                <p>7 AM – 10 PM, 7 days a week</p>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/heating" className="hover:text-primary transition-colors">Heating</Link></li>
                <li><Link to="/cooling" className="hover:text-primary transition-colors">Cooling</Link></li>
                <li><Link to="/water-heaters" className="hover:text-primary transition-colors">Water Heaters</Link></li>
                <li><Link to="/indoor-air-quality" className="hover:text-primary transition-colors">Indoor Air Quality</Link></li>
              </ul>
            </div>

            {/* Service Areas */}
            <div>
              <h3 className="font-semibold mb-4">Service Areas</h3>
              <ul className="space-y-2 text-sm text-secondary-foreground/80">
                <li>Greater Toronto Area</li>
                <li>Mississauga</li>
                <li>Brampton</li>
                <li>Markham</li>
                <li>Vaughan</li>
                <li>Richmond Hill</li>
              </ul>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="font-semibold mb-4">Certifications</h3>
              <ul className="space-y-2 text-sm text-secondary-foreground/80">
                <li>Gas Technician 2</li>
                <li>313D Refrigeration Mechanic</li>
                <li>TSSA Licensed</li>
                <li>Bachelor of Mechanical Engineering</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-secondary-foreground/20 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-secondary-foreground/60">
              <p>&copy; {new Date().getFullYear()} Brightways Mechanical. All rights reserved.</p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <Link to="/privacy" className="hover:text-secondary-foreground transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="hover:text-secondary-foreground transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
