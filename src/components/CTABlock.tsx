import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';

interface CTABlockProps {
  title: string;
  subtitle?: string;
  primaryText?: string;
  secondaryText?: string;
  className?: string;
}

export default function CTABlock({ 
  title, 
  subtitle, 
  primaryText = "Book Service", 
  secondaryText = "Get a Free Quote",
  className = ""
}: CTABlockProps) {
  return (
    <section className={`py-16 ${className}`}>
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="card-elevated gradient-primary text-white text-center">
            <div className="p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {title}
              </h2>
              {subtitle && (
                <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                  {subtitle}
                </p>
              )}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button className="bg-white text-primary hover:bg-white/90 px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto">
                    <Calendar className="h-4 w-4 mr-2" />
                    {primaryText}
                  </Button>
                </Link>
                <a href="tel:+16476332335">
                  <Button 
                    variant="ghost" 
                    className="border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-xl font-semibold transition-all duration-300 w-full sm:w-auto"
                  >
                    {secondaryText}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
