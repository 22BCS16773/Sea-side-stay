import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import BookingForm from "@/components/BookingForm";
import TestimonialsSection from "@/components/TestimonialsSection";
import ApartmentCard, { ApartmentProps } from "@/components/ApartmentCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Wifi, Utensils, Waves, LifeBuoy, MapPin, Coffee } from "lucide-react";

// Sample apartments data
const featuredApartments: ApartmentProps[] = [
  {
    id: "1",
    name: "Deluxe Sea View Suite",
    description: "Luxurious suite with panoramic sea views, modern amenities, and a private balcony.",
    price: 180,
    capacity: 2,
    size: 45,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
    location: "Beachfront",
    features: ["Wi-Fi", "Kitchen", "Bathroom", "Air Conditioning", "TV", "Balcony"]
  },
  {
    id: "2",
    name: "Premium Family Apartment",
    description: "Spacious apartment ideal for families, with full kitchen and stunning coastal views.",
    price: 250,
    capacity: 4,
    size: 75,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
    location: "Second row",
    features: ["Wi-Fi", "Kitchen", "Bathroom", "Air Conditioning", "TV", "Washing Machine"]
  },
  {
    id: "3",
    name: "Executive Beach Studio",
    description: "Elegant studio with direct beach access, modern design, and premium finishes.",
    price: 150,
    capacity: 2,
    size: 35,
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800&h=600&fit=crop",
    location: "Beachfront",
    features: ["Wi-Fi", "Kitchenette", "Bathroom", "Air Conditioning", "TV"]
  }
];

// Feature items
const features = [
  {
    icon: <Waves className="h-8 w-8 text-primary" />,
    title: "Beachfront Location",
    description: "Direct access to pristine beaches with crystal clear waters."
  },
  {
    icon: <LifeBuoy className="h-8 w-8 text-primary" />,
    title: "Swimming Pools",
    description: "Relax by our infinity pools with stunning sea views."
  },
  {
    icon: <Utensils className="h-8 w-8 text-primary" />,
    title: "Gourmet Restaurant",
    description: "Enjoy exquisite local and international cuisine."
  },
  {
    icon: <Wifi className="h-8 w-8 text-primary" />,
    title: "High-Speed Wi-Fi",
    description: "Stay connected with complimentary high-speed internet."
  },
  {
    icon: <Coffee className="h-8 w-8 text-primary" />,
    title: "Beach Bar & Café",
    description: "Refreshing drinks and snacks served right on the beach."
  },
  {
    icon: <MapPin className="h-8 w-8 text-primary" />,
    title: "Prime Location",
    description: "Close to local attractions, shops, and restaurants."
  }
];

export default function Index() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Welcome Section */}
        <section id="welcome" className="section">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in [animation-delay:100ms]">
                <span className="text-sm text-primary font-medium uppercase tracking-wider">
                  Welcome to MareSereno
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                  Luxury Seaside Accommodations
                </h2>
                <p className="text-muted-foreground mb-6">
                  Nestled on the pristine Mediterranean coastline, MareSereno offers an exquisite collection 
                  of luxury apartments and hotel rooms. Our beachfront accommodations combine elegant 
                  design with modern comfort, creating the perfect setting for an unforgettable seaside getaway.
                </p>
                <p className="text-muted-foreground mb-8">
                  Whether you're seeking a romantic escape, a family vacation, or a peaceful retreat, 
                  our diverse range of accommodations caters to every preference and need. Each space 
                  is thoughtfully designed to provide panoramic sea views and direct beach access.
                </p>
                <Button asChild className="btn-primary">
                  <Link to="/about">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              
              <div className="relative animate-fade-in [animation-delay:300ms]">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&h=600&fit=crop"
                    alt="Seaside view" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-2/3 rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1545579133-99bb5ab189bd?w=400&h=300&fit=crop"
                    alt="Luxury apartment interior" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-6 -right-6 w-1/2 rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=400&h=300&fit=crop"
                    alt="Pool view" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Booking Form Section */}
        <section className="relative py-20 bg-gradient-to-r from-sea-light to-white dark:from-sea-dark dark:to-background overflow-hidden">
          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <span className="text-sm text-primary font-medium uppercase tracking-wider">
                  Book Your Stay
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                  Reserve Your Perfect Getaway
                </h2>
                <p className="text-muted-foreground mb-6">
                  Take the first step towards your dream vacation by checking availability and 
                  securing your preferred dates. Our simple booking process ensures a seamless 
                  experience from reservation to arrival.
                </p>
                <ul className="space-y-3 mb-8">
                  {["Instant confirmation", "Best rate guarantee", "Flexible cancellation options", "Secure payment"].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3">
                        <ArrowRight className="h-3 w-3" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <BookingForm />
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-primary/50 blur-3xl" />
            <div className="absolute bottom-10 right-40 w-48 h-48 rounded-full bg-sea-light blur-3xl" />
          </div>
        </section>
        
        {/* Featured Apartments */}
        <section className="section">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
              <span className="text-sm text-primary font-medium uppercase tracking-wider">
                Our Accommodations
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Featured Apartments
              </h2>
              <p className="text-muted-foreground">
                Discover our most popular accommodation options, each offering a perfect blend of comfort, 
                style, and breathtaking sea views.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredApartments.map((apartment, index) => (
                <div key={apartment.id} className="animate-fade-in" style={{ animationDelay: `${(index + 1) * 100}ms` }}>
                  <ApartmentCard apartment={apartment} />
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button asChild className="btn-primary">
                <Link to="/apartments">
                  View All Apartments <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <TestimonialsSection />
        
        {/* Features Section */}
        <section className="section bg-card">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
              <span className="text-sm text-primary font-medium uppercase tracking-wider">
                Hotel Amenities
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Experience The Best
              </h2>
              <p className="text-muted-foreground">
                Enjoy our premium facilities and services designed to make your stay exceptional.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="glass-card p-6 rounded-xl animate-fade-in flex flex-col items-center text-center"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="mb-4 p-3 rounded-full bg-primary/10">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="relative py-24 bg-primary/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready for Your Dream Vacation?
              </h2>
              <p className="text-muted-foreground mb-8">
                Book your stay today and experience the perfect blend of luxury, comfort, and stunning sea views.
              </p>
              <Button asChild size="lg" className="btn-primary">
                <Link to="/booking">Book Now</Link>
              </Button>
            </div>
          </div>
          
          {/* Decorative waves */}
          <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
            <svg 
              className="absolute bottom-0 w-full h-24 fill-background"
              preserveAspectRatio="none"
              viewBox="0 0 1440 74"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M0,37.1L40,34.5C80,32,160,27,240,29.6C320,32,400,42,480,42.9C560,44,640,35,720,32.1C800,30,880,34,960,40.8C1040,47,1120,56,1200,56.6C1280,57,1360,48,1400,43.3L1440,39.1L1440,74L1400,74C1360,74,1280,74,1200,74C1120,74,1040,74,960,74C880,74,800,74,720,74C640,74,560,74,480,74C400,74,320,74,240,74C160,74,80,74,40,74L0,74Z"
                className="animate-wave opacity-50"
              />
              <path 
                d="M0,37.1L40,34.5C80,32,160,27,240,29.6C320,32,400,42,480,42.9C560,44,640,35,720,32.1C800,30,880,34,960,40.8C1040,47,1120,56,1200,56.6C1280,57,1360,48,1400,43.3L1440,39.1L1440,74L1400,74C1360,74,1280,74,1200,74C1120,74,1040,74,960,74C880,74,800,74,720,74C640,74,560,74,480,74C400,74,320,74,240,74C160,74,80,74,40,74L0,74Z"
                className="animate-wave opacity-100 [animation-delay:-4s]"
              />
            </svg>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
