import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Phone, X } from 'lucide-react';

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

  // Update document title and meta description
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
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">B</span>
            </div>
            <span className="font-secondary font-bold text-xl text-foreground">
              Brightways
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
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
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span className="font-medium">+1 (XXX) XXX-XXXX</span>
            </div>
            <Button className="btn-primary">Book Service</Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">B</span>
                  </div>
                  <span className="font-secondary font-bold text-xl">Brightways</span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <nav className="flex flex-col space-y-4">
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
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
                    <Phone className="h-4 w-4" />
                    <span className="font-medium">+1 (XXX) XXX-XXXX</span>
                  </div>
                  <Button className="btn-primary w-full">Book Service</Button>
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
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">B</span>
                </div>
                <span className="font-secondary font-bold text-xl">Brightways</span>
              </div>
              <p className="text-sm text-secondary-foreground/80 mb-4">
                Heating, Cooling, and Hot Water You Can Trust
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+1 (XXX) XXX-XXXX</span>
                </div>
                <p>info@brightways.ca</p>
                <p>7 AM to 10 PM, 7 days a week</p>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/heating" className="hover:text-accent transition-colors">Heating</Link></li>
                <li><Link to="/cooling" className="hover:text-accent transition-colors">Cooling</Link></li>
                <li><Link to="/water-heaters" className="hover:text-accent transition-colors">Water Heaters</Link></li>
                <li><Link to="/indoor-air-quality" className="hover:text-accent transition-colors">Indoor Air Quality</Link></li>
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
              <p>&copy; 2024 Brightways Mechanical. All rights reserved.</p>
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