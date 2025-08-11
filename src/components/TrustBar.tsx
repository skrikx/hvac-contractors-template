import { Shield, DollarSign, Clock, Award } from 'lucide-react';

const trustItems = [
  {
    icon: Shield,
    title: 'Licensed Technicians',
    description: 'Certified professionals'
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description: 'No hidden fees'
  },
  {
    icon: Clock,
    title: 'Fast Response',
    description: '7 AM to 10 PM service'
  },
  {
    icon: Award,
    title: 'Warranty Support',
    description: 'Manufacturer backed'
  }
];

export default function TrustBar() {
  return (
    <section className="py-12 bg-muted/50">
      <div className="container px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-3">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}