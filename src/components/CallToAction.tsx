
import { ArrowRight, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto">
            Join thousands of satisfied homeowners who found their perfect property with us. 
            Start your journey today.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              size="lg" 
              variant="secondary"
              className="h-14 px-8 text-lg font-semibold hover:scale-105 transition-transform"
            >
              Start Your Search
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <div className="flex items-center gap-6 text-primary-foreground/90">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span className="font-medium">(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <span className="font-medium">hello@dreamhomes.com</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-primary-foreground/80">
            <div>
              <div className="text-3xl font-bold mb-2">10,000+</div>
              <div>Properties Listed</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">5,000+</div>
              <div>Happy Homeowners</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">15+</div>
              <div>Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
