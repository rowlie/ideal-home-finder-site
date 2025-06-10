
import { Shield, Search, Heart, Users, Award, Clock } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Advanced Search",
    description: "Find properties with our powerful search filters and AI-powered recommendations."
  },
  {
    icon: Shield,
    title: "Verified Listings",
    description: "All properties are verified by our expert team to ensure accuracy and reliability."
  },
  {
    icon: Heart,
    title: "Save Favorites",
    description: "Create wishlists and get notified when similar properties become available."
  },
  {
    icon: Users,
    title: "Expert Guidance",
    description: "Work with certified real estate professionals throughout your journey."
  },
  {
    icon: Award,
    title: "Best Price",
    description: "We guarantee competitive pricing and help you negotiate the best deals."
  },
  {
    icon: Clock,
    title: "Quick Process",
    description: "Streamlined buying process that saves you time and reduces hassle."
  }
];

export const Features = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We make finding and buying your dream home simple, secure, and stress-free
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
