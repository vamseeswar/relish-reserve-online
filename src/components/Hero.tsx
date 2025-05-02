
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h5 className="font-lato uppercase tracking-widest mb-4 animate-fade-in" style={{animationDelay: '0.2s'}}>
            A Culinary Journey
          </h5>
          <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in" style={{animationDelay: '0.4s'}}>
            Discover the Art of <span className="text-restaurant-primary">Fine Dining</span>
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8 animate-fade-in max-w-2xl mx-auto" style={{animationDelay: '0.6s'}}>
            Experience an exceptional culinary journey where every dish tells a story of passion, creativity, and the finest ingredients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: '0.8s'}}>
            <Button asChild className="bg-restaurant-accent hover:bg-restaurant-accent/90 text-white font-medium text-base px-8 py-6">
              <Link to="/menu">
                Explore Our Menu
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-restaurant-dark font-medium text-base px-8 py-6">
              <Link to="/book">
                Book a Table
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-fade-in" style={{ animationDelay: '1.2s' }}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
