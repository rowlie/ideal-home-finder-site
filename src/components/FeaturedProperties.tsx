
import { PropertyCard } from "./PropertyCard";

const properties = [
  {
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80&w=3011&auto=format&fit=crop",
    price: "$850,000",
    title: "Modern Family Home with Stunning Views",
    location: "Beverly Hills, CA",
    beds: 4,
    baths: 3,
    sqft: "2,500 sq ft",
    featured: true
  },
  {
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=5760&auto=format&fit=crop",
    price: "$1,200,000",
    title: "Luxury Downtown Penthouse",
    location: "Manhattan, NY",
    beds: 3,
    baths: 2,
    sqft: "1,800 sq ft"
  },
  {
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2965&auto=format&fit=crop",
    price: "$650,000",
    title: "Charming Suburban Retreat",
    location: "Austin, TX",
    beds: 3,
    baths: 2,
    sqft: "2,100 sq ft"
  }
];

export const FeaturedProperties = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured Properties
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our hand-picked selection of premium properties available now
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <div key={index} style={{ animationDelay: `${index * 150}ms` }}>
              <PropertyCard {...property} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
};
