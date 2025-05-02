
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="py-20 bg-restaurant-soft-purple/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <span className="inline-block bg-restaurant-soft-purple text-restaurant-secondary px-4 py-1 rounded-full text-sm font-medium mb-4">
              Our Story
            </span>
            <h2 className="section-heading">A Culinary Journey Since 1998</h2>
            <div className="w-20 h-1 bg-restaurant-accent mb-6"></div>
            <p className="text-gray-700 mb-6">
              Founded by renowned chef Michael Laurent, Dine & Delight began as a small bistro with a big vision. Over two decades later, we've grown into a culinary landmark known for our innovative approach to classic cuisine.
            </p>
            <p className="text-gray-700 mb-6">
              Our philosophy is simple: use the finest seasonal ingredients, prepare them with respect and creativity, and serve them in an atmosphere of warmth and hospitality. Every dish tells a story, and every meal becomes a memory.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-playfair text-2xl font-bold text-restaurant-secondary mb-2">25+</h4>
                <p className="text-gray-600">Years of Excellence</p>
              </div>
              <div>
                <h4 className="font-playfair text-2xl font-bold text-restaurant-secondary mb-2">12</h4>
                <p className="text-gray-600">Culinary Awards</p>
              </div>
              <div>
                <h4 className="font-playfair text-2xl font-bold text-restaurant-secondary mb-2">35+</h4>
                <p className="text-gray-600">Skilled Professionals</p>
              </div>
              <div>
                <h4 className="font-playfair text-2xl font-bold text-restaurant-secondary mb-2">150+</h4>
                <p className="text-gray-600">Signature Dishes</p>
              </div>
            </div>
            
            <Button asChild className="bg-restaurant-primary hover:bg-restaurant-secondary">
              <Link to="/about">
                Learn More About Us
              </Link>
            </Button>
          </div>
          
          {/* Right Column - Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80" 
                  alt="Restaurant interior" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg mb-4"
                />
                <img 
                  src="https://images.unsplash.com/photo-1572715376701-98568319fd0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80" 
                  alt="Chef preparing food" 
                  className="w-full h-40 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80" 
                  alt="Signature dish" 
                  className="w-full h-40 object-cover rounded-lg shadow-lg mb-4"
                />
                <img 
                  src="https://images.unsplash.com/photo-1471253794676-0f039a6aae9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80" 
                  alt="Restaurant ambience" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
            
            {/* Floating achievement badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-xl p-4 w-48">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-restaurant-primary rounded-full flex items-center justify-center text-white text-xl font-bold mr-3">
                  #1
                </div>
                <div>
                  <p className="text-sm text-gray-600">Voted</p>
                  <p className="font-bold text-restaurant-dark">Best Fine Dining 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
